import React from "react";

import Colors from "../../../styles/Colors";
import styles from "./IntroStyles";
import { Link } from "react-router-dom"
import Resume from "../../../components/Resume/fw19_1112-Hari_Bisht_Resume.pdf"

const Intro = () => {
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
		<div className={classes.intro}>
			<div
				style={{color: Colors.themeFontColor}}
				className={classes.hi}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1100"
				data-aos-easing="ease-in-out">
				Hi, my name is
			</div>

			<div
				style={{color: Colors.nameColor}}
				className={classes.name}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1200"
				data-aos-easing="ease-in-out">
				Hari Singh Bisht
			</div>

			<div
				style={{color: Colors.motoColor}}
				className={classes.moto}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1300"
				data-aos-easing="ease-in-out">
				I write codes to stay alive :)
			</div>

			<div
				style={{color: Colors.shortDescriptionColor}}
				className={classes.shortDescription}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1400"
				data-aos-easing="ease-in-out">
				I have completed my undergrad from BCA,SADC . Currently, I am working on My Skills.
			</div>

			<div
				className={classes.mailMe}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1500"
				data-aos-easing="ease-in-out">
				<Link onClick={handleDownloadNewPageResume} className={classes.mailLink} href="https://drive.google.com/file/d/1wzouvP4TRLnlWNCllsC0_NyGEFygoAe-/view?usp=share_link" download>
					Resume
				</Link>
			</div>
		</div>
	);
};

export default Intro;
