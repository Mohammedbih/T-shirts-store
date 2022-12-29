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

// import React from "react";
// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./FooterStyles";

// const Footer = () => {
//   return (
//     <Box>
//       <h1 style={{ color: "#6C0BA9", textAlign: "center", marginTop: "-50px" }}>
//         T-Store
//       </h1>
//       <Container>
//         <Row>
//           <Column>
//             <Heading>About Us</Heading>
//             <FooterLink>T-Store for modern t-shirts</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#"></FooterLink>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="http://www.instagram.com">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>Instagram</span>
//               </i>
//             </FooterLink>
//           </Column>
//         </Row>
//         <div textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 0, sm: 0 }}>
//           T-Store &reg; {new Date().getFullYear()}
//         </div>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Desc>T-Store for modern and cool t-shirts.</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Pages</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>MyAccount</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@OT5.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        <div textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 10, sm: 20 }}>
          &reg; {new Date().getFullYear()}
        </div>
      </Right>
    </Container>
  );
};

export default Footer;
