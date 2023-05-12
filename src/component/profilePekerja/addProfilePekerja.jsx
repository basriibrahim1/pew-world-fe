import React from "react";
import "../../assets/style/style.css";
import avatarNav from "./../../assets/christian-buehner-DItYlc26zVI-unsplash.jpg";
import photoEdit from "./../../assets/charlie-green-3JmfENcL24M-unsplash.jpg";
import logo from "./../../assets/logo.png";
import iconUpload from "./../../assets/icons upload.png";
import iconImage from "./../../assets/image type.png";
import iconImageSize from "./../../assets/icon size img.png";
import { Link } from "react-router-dom";

const AddProfilePekerja = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <img src={logo} className="logo-nav" alt="img" />
              </li>
            </ul>
            <form className="d-flex text-center">
              <i className="fa-regular fa-bell mx-4 mt-2" style={{ color: "#9b9b9b" }}></i>
              <i className="fa-regular fa-envelope mx-4 mt-2" style={{ color: "#b9b9b9" }}></i>
              <img src={avatarNav} className="rounded-circle mx-4" width="30px" height="30px" alt="img" />
            </form>
          </div>
        </div>
      </nav>

      <div className="carausel-profile"></div>

      <div className="container main-profile">
        <div className="row">
          <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={photoEdit} className="rounded-circle photo-profile mt-3" width="150px" height="150px" alt="profile pekerja" />
              <Link className="edit">
                <i className="fa-sharp fa-solid fa-pen" style={{ color: "#b9b9b9" }}>
                  <span>Edit</span>
                </i>
              </Link>
              <div className="card-body">
                <h5 className="card-title">Louis Tomlinson</h5>
                <p className="card-text">Web Developer</p>
                <i className="fa-solid fa-location-dot icons-location" style={{ color: "#9ea0a5" }}>
                  <span>Purwokerto, Jawa Tengah</span>
                </i>
                <p className="jobs mt-2">Frelancer</p>
              </div>
            </div>
            <button type="button" className="btn mt-3 btn-block button-blue">
              Simpan
            </button>
            <button type="button" className="btn btn-outline mt-3 btn-block button-blue-outline">
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
                    <label htmlFor="nama lengkap">Nama lengkap</label>
                    <input type="text" className="form-control" id="nama lengkap" placeholder="Masukan nama lengkap" name="nama_lengkap" />
                  </div>
                  <div className="mb-4 mt-3">
                    <label htmlFor="job desk">Job desk</label>
                    <input type="text" className="form-control" id="job desk" placeholder="Masukan job desk" name="job desk" />
                  </div>
                  <div className="mb-4 mt-3">
                    <label htmlFor="domisili">Domisili</label>
                    <input type="text" className="form-control" id="domisili" placeholder="Masukan domisili" name="domisili" />
                  </div>

                  <div className="mb-4 mt-3">
                    <label htmlFor="tempat kerja">Tempat kerja</label>
                    <input type="text" className="form-control" id="tempat kerja" placeholder="Masukan tempat kerja" name="tempat kerja" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="comment">Desktipsi singkat</label>
                    <textarea placeholder="Tuliskan deskripsi singkat" className="form-control" rows="5" id="comment" name="text"></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="card mt-4 skill">
              <div className="card-body">
                <h5 className="card-title title-data">Skill</h5>
                <p className="card-text border-top mt-3"></p>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="card mt-4 pengalaman-kerja">
              <div className="card-body">
                <h5 className="card-title title-data">Pengalaman Kerja</h5>
                <p className="card-text border-top mt-3"></p>
                <form action="/action_page.php">
                  <div className="mb-4 mt-3">
                    <label htmlFor="posisi">Posisi</label>
                    <input type="text" className="form-control" id="nama lengkap" placeholder="Web devoloper" name="web devoloper" />
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="mb-4 mt-3">
                        <label htmlFor="perusahaan">Nama Perusahaan</label>
                        <input type="text" className="form-control" id="perusahaan" placeholder="PT Harus Bisa" name="perusahaan" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="mb-4 mt-3">
                        <label htmlFor="date">Sampai Bulan/tahun</label>
                        <input type="date" className="form-control" id="date" name="date" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="mb-4 mt-3">
                        <label htmlFor="date">Dari Bulan/tahun</label>
                        <input type="date" className="form-control" id="date" name="date" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 mt-3">
                    <label htmlFor="comment">Desktipsi singkat</label>
                    <textarea placeholder="Deskripsikan pekerjaan anda" className="form-control" rows="5" id="comment" name="text"></textarea>
                  </div>
                </form>
                <p className="card-text border-top mb-5"></p>
                <div className="d-grid">
                  <button className="btn button-full" type="button">
                    Tambah Pengalaman Kerja
                  </button>
                </div>
              </div>
            </div>
            <div className="card mt-4 portfolio">
              <div className="card-body">
                <h5 className="card-title title-data">Pengalaman Kerja</h5>
                <p className="card-text border-top mt-3"></p>
                <form action="/action_page.php">
                  <div className="mb-4 mt-3">
                    <label htmlFor="aplikasi">Nama aplikasi</label>
                    <input type="text" className="form-control" id="aplikasi" placeholder="aplikasi" name="aplikasi" />
                  </div>
                  <div className="mb-4 mt-3">
                    <label htmlFor="repository">Link repository</label>
                    <input type="text" className="form-control" id="repository" placeholder="Masukan link repository" name="repository" />
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="date">Type portfolio</label>
                      <div className="">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                          <label className="form-check-label" htmlFor="inlineRadio1">
                            Aplikasi Mobile
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                          <label className="form-check-label" htmlFor="inlineRadio2">
                            Aplikasi
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 mt-3 upload">
                    <label>Upload gambar</label>
                    <div className="file" style={{ textAlign: "center" }}>
                      <label htmlFor="image" className="mt-4">
                        <img src={iconUpload} htmlFor="image" alt="img" />
                      </label>
                      <input type="file" name="image" id="image" style={{ display: "none", visibility: "none" }} />
                      <p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                      <span>Atau cari untuk mengupload file dari direktorimu.</span>
                      <div className="row mt-3 mb-5 title-image">
                        <div className="col-sm-3">
                          <div className="img-type">
                            <img src={iconImage} alt="" />
                            <p>High-Res Image PNG, JPG or GIF</p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="img-type">
                            <img src={iconImageSize} alt="" />
                            <p>Size 1080x1920 or 600x800</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <p className="card-text border-top mb-5"></p>
                <div className="d-grid">
                  <button className="btn button-full" type="button">
                    Tambah Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProfilePekerja;
