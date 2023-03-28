import React from "react";
import logo from "./../../assets/logo.png";
import landingPage1 from "../../assets/landingPage1.png";
import landingPage2 from "../../assets/landingPage2.png";
import landingPage3 from "../../assets/landingPage3.png";
import "./style.css";

const LandingPageComponent1 = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <img src={logo} className="logo-nav" alt="img" />
              </li>
            </ul>
            <form className="d-flex text-center">
              <button type="button" class="btn btn-masuk">
                Masuk
              </button>
              <button type="button" class="btn btn-daftar">
                Daftar
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container my-5">
        <div className="row d-flex align-items-center mb-5 px-3 px-md-0">
          <div className="col-12 col-md-7 col-lg-6">
            <p className="title">
              Talenta terbaik negeri untuk perubahan revolusi 4.0
            </p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              architecto eveniet corporis sunt est ipsum delectus, perferendis
              perspiciatis. Fugiat, officiis.
            </p>
            <div className="btn btn-lg text-white btn-mulai">
              Mulai Dari Sekarang
            </div>
          </div>
          <div className="shape"></div>
          <div className="shape-orange"></div>
          <div className="shape-landing"></div>
          <div className="col-md-5 col-lg-6 d-none d-md-block">
            <div className="d-flex justify-content-end">
              <div className="position-relative image-landing">
                <img
                  src={landingPage1}
                  className="image"
                  alt="Gambar Landing Page"
                />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main content left */}
      <div className="shape-blue"></div>
      <div className="container content-left">
        <div className="shape-background"></div>
        <div className="row">
          <div className="col-sm-5 image-landing-2">
            <img src={landingPage2} />
          </div>

          <div className="col-sm-5 text-left">
            <p>Kenapa harus mencari tallent di peworld</p>
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#5E50A1" }}
            >
              <span> Lorem ipsum dolor sit amet.</span>
            </i>
            <br />
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#5E50A1" }}
            >
              <span> Lorem ipsum dolor sit amet.</span>
            </i>
            <br />
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#5E50A1" }}
            >
              <span> Lorem ipsum dolor sit amet.</span>
            </i>
            <br />
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#5E50A1" }}
            >
              <span> Lorem ipsum dolor sit amet.</span>
            </i>
            <br />
          </div>
        </div>
      </div>

      {/* main content left */}
      <div className="shape-orange"></div>
      <div className="container content-left justify-content-end">
        <div className="shape-background-left"></div>
        <div className="row content-left">
          <div className="col-sm-5 text-left">
            <p>Skill Tallent</p>
            <p className="keterangan">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#FBB017", paddingRight: "145px" }}
            >
              <span> Java</span>
            </i>
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#FBB017" }}
            >
              <span> Golang</span>
            </i>
            <br />
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#FBB017", paddingRight: "130px" }}
            >
              <span> Kotlin</span>
            </i>
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#FBB017" }}
            >
              <span> C++</span>
            </i>
            <br />
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#FBB017", paddingRight: "140px" }}
            >
              <span> PHP</span>
            </i>
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#FBB017" }}
            >
              <span> Ruby</span>
            </i>
            <br />
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#FBB017", paddingRight: "100px" }}
            >
              <span> Javascript</span>
            </i>
            <i
              class="fa-solid fa-circle-check mb-4"
              style={{ color: "#FBB017" }}
            >
              <span> 10+ Bahasa Lainnya</span>
            </i>
          </div>
          <div className="col-sm-6 image-landing-2">
            <img src={landingPage3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageComponent1;
