import React from "react";

const Address = () => {
    return (
        <>
            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-map position-absolute"></i>
                <span className="d-block">Address Point</span>Rudrapur city ,
                Uttarakhand 263153.
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-envelope-open position-absolute"></i>
                <span className="d-block">mail me</span>{" "}
                <a href="nazarov_asadbek_official@mail.com">harisingh.bisht@gmail.com</a>
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-phone-square position-absolute"></i>
                <span className="d-block">call me</span>{" "}
                <a href="Tel: +216 21 184 010">+919675286699</a>
            </p>
            {/* End .custom-span-contact */}
        </>
    );
};

export default Address;
