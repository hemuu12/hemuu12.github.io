import React from "react";

const skillsContent = [
    {skillClass: "p40", skillPercent: "60", skillName: "HTML"},
    {skillClass: "p30", skillPercent: "70", skillName: "JAVASCRIPT"},
    {skillClass: "p20", skillPercent: "60", skillName: "CSS"},
    // {skillClass: "p10", skillPercent: "10", skillName: "PHP"},
    {skillClass: "p30", skillPercent: "40", skillName: "REDUX"},
    {skillClass: "p20", skillPercent: "50", skillName: "REACT"},
    {skillClass: "p50", skillPercent: "20", skillName: "VUE"},
];

const Skills = () => {
    return (
        <>
            {skillsContent.map((val, i) => (
                <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
                    <div className={`c100 ${val.skillClass}`}>
                        <span>{val.skillPercent}%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                        {val.skillName}
                    </h6>
                </div>
            ))}
        </>
    );
};

export default Skills;
