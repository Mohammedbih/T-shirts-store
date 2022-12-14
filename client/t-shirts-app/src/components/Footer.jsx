import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => {
  rootBox: {
    justifyContent: "center";
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer>
        <Container maxWidth="lg">
          <Box
            py={6}
            display="flex"
            flexWrap="wrap"
            alignItem="center"
            className={classes.rootBox}
          >
            <Link href="#" color="inherit" underline="none">
              {/* {brand} */}
            </Link>
          </Box>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
