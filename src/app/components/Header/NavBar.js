import React from "react";
import {Link} from "react-scroll";
import Resume from "../Resume/fw19_1112-Hari_Bisht_Resume.pdf"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./NavBarStyles";

const NavBar = () => {
	const classes = styles();

	const handleDownloadNewPageResume = () => {
		const newWindow = window.open("https://drive.google.com/file/d/1wzouvP4TRLnlWNCllsC0_NyGEFygoAe-/view?usp=share_link", "_blank", "noopener,noreferrer");
	
		if (newWindow) newWindow.opener = null;
	
		fetch(Resume).then(response => {
		  response.blob().then(blob => {
			  // Creating new object of PDF file
			  const fileURL = window.URL.createObjectURL(blob);
			  // Setting various property values
			  let alink = document.createElement('a');
			  alink.href = fileURL;
			  alink.download = "fw19_1112-Hari_Bisht_Resume.pdf"
			  alink.click();
		  })
	  })
	  };


	return (
		<div className={classes.root} >
			<div className={classes.webNav} >
				<div 
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="700"
					data-aos-easing="ease-in-out">
					<Link
						activeClass="active"
						to="aboutMe"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<p style={{fontSize:"18px"}} className={classes.p1}>01.</p>
						<p  style={{fontSize:"18px"}} className={classes.p2}>&nbsp;&nbsp;About</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="900"
					data-aos-easing="ease-in-out">
					<Link
						activeClass="active"
						to="education"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<p  style={{fontSize:"18px"}} className={classes.p1}>02.</p>
						<p style={{fontSize:"18px"}} className={classes.p2}>&nbsp;&nbsp;Education</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1100"
					data-aos-easing="ease-in-out">
					<Link activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={500}>
						<p style={{fontSize:"18px"}} className={classes.p1}>03.</p>
						<p style={{fontSize:"18px"}} className={classes.p2}>&nbsp;&nbsp;Experience</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1500"
					data-aos-easing="ease-in-out">
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<p style={{fontSize:"18px"}} className={classes.p1}>04.</p>
						<p style={{fontSize:"18px"}} className={classes.p2}>&nbsp;&nbsp;Work</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1700"
					data-aos-easing="ease-in-out">
					<Link
						activeClass="active"
						to="contactMe"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<p style={{fontSize:"18px"}} className={classes.p1}>05.</p>
						<p style={{fontSize:"18px"}} className={classes.p2}>&nbsp;&nbsp;Contact</p>
					</Link>
				</div>

				<div
					className={classes.resume}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1900"
					data-aos-easing="ease-in-out">
					<Link 
						onClick={handleDownloadNewPageResume}
						href="https://drive.google.com/file/d/1wzouvP4TRLnlWNCllsC0_NyGEFygoAe-/view?usp=share_link"
						target="blank"
						className={classes.linkNav}
						download
					>
					Resume
					</Link>
				</div>
			</div>
			<div className={classes.mobileNav}>
				<HamburgerMenu />
			</div>
		</div>
	);
};

export default NavBar;
