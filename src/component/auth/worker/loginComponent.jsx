import React from "react";
import loginImage from "../../../assets/loginImage.png";
import bgBlue from "../../../assets/bg-blue.png";
import pewLogo from "../../../assets/vector.png";
import pewLogo2 from "../../../assets/vector1.png";
import { Link } from "react-router-dom";
import "./style.css";
import LoadingScreen from "../../../utility/loading/loading";

const LoginComponent = (props) => {
  const { passwordValue, passwordChange, emailValue, emailChange, onSubmit, isLoading} = props;

  return (
    <>
    
      <div className="container-fluid d-flex justify-content- align-items-center vh-100 text-start">
      <div className="left d-flex text-center justify-content-center align-items-center w-50">
        <img className="bg-blue" src={loginImage} alt="" />
        <img className="position-absolute" style={{ opacity: "0.8" }} src={bgBlue} alt=""/>
        <img className="position-absolute" style={{ left: "200px", top: "150px" }} src={pewLogo} alt="/" />
        <img className="position-absolute" style={{ left: "200px", top: "159px" }}src={pewLogo2} alt="/"/>
        <img className="position-absolute" style={{ left: "200px", top: "163px" }} src={pewLogo2} alt="/"/>
        <p className="position-absolute text-white fw-semi-bold" style={{ left: "230px", top: "147px" }}>
          Peworld
        </p>
        <h1 className="head-text w-25 text-start position-absolute text-white h-25 line-height-5">
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h1>
      </div>
      <div className="right w-50 me-5">
        <h1 className="mb-5">Halo, Pewpeople</h1>
        <h3 className="fw-light"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,quidem. Voluptas nesciunt, doloribus voluptatum id voluptate sed recusandae excepturi! Sint!
        </h3>
        <form className="form-group" onSubmit={onSubmit}>
          <div className="d-flex flex-column mt-5">
            <label htmlFor="email">Email</label>
            <input className="my-3 p-2" style={{ opacity: "0.5" }} type="text" name="email" placeholder="Masukan alamat email" required value={emailValue} onChange={emailChange}/>
          </div>
          <div className="d-flex flex-column ">
            <label htmlFor="password">Kata Sandi</label>
            <input className="my-3 p-2" style={{ opacity: "0.5" }} type="password" name="password" placeholder="Masukan kata sandi" value={passwordValue} onChange={passwordChange} required/>
          </div>
          <Link className="text-decoration-none">
            <p className="text-end w-100 text-decoration-none text-black fs-5  fw-semi-bold">Lupa kata sandi?</p>
          </Link>
          <button className="border-0 w-100 p-3 bg-warning text-white fw-semi-bold "type="submit">Masuk</button>
          <h5 className="text-center mt-5">
            Anda belum punya akun?
            <Link className="text-warning text-decoration-none">
              Daftar Disini
            </Link>
          </h5>
          {isLoading && <LoadingScreen />  }
        </form>
      </div>
    </div>
    
      
    </>
  );
};

export default LoginComponent;
