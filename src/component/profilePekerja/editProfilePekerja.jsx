import React from "react";
import "../../assets/style/style.css";
import photoEdit from "./../../assets/charlie-green-3JmfENcL24M-unsplash.jpg";
import logoPerusahaan from "./../../assets/logo tokopedia.png";
import imagePortfolio from "./../../assets/portfolio1.jpg";
import Footer from "../../utility/footer/footer";
import { Link } from "react-router-dom";
import Navbar from "../../utility/navbar/navbar";

const EditProfilePekerjaComponent = (props) => {
  // const {nameVal, nameChange, jobVal, jobChange, locationVal, locationChange, skillVal, skillChange, pengalamanKerjaVal, pengalamanKerjaChange, posisiVal, posisiChange, namaPerusahaanVal,namaPerusahaanChange, bulanVal, bulanChange, tahunVal, tahunChange, deskripsiVal, deskripsiChange, photo, image, handlePhoto, onSubmit} = props

  return (
    <>
      <Navbar />

      <div className="carausel-profile"></div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4 " >
            <div className="card border-5 border-warning" style={{ width: "18rem" }}>
              <img src={photoEdit} className="rounded-circle photo-profile mt-3" style={{objectFit:'contain'}} alt="profile pekerja" />
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
                    <label for="nama lengkap">Nama lengkap</label>
                    <input type="text" className="form-control" id="nama lengkap" placeholder="Masukan nama lengkap" name="nama_lengkap" />
                  </div>
                  <div className="mb-4 mt-3">
                    <label for="job desk">Job desk</label>
                    <input type="text" className="form-control" id="job desk" placeholder="Masukan job desk" name="job desk" />
                  </div>
                  <div className="mb-4 mt-3">
                    <label for="domisili">Domisili</label>
                    <input type="text" className="form-control" id="domisili" placeholder="Masukan domisili" name="domisili" />
                  </div>

                  <div className="mb-4 mt-3">
                    <label for="tempat kerja">Tempat kerja</label>
                    <input type="text" className="form-control" id="tempat kerja" placeholder="Masukan tempat kerja" name="tempat kerja" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label for="comment">Desktipsi singkat</label>
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
                    <label for="posisi">Posisi</label>
                    <input type="text" className="form-control" id="nama lengkap" placeholder="Web devoloper" name="web devoloper" />
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="mb-4 mt-3">
                        <label for="perusahaan">Nama Perusahaan</label>
                        <input type="text" className="form-control" id="perusahaan" placeholder="PT Harus Bisa" name="perusahaan" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="mb-4 mt-3">
                        <label for="date">Sampai Bulan/tahun</label>
                        <input type="date" className="form-control" id="date" name="date" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="mb-4 mt-3">
                        <label for="date">Dari Bulan/tahun</label>
                        <input type="date" className="form-control" id="date" name="date" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 mt-3">
                    <label for="comment">Desktipsi singkat</label>
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
                <div className="button-pengalaman justify-content-end">
                  <button type="button" className="orange btn">
                    Edit
                  </button>
                  <button type="button" className="red btn">
                    X
                  </button>
                </div>
                <div className="row detail-perusahaan">
                  <div className="col-sm-1">
                    <img src={logoPerusahaan} alt="img" />
                  </div>
                  <div className="col-sm-8 ms-3">
                    <div className="detail-pengalaman">
                      <p className="jobs">Web Developer</p>
                      <p className="perusahaan">Tokopedia</p>
                      <p className="date">July 2019 - Januari 2020 6 mounth</p>
                      <p className="detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    </div>
                  </div>
                </div>
                <p className="card-text border-top mt-3"></p>
                <form action="/action_page.php">
                  <div className="mb-4 mt-3">
                    <label for="aplikasi">Nama aplikasi</label>
                    <input type="text" className="form-control" id="aplikasi" placeholder="aplikasi" name="aplikasi" />
                  </div>
                  <div className="mb-4 mt-3">
                    <label for="repository">Link repository</label>
                    <input type="text" className="form-control" id="repository" placeholder="Masukan link repository" name="repository" />
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card mt-4 portfolio">
                        <div className="card-body">
                          <h5 className="card-title title-data">Portfolio</h5>
                          <p className="card-text border-top mt-3"></p>
                          <div className="row image-portfolio">
                            <div className="col-sm-4">
                              <img src={imagePortfolio} width="260px" height="180px" alt="portfolio" />
                            </div>
                            <div className="col-sm-4">
                              <div className="detail-portfolio">
                                <p>Web Developer</p>
                                <Link>Link Repo</Link>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="button-pengalaman justify-content-end">
                                <button type="button" className="orange btn">
                                  Edit
                                </button>
                                <button type="button" className="red btn">
                                  X
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <p className="card-text border-top mb-5 mt-5"></p>
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
      <Footer />
    </>
  );
};

export default EditProfilePekerjaComponent;
