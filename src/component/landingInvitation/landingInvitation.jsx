import React from "react";
import "./style.css";

const LandingInvitation = () => {
  return (
    <div className="container invitation-container">
      <div className="invitation">
        <div className="d-block d-md-flex justify-content-between">
          <h3 style={{ maxWidth: "300px" }}>Lorem ipsum dolor sit amet.</h3>
          <br />
          <div className="d-flex align-items-center">
            <button className="btn bg-light py-3 button-mulai">
              Mulai Dari Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingInvitation;
