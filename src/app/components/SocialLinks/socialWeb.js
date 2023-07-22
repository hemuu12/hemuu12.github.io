import React from "react";
import {makeStyles} from "@material-ui/core";
import Colors from "../../styles/Colors";

import GithubIcon from "../Icons/Github";
import LinkedinIcon from "../Icons/Linkedin";
import QuoraIcon from "../Icons/Quora";

const styles = makeStyles(() => ({
	outerSurface: {
		width: "100%",
		height: "90vh",

		display: "flex",
		flexDirection: "column",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	lineBox: {
		width: "100%",
		height: "20vh",

		display: "flex",
		flexDirection: "row",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	line: {
		height: "100%",
		width: "1px",
		backgroundColor: Colors.iconColor,
	},

	iconBox: {
		width: "100%",
		height: "70vh",

		display: "flex",
		flexDirection: "column",
		flexWrap: "no-wrap",
		justifyContent: "flex-start",
		alignItems: "center",
		alignContent: "center",
	},

	iconBoxLayer2: {
		width: "100%",
		height: "70vh",

		display: "flex",
		flexDirection: "column",
		flexWrap: "no-wrap",
		justifyContent: "flex-end",
		alignItems: "center",
		alignContent: "center",
	},

	iconBoxLayer1: {
		width: "100%",
		height: "5vh",
	},

	icon: {
		height: "40px",
		width: "20px",

		backgroundColor: Colors.mediumDarkNavy,
		cursor: "pointer",

		transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
	},

	SVG: {
		width: "100%",
		height: "80%",
		marginTop: "20%",

		fill: Colors.iconColor,

		"&:hover": {
			marginTop: "10%",
			fill: Colors.themeFontColor,
		},
	},
}));

const SocialWeb = () => {
	const classes = styles();
	return (
		<div className={classes.outerSurface}>
			<div className={classes.iconBox}>
				<div className={classes.iconBoxLayer2}>
					<div className={classes.icon}>
						<a href="https://github.com/hemuu12" target="blank">
							<GithubIcon iconStyles={classes.SVG} />
						</a>
					</div>

					<div className={classes.icon}>
						<a href="https://www.linkedin.com/in/hari-singh-bisht-02bb101a1" target="blank">
							<LinkedinIcon iconStyles={classes.SVG} />
						</a>
					</div>
					<div className={classes.icon}>
						<a href="https://www.quora.com/profile/Hari-Singh-Bisht-5" target="blank">
							<QuoraIcon iconStyles={classes.SVG} />
						</a>
					</div>
				</div>
				<div className={classes.iconBoxLayer1}></div>
			</div>

			<div className={classes.lineBox}>
				<div className={classes.line}></div>
			</div>
		</div>
	);
};

export default SocialWeb;
