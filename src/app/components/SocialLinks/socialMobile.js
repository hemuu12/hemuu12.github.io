import React from "react";
import {makeStyles} from "@material-ui/core";
import Colors from "../../styles/Colors";

import GithubIcon from "../Icons/Github";
import LinkedinIcon from "../Icons/Linkedin";
import QuoraIcon from "../Icons/Quora";

const styles = makeStyles(() => ({
	outerSurface: {
		width: "100%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	iconHolder: {
		height: "40px",
		width: "100%",

		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		alignContent: "center",
	},

	icon: {
		height: "25px",
		width: "25px",
	},

	SVG: {
		width: "100%",
		height: "80%",
		marginTop: "20%",

		fill: Colors.iconColor,
	},
}));

const SocialMobile = () => {
	const classes = styles();
	return (
		<div className={classes.outerSurface}>
			<div className={classes.iconHolder}>
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
		</div>
	);
};

export default SocialMobile;
