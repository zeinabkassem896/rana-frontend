// import {
//     Facebook,
//     Instagram,
//     MailOutline,
//     Phone,
//     Room,
//     Twitter,
//     WhatsApp, // Import WhatsApp icon
//   } from "@material-ui/icons";
//   import styled from "styled-components";
  
//   import { mobile } from "../responsive";
  
//   const Container = styled.div`
//     display: flex;
//     ${mobile({ flexDirection: "column" })}
//   `;
  
//   const Left = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//   `;
  
//   const Logo = styled.h1`
//   margin-bottom: 25px;
//   `;
  
//   const Desc = styled.p`
//     margin: 3px 0px;
//     text-align: justify;
//   `;
  
//   const SocialContainer = styled.div`
//     display: flex;
//   `;
  
//   const SocialIcon = styled.div`
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     color: white;
//     background-color: #${(props) => props.color};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 20px;
//     margin-top: 15px;
//   `;
  
//   const Center = styled.div`
//     flex: 1;
//     padding: 20px;
//     ${mobile({ display: "none" })}
//   `;
  
//   const Title = styled.h3`
//     margin-bottom: 30px;
//   `;
  
//   const List = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
//   `;
  
//   const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
//   `;
  
//   const Right = styled.div`
//     flex: 1;
//     padding: 20px;
//     ${mobile({ backgroundColor: "#fff8f8" })}
//   `;
  
//   const ContactItem = styled.div`
//     margin-bottom: 20px;
//     display: flex;
//     align-items: center;
//   `;
  
//   const Payment = styled.img`
//     width: 50%;
//   `;
  
//   const Footer = () => {
//     return (
//       <Container>
//         <Left>
//           <Logo>Grapsy.</Logo>
//           <Desc>
//             There are many variations of passages of Lorem Ipsum available, but
//             the majority have suffered alteration in some form, by injected
//             humour, or randomised words which don’t look even slightly believable.
//           </Desc>
//           <SocialContainer>
//             <SocialIcon color="3B5999">
//                <Facebook /> 
//             </SocialIcon>
//             <SocialIcon color="E4405F">
//                <Instagram /> 
//             </SocialIcon>
//             <SocialIcon color="55ACEE">
//                <Twitter /> 
//             </SocialIcon>
//             <SocialIcon color="25D366"> {/* WhatsApp color */}
//                <WhatsApp /> 
//             </SocialIcon>
//           </SocialContainer>
//         </Left>
//         <Center>
//           <Title>Useful Links</Title>
//           <List>
//             <ListItem>Home</ListItem>
//             <ListItem>Cart</ListItem>
//             <ListItem>Man Fashion</ListItem>
  
//             <ListItem>My Account</ListItem>
//             <ListItem>Order Tracking</ListItem>
//             <ListItem>Wishlist</ListItem>
//             <ListItem>Wishlist</ListItem>
//             <ListItem>Terms</ListItem>
//           </List>
//         </Center>
//         <Right>
//           <Title>Contact</Title>
//           <ContactItem>
//             <Room style={{ marginRight: "10px" }} /> Konepajakatu 3850, Helsinki -
//             00400
//           </ContactItem>
//           <ContactItem>
//             <Phone style={{ marginRight: "10px" }} /> +358 123 4567
//           </ContactItem>
//           <ContactItem>
//             <MailOutline style={{ marginRight: "10px" }} /> moi@heal.com
//           </ContactItem>
//         </Right>
//       </Container>
//     );
//   };
  
//   export default Footer;

// Footer.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from './useScrolltotp';
import "./Footer.css"


import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  margin-bottom: 25px;
`;

const Desc = styled.p`
  margin: 3px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
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
  // margin-left:160px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
const InstagramLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
const Footer = () => {
  useScrollToTop();


  useEffect(() => {
    // Scroll to the top of the page when Home link is clicked
    const handleHomeClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    const homeLink = document.getElementById("home-link");
  
    if (homeLink) {
      homeLink.addEventListener("click", handleHomeClick);
    }
  
    // Cleanup the event listener when the component unmounts
    return () => {
      if (homeLink) {
        homeLink.removeEventListener("click", handleHomeClick);
      }
    };
  }, []);
  
  return (
    <Container className="footer-main-cl">
      <Left>
        <Logo style={{marginRight:'470px'}}>Peeksbymn.</Logo>
        <Desc>
 Today we strive to become a Fashion brand known for its quality
         products and modern looks At the core of what we are is ensuring 
         every customer feels valued and beautiful. Putting the customer 
         first allows us to focus on the important things like fast and 
         reliable customer service,
         on trend fashion and prices that cater to everyone’s needs.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
             <Facebook /> 
          </SocialIcon>
          <SocialIcon color="E4405F">
        <InstagramLink href="https://www.instagram.com/peeksbymn/?hl=en" target="_blank">
          <Instagram />
        </InstagramLink>
      </SocialIcon>
          <SocialIcon color="55ACEE">
             <Twitter /> 
          </SocialIcon>
          <SocialIcon color="25D366">
             <WhatsApp /> 
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title className='footer-useful-link' >Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/" className='home-footer'  id="home-link">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/addToCart" className='cart-footer' >
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/checkout" className='checkout-footer'>
              Checkout
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/contactus" className='contactus-footer' >
              Contact Us
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/findus"  className='findus-footer'>
             Find Us
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/blogs" className='blogs-footer' >
             Blogs
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/register" className='login-footer'style={{marginRight:'2px'}} >
             Register
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/login" className='login-footer' >
             Sign In
            </Link>
          </ListItem>

        </List>
      </Center>
      <Right>
        <Title className='the-last-footer-title'  >Contact</Title>
        <ContactItem>
          <Room   className='fix-space-of-logo'/> Tyre - in front of alfa store
        </ContactItem>
        <ContactItem>
          <Phone className='fix-space-of-logo' /> +961 81 321 441
        </ContactItem>
        <ContactItem>
          <MailOutline  className='fix-space-of-logo'/>  peeksbymnlb@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
