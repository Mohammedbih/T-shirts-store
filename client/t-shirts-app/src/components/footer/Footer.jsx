// import React from "react";
// import { MyContainer } from "./FooterStyles";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";

// export default function Footer() {
//   return (
//     <footer>
//       <Box
//         px={{ xs: 3, sm: 10 }}
//         py={{ xs: 5, sm: 10 }}
//         bgcolor="text.secondary"
//         color="white"
//       >
//         <MyContainer maxWidth="lg">
//           <Grid Container spacing={5}>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Help</Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Contact
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Support
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Privacy
//                 </Link>
//               </Box>
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Account</Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   SignIn
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   SingUp
//                 </Link>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Messages</Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Beckup
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   History
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Roll
//                 </Link>
//               </Box>
//             </Grid>
//           </Grid>
//           <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
//             T-Store &reg; {new Date().getFullYear()}
//           </Box>
//         </MyContainer>
//       </Box>
//     </footer>
//   );
// }



import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#6C0BA9", textAlign: "center", marginTop: "-50px" }}>
        T-Store
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink>T-Store for modern t-shirts</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#"></FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="http://www.instagram.com">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <div textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 0, sm: 0 }}>
          T-Store &reg; {new Date().getFullYear()}
        </div>
      </Container>
    </Box>
  );
};
export default Footer;
