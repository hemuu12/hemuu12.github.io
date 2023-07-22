import React from "react";

import TitleHead from "../../../components/TitleHead/TitleHead";
import DP from "../../../assets/khan.jpg";
import styles from "./AboutMeStyles";

const AboutMe = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="01." caption="About Me" />
			</div>

			<div className={classes.content}>
				<div className={classes.left}>
					Hi! I'm Hari Singh Bisht. I have completed mu undergrad from{" "}
					<a className={classes.link} href="/" target="blank">
						Surajmal Agarwal Degree College
					</a>{" "}
					and my major is in{" "}
					<a className={classes.link} href="/" target="blank">
						Bachelors of Computer and Application.
					</a>{" "}
					<br />
					<br />
					I enjoy coding in javascript, React. I also love to make webapps using the MERN stack.Worked through 1000+ hours of learning HTML, CSS, JavaScript, React, React-Redux, and Chakra-UI. Looking to start a career as a web developer with a reputed firm driven by technology.
					<br />
				</div>
				<div className={classes.right}>
					<div className={classes.imageContainer}>
						<img className={classes.dp} src={DP} alt="" />
						<div className={classes.dpCover}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
