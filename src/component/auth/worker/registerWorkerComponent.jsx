import React from "react";
import loginImage from "../../../assets/loginImage.png";
import bgBlue from "../../../assets/bg-blue.png";
import pewLogo from "../../../assets/vector.png";
import pewLogo2 from "../../../assets/vector1.png";
import { Link } from "react-router-dom";
import "./style.css";

const RegisterWorkerComponent = (props) => {
  const { passwordValue, passwordChange, emailValue, emailChange, onSubmit, nameValue, nameChange, handphoneValue, handphoneChange, confirmPasswordValue, confirmPasswordChange, error, } = props;
  return (
    <>
      <div className="container-fluid d-flex justify-content- align-items-center vh-100 w-100 text-start">
        <div className="left d-flex text-center justify-content-center align-items-center w-50">
          <img className="bg-blue" src={loginImage} alt="" />
          <img className="position-absolute" style={{ opacity: "0.8" }} src={bgBlue} alt="" />
          <img className="position-absolute" style={{ left: "200px", top: "150px" }} src={pewLogo} alt="/" />
          <img className="position-absolute" style={{ left: "200px", top: "159px" }} src={pewLogo2} alt="/" />
          <img className="position-absolute" style={{ left: "200px", top: "163px" }} src={pewLogo2} alt="/" />
          <p className="position-absolute text-white fw-semi-bold" style={{ left: "230px", top: "147px" }}>
            Peworld
          </p>
          <h1 className="head-text w-25 text-start position-absolute text-white h-25">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
        </div>
        <div className="right w-50 me-5">
          <h1 className="mt-5">Halo, Pewpeople</h1>
          <h4 className="fw-light mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quidem. Voluptas nesciunt, doloribus voluptatum id voluptate sed recusandae excepturi! Sint!</h4>
          <form className="form-group" onSubmit={onSubmit}>
            <div className="form-group d-flex flex-column mt-5">
              <label htmlFor="nama">Nama</label>
              <input className="my-3 p-2" style={{ opacity: "0.5" }} type="text" name="nama" placeholder="Masukan nama panjang" required value={nameValue} onChange={nameChange} />
            </div>
            <div className="d-flex flex-column ">
              <label htmlFor="email">Email</label>
              <input className="my-3 p-2" style={{ opacity: "0.5" }} type="email" name="email" placeholder="Masukan Email" value={emailValue} onChange={emailChange} required />
            </div>
            <div className="d-flex flex-column ">
              <label htmlFor="handphone">No. Handphone</label>
              <input className="my-3 p-2" style={{ opacity: "0.5" }} type="number" name="handphone" placeholder="Masukan kata sandi" value={handphoneValue} onChange={handphoneChange} required />
            </div>
            <div className="d-flex flex-column ">
              <label htmlFor="password">Kata Sandi</label>
              <input className="my-3 p-2" style={{ opacity: "0.5" }} type="password" name="password" placeholder="Masukan kata sandi" value={confirmPasswordValue} onChange={confirmPasswordChange} required />
            </div>
            <div className="d-flex flex-column ">
              <label htmlFor="confirmPassword">Konfirmasi kata sandi</label>
              <input className="my-3 p-2" style={{ opacity: "0.5" }} type="password" name="confirmPassword" placeholder="Masukan kembali kata sandi" value={passwordValue} onChange={passwordChange} required />
            </div>
            <Link to="/reset-password" className="text-decoration-none">
              <p className="text-end w-100 text-decoration-none text-black fs-5  fw-semi-bold">Lupa kata sandi?</p>
            </Link>
            <button className="border-0 w-100 p-3 bg-warning text-white fw-semi-bold " type="submit">
              Daftar
            </button>
            {error.isError && <p>{error.isError}`</p>}
          </form>
          <h5 className="text-center mt-5">
            Anda sudah punya akun? <Link className="text-warning text-decoration-none">Masuk Disini</Link>
          </h5>
        </div>
      </div>
    </>
  );
};

export default RegisterWorkerComponent;
