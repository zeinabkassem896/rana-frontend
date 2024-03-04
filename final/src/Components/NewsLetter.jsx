// import { Send } from "@material-ui/icons";
// import styled from "styled-components";

// import { mobile } from "../responsive";

// const Container = styled.div`
//   height: 60vh;
//   background-color: #fcf5f5;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Title = styled.h1`
//   font-size: 70px;
//   margin-bottom: 20px;
// `;
// const Desc = styled.div`
//   font-size: 24px;
//   font-weight: 300;
//   margin-bottom: 20px;
//   ${mobile({ textAlign: "center" })}
// `;
// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgray;
//   ${mobile({ width: "80%" })}
// `;
// const Input = styled.input`
//   border: none;
//   flex: 8;
//   padding-left: 20px;
// `;
// const Button = styled.button`
//   flex: 1;
//   border: none;
//   background-color: teal;
//   color: white;

//   &:hover {
//     background-color: black;
//     cursor: pointer;
//   }
// `;

// const Newsletter = () => {
//   return (
//     <Container>
//       <Title>Newsletter</Title>
//       <Desc>Get timely updates from your favorite products.</Desc>
//       <InputContainer>
//         <Input placeholder="Your email" />
//         <Button>
//           <Send />
//         </Button>
//       </InputContainer>
//     </Container>
//   );
// };

// export default Newsletter;


import { useRef } from "react";
import emailjs from "emailjs-com";
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  ${mobile({ heigth:'10vh' ,padding:'4px'})}
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center",fontSize:'35px' })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" ,fontSize:'18px'})}
`;

const InputContainer = styled.form`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "90%"})}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  ${mobile({ fontSize:'15px'})}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;

  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

const Contact = () => {
    const form = useRef(); 
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_wa1l93c", "template_1ztvmwj", form.current, "Tp9mzvG2iGc9Pftoa")
        .then(
          (result) => {
            console.log(result.text);
            alert("The feedback was successfully sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
  
      form.current.reset(); // Reset the form after sending the email
    };
  
    return (
      <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer onSubmit={sendEmail} ref={form}>
          {/* Add the 'ref' attribute to the form element */}
          <Input type="email" placeholder="Your email" name="user_email" required />
          <Button type="submit">
            <Send />
          </Button>
        </InputContainer>
      </Container>
    );
  };
  
  export default Contact;