// import React from "react";
// import "./ContactUs.css";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { CiPhone } from "react-icons/ci";
// import { IoBriefcaseOutline } from "react-icons/io5";
// import { SlEnvolopeLetter } from "react-icons/sl";

// const Contactpage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1500 });
//   }, []);
//   return (
//     <div className="contactpage-main">
//       <div className="contactus-info">
//         <div className="contactus-info-part" data-aos="fade-right">
//           <CiPhone className="contactus-info-icon" />
//           <p className="small-text">Call Us At</p>
//           <p className="small-text">Phone: +961 71278708</p>
//         </div>
//         <div className="contactus-info-part" data-aos="fade-up">
//           <IoBriefcaseOutline className="contactus-info-icon" />
//           <p className="small-text">For any career-related info</p>
//           <p className="small-text">Adelshkeir12@gmail.com</p>
//         </div>
//         <div className="contactus-info-part" data-aos="fade-left">
//           <SlEnvolopeLetter className="contactus-info-icon" />
//           <p className="small-text">For anything else</p>
//           <p className="small-text">Adelshkeir@outlook.com</p>
//         </div>
//       </div>
//       <iframe
//         data-aos="fade-left"
//         title="map"
//         className="map"
//         width="100%"
//         height="600"
//         frameBorder="0"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.492919546973!2d35.50949731525133!3d33.89385322970829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f43abbd4e23ad%3A0x7e3d6f8b9572d4e7!2sBeirut%20Arab%20University!5e0!3m2!1sen!2slb!4v1631056507406!5m2!1sen!2slb&markers=color:red%7Clabel:A%7C33.8947183%2C35.5117297"
//         allowFullScreen=""
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// };

// export default Contactpage;

import React from 'react';
import "./ContactUs.css";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Announcement from '../../Components/Announcement';
import Newsletter from "../../Components/NewsLetter";
import { useRef } from "react";
import emailjs from "emailjs-com";
const ContactForm = () => {

    const form = useRef(); 
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_jxtkgl9", "template_oud776n", form.current, "Tp9mzvG2iGc9Pftoa")
        .then(
          (result) => {
            console.log(result.text);
            alert("The message was successfully sent, we will come back to you soon. ");
          },
          (error) => {
            console.log(error.text);
          }
        );
  
      form.current.reset(); // Reset the form after sending the email
    };
  return (
    <>
     
    <div className='contactus-main'>

    <Navbar/>
    <Announcement/>
    < div className='contactus'>
    <div className="wrapper">
      <form action="#" method="post" onSubmit={sendEmail} ref={form}>
        <div className="field">
          <input type="text" id="name" name="user_name" placeholder="Who are you?" autoFocus />
          <label htmlFor="name">Name</label>
        </div>
        <div className="field">
          <input type="text" id="email" name="user_email" placeholder="name@domain.tld" />
          <label htmlFor="email">E-Mail</label>
        </div>
        <div className="field">
          <textarea id="msg" rows="4" name="user_msg" placeholder="Your message..."></textarea>
          <label htmlFor="msg">Message</label>
        </div>
        <input className="button" type="submit" value="Send" />
      </form>
     
    </div>
    {/* <iframe
    data-aos="fade-left"
    title="map"
   className="map"
   width="100%"
   height="600"
   frameBorder="0"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.492919546973!2d35.50949731525133!3d33.89385322970829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f43abbd4e23ad%3A0x7e3d6f8b9572d4e7!2sBeirut%20Arab%20University!5e0!3m2!1sen!2slb!4v1631056507406!5m2!1sen!2slb&markers=color:red%7Clabel:A%7C33.8947183%2C35.5117297"
    allowFullScreen=""
   loading="lazy"
  ></iframe> */}

  </div>
  <Newsletter/>
  <Footer/>
  </div>
 
</>
  );
};

export default ContactForm;

