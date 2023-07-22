// import React from "react";
// import {makeStyles} from "@material-ui/core";

// import Colors from "../../../styles/Colors";

// const styles = makeStyles((theme) => ({
// 	outerSurface: {
// 		width: "100%",

// 		display: "flex",
// 		flexDirection: "column",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		alignContent: "center",
// 	},

// 	heading: {
// 		width: "100%",

// 		display: "flex",
// 		flexWrap: "no-wrap",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		alignContent: "center",

// 		fontSize: "20px",
// 		fontWeight: "400",

// 		color: Colors.themeFontColor,
// 	},

// 	head2: {
// 		width: "100%",
// 		marginBottom: 20,

// 		display: "flex",
// 		flexWrap: "no-wrap",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		alignContent: "center",

// 		fontSize: "50px",
// 		fontWeight: "600",

// 		color: Colors.nameColor,
// 	},

// 	kotha: {
// 		marginBottom: 50,
// 		lineHeight: 1.3,

// 		display: "flex",
// 		flexWrap: "no-wrap",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		alignContent: "center",

// 		fontSize: 18,
// 		textAlign: "center",
// 		fontWeight: 300,

// 		color: Colors.motoColor,

// 		[theme.breakpoints.down("md")]: {
// 			width: "100%",
// 		},

// 		[theme.breakpoints.up("md")]: {
// 			width: "75%",
// 		},
// 	},

// 	mailMe: {
// 		width: "150px",
// 		height: "60px",
// 		marginBottom: 70,

// 		border: "solid 1px #64FFDA",
// 		color: "#64FFDA",
// 		fontSize: "18px",
// 		cursor: "pointer",

// 		"&:hover": {
// 			backgroundColor: "#293d5a",
// 		},
// 	},

// 	mailLink: {
// 		width: "100%",
// 		height: "100%",
// 		textDecoration: "none",
// 		userSeclect: "none",
// 		color: "#64FFDA",

// 		display: "flex",
// 		flexWrap: "no-wrap",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		alignContent: "center",
// 	},
// }));

// const Contact = () => {
// 	const classes = styles();
// 	return (
// 		<div className={classes.outerSurface}>
// 			<div className={classes.heading}>05. What's Next?</div>
// 			<div className={classes.head2}>Get In Touch</div>
// 			<div className={classes.kotha}>
				
// 				My Inbox is always opened. You can communicate with me through email or linkedin if you
// 				want. I'll try my best to answer back!!!
// 			</div>
// 			<div className={classes.mailMe}>
// 				<a className={classes.mailLink} href="mailto:harisingh.bisht2001@gmail.com">
// 					Say Hello
// 				</a>
// 			</div>
// 		</div>
// 	);
// };

// export default Contact;


import React from "react";
// import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");


  


  var templateParams = {
      name: name,
      email: email,
      message: message,
    };

 

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.send('service_6k5q6mj', 'template_ifuxr5s', templateParams,'kQjJHcLpSeJIdD6FU')


            .then((response) => {


                console.log('SUCCESS!', response.status, response.text);


                alert('Message sent successfully');

                setMessage('');
                setName('');
                setEmail('');
                e.target.reset();
            },(error) => {
                console.log('FAILED...', error);
                alert('Some technical error');
            });
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-header">
        <h3>Contact Me</h3>
        <p className="why">Let's Keep In Touch</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="contactDetails">
        <div className="contactForm">
          <div className="topCtn">
            <div className="callBtn btnTp">
              <FaPhoneAlt color=" #f36303"/>
              <p style={{color:"#fff"}}>PHONE</p>
              <span style={{color:"#fff"}}>Contact me </span>
              <p className="contactNo">
                <a href="tel:9675286699" target="_blank" rel="noreferrer">
                  9675286699
                </a>
              </p>
            </div>
            <div className="emailBtn btnTp">
              <MdEmail color=" #f36303"/>
              <p style={{color:"#fff"}}>EMAIL</p>
              <span style={{color:"#fff"}}>Contact me on email address</span>

              <p className="contactNo">
                <a href="/" target="_blank">

                harisingh.bisht2001@gmail.com
                </a>
              </p>
            </div>
            <div className="addrBtn btnTp">

              <FaMapMarkerAlt color=" #f36303" />
              <p style={{color:"#fff"}}>LOCATION</p>
              <span style={{color:"#fff"}}>Rudrapur,Udham Singh Nagar - 263153 </span>

              <p className="contactNo" >
                <a href="https://maps.app.goo.gl/F6576mYbjf6NuSrB8" target="_blank" rel="noreferrer" >

                  View on Google Map
                </a>
              </p>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className="formInput">
              <div className="leftForm">
                <div className="rows">
                  <input
                    type="text"
                    name="user_name"
                    pattern="[A-Za-z]{3,}"
                   
                    id="name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    placeholder="Full Name: "
                    required={true}
                  />
                </div>
                <div className="rows">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    
                    placeholder="Your Email:"
                    required={true}
                  />
                </div>
                
              </div>
              <div className="rightForm">
                <div className="rows">
                  <textarea
                    name="message"
                    id="inputMessage"
                    cols="0"
                    rows="9"
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                    placeholder="Your Message:"
                    required={true}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="formSubmit">
              <div className="sendButton" colSpan="2">
                <button type="submit" value="Send">Send Message</button>
              </div>
            </div>
          </form>

   <div className="main_form">
   
    </div>
        </div>
      </div>
    </div>
  );
}
