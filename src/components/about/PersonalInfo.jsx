import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Hari" },
  { meta: "last name", metaInfo: "Singh Bisht" },
  { meta: "Age", metaInfo: "21 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Address", metaInfo: "Uttarakhand" },
  { meta: "phone", metaInfo: "+919675286699" },
  { meta: "Email", metaInfo: "harisingh.bisht2001@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
