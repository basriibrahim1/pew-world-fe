import React from "react";
import "../../assets/style/style.css";
import avatarNav from "./../../assets/christian-buehner-DItYlc26zVI-unsplash.jpg";
import photoEdit from "./../../assets/charlie-green-3JmfENcL24M-unsplash.jpg";
import logo from "./../../assets/logo.png";
import Footer from "../../utility/footer/footer";

const EditProfilePerusahaan = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
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
                <img src={logo} className="logo-nav" />
              </li>
            </ul>
            <form className="d-flex text-center">
              <i
                className="fa-regular fa-bell mx-4 mt-2"
                style={{ color: "#9b9b9b" }}
              ></i>
              <i
                className="fa-regular fa-envelope mx-4 mt-2"
                style={{ color: "#b9b9b9" }}
              ></i>
              <img
                src={avatarNav}
                className="rounded-circle mx-4"
                width="30px"
                height="30px"
              />
            </form>
          </div>
        </div>
      </nav>

      <div className="carausel-profile"></div>

      <div className="container main-profile">
        <div className="row">
          <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={photoEdit}
                className="rounded-circle photo-profile mt-3"
                width="150px"
                height="150px"
                alt="profile pekerja"
              />
              <a className="edit" href="">
                <i
                  className="fa-sharp fa-solid fa-pen"
                  style={{ color: "#b9b9b9" }}
                >
                  <span>Edit</span>
                </i>
              </a>
              <div className="card-body">
                <h5 className="card-title">Louis Tomlinson</h5>
                <p className="card-text">Web Developer</p>
                <i
                  className="fa-solid fa-location-dot icons-location"
                  style={{ color: "#9ea0a5" }}
                >
                  <span>Purwokerto, Jawa Tengah</span>
                </i>
                <p className="jobs mt-2">Frelancer</p>
              </div>
            </div>
            <button type="button" className="btn mt-3 btn-block button-blue">
              Simpan
            </button>
            <button
              type="button"
              className="btn btn-outline mt-3 btn-block button-blue-outline"
            >
              Batal
            </button>
          </div>
          <div className="col-sm-8 bio">
            <div className="card data-diri">
              <div className="card-body">
                <h5 className="card-title title-data">Data Diri</h5>
                <p className="card-text border-top mt-3"></p>
                <form action="/action_page.php">
                  <div className="mb-4 mt-3">
                    <label for="nama perusahaan">Nama perusahaan</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama perusahaan"
                      placeholder="Masukan nama perusahan"
                      name="nama perusahaan"
                    />
                  </div>
                  <div className="mb-4 mt-3">
                    <label for="bidang">Bidang</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bidang"
                      placeholder="Masukan bidang perusahaan ex : Financial"
                      name="bidang"
                    />
                  </div>
                  <div className="mb-4 mt-3">
                    <label for="provinsi">Provinsi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="provinsi"
                      placeholder="Masukan Provinsi"
                      name="provinsi"
                    />
                  </div>

                  <div className="mb-4 mt-3">
                    <label for="kota">Kota</label>
                    <input
                      type="text"
                      className="form-control"
                      id="kota"
                      placeholder="Masukan kota"
                      name="kota"
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <label for="comment">Desktipsi singkat</label>
                    <textarea
                      placeholder="Tuliskan deskripsi singkat"
                      className="form-control"
                      rows="5"
                      id="comment"
                      name="text"
                    ></textarea>
                  </div>
                  <div className="mb-4 mt-3">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Masukan email"
                      name="email"
                    />
                  </div>
                  <div className="mb-4 mt-3">
                    <label for="email perusahaan">Email Perusahaan</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email perusahaan"
                      placeholder="Masukan email Perusahaan"
                      name="email perusahaan"
                    />
                  </div>
                  <div className="mb-4 mt-3">
                    <label for="nomor telepon">Nomor Telepon</label>
                    <input
                      type="number"
                      className="form-control"
                      id="nomor telepon"
                      placeholder="Masukan nomor telepon"
                      name="nomor telepon"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfilePerusahaan;
