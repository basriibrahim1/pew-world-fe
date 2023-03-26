import React from "react";
import peworld from "../../assets/pw-white.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0" style={{ backgroundColor: "#5E50A1"}}>
        <div className="container">
          <div className="m-5 border-bottom border-2">
            <img className="mt-5 mb-5" src={peworld} alt="" />
            <div className="w-25 text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quasi porro odio error eveniet perferendis iure?
            </div>
          </div>
          <div className="text-white d-flex ms-5 w-100 justify-content-between pb-3 ">
            <p>2020 Pewworld. All right reserved</p>
            <div className="d-flex me-5 justify-content-end ">
              <p className="me-5">Telepon</p>
              <p className="mx-5">Email</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
