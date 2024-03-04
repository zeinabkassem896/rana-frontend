// import styled from "styled-components";
// import { mobile } from "../../responsive";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//     rgba(255, 255, 255, 0.5),
//     rgba(255, 255, 255, 0.5)
//   ),
//   url("https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-5b054.appspot.com/o/register.jpeg?alt=media&token=0c8e213f-b4ae-49df-ac36-2587298edeea")
//   center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 40%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
//   width: 20px;
// `;

// const Select = styled.select`
//   flex:  1;
//   min-width:  40%;
//   margin:  20px  10px 0px  0px;
//   padding:  12px;
//   margin-right: 120px;
//   justifyContent:'center'
//   border-radius:  4px; /* Adjust to match the Input border-radius */
//   appearance: none; /* Removes default browser styling */
//   background-color: white; 
 
//   -webkit-appearance: none; /* For Safari */
//   -moz-appearance: none; /* For Firefox */
//   outline: none; /* Removes the default focus outline */
// `;


// const Option = styled.option`
//   font-size: 14px;
// `;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;

// const Register = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Title style={{ margin: "auto" }}>CREATE AN ACCOUNT</Title>
//         <Form>
//           <Input placeholder="name" />
//           <Input placeholder="last name" />
//           <Input placeholder="username" />
//           <Input placeholder="email" />
//           <Input placeholder="password" />
//           <Input placeholder="confirm password" />
//           <Select style={{ margin: "auto", color: "grey", marginLeft: '125px', marginRight: '130px', marginTop: "30px", width: '10px' }}>
//             <Option value="">Select User Type</Option>
//             <Option value="Creator">Creator</Option>
//             <Option value="Viewer">Viewer</Option>
//           </Select>
//           <Button style={{ margin: "auto", marginTop: "34px" }}>CREATE</Button>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import { mobile } from "../../responsive";
import "./Register.css"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-5b054.appspot.com/o/register.jpeg?alt=media&token=0c8e213f-b4ae-49df-ac36-2587298edeea")
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width:'610px', lignItems:'center', display:'flex', flexDirection:'row' })}
 
`;


const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  @media (max-width: 368px) {
    
    width: 90%;
    padding: 20px;
    background-color: white;

}
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({fontSize:'15px',alignItems:'center' })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ width:'100%',alignItems:'center' })}
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  text-transform: none;
  ${({ type }) => type === 'password' && 'autocomplete: new-password;'};
  ${({ name }) => name === 'email' && 'autocomplete: email;'}
  ${mobile({ width:'100px',alignItems:'center' ,fontSize:'12px',gap:'8px'})}
`;

const Link = styled.a`
  margin: 5px 0px;
  margin-top: 1px; 
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;


const Select = styled.select`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 12px;
  margin-right: 120px;
  border-radius: 4px;
  appearance: none;
  background-color: white; 
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  ${mobile({ width:'fill',justifyContent:'center',fontSize:'15px',margin:' 30px 190px auto 155px',color:' grey'})}
`;

const Option = styled.option`
  font-size: 14px;
  ${mobile({ fontSize:'10px'})}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ fontSize:'10px',width:'60%', height:'full' })}
`;


const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const goToLogin = () => {
    navigate('/login');
  };
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Validate password and confirmPassword match
      if (registerData.password !== registerData.confirmPassword) {
        console.error("Passwords do not match");
        return;
      }
  
      // const endpoint = registerData.userType === 'admin' ? '/register/admin' : '/register/user';
      const response = await axios.post(
        "http://localhost:4000/api/register",
        registerData
      );
  
      console.log('errorsss',response.data.data);
  
      setRegisterData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
     
        userType: "",
      });
      console.log('errorsss',response.data);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Failed to register", error);
      // Handle the error or return an appropriate response
    }
    
    
  };

  return (
    <Container>
      <Wrapper  className="registercontainer">
        <Title style={{ margin: "auto" }}>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="firstName"
            value={registerData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <Input
            type="text"
            name="lastName"
            value={registerData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          <Input
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleInputChange}
            placeholder="Username"
            autoComplete="username"
          />
          <Input
            type="text"
            name="email"
            value={registerData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <Input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleInputChange}
            placeholder="Password"
            autoComplete="new-password"
          />
          <Input
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            autoComplete="new-password"
          />
          <Select className="pushtoright" style={{ margin: "auto", marginLeft: '125px', marginRight: '130px',
           marginTop: "30px", width: '10px' }}
            name="userType"
            value={registerData.userType}
            onChange={handleInputChange}
          >
            <Option className="ss-r" value="">Select User Type</Option>
            <Option className="ss-r" value="admin">Admin</Option>
            <Option className="ss-r" value="user">User</Option>
          </Select>
          <Button style={{ margin: "auto", marginTop: "34px" }} type="submit">CREATE</Button>
        </Form>
        <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'center', textDecoration: 'Bold', gap: '6px' }}>
          <p className="register-p">Already Have an Account?</p>
          <Link className="register-link" onClick={goToLogin}>
            {' '}
            Login
          </Link>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Register;
