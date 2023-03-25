import React from "react";
import { BsSearch } from "react-icons/bs";
import Footer from "../../utility/footer/footer";
import { CiLocationOn } from "react-icons/ci";
import Navbar from "../../utility/navbar/navbar";
import { Link } from "react-router-dom";

const HomeComponent = (props) => {
  const { data } = props;

  return (
    <>
      <Navbar />

      <div className="p-4 mt-4 container-fluid " style={{ backgroundColor: "#5E50A1" }}>
        <h3 className="container text-white">TOP JOBS</h3>
      </div>

      <div className="container ">
        <div className="d-flex align-items-center border-transparent border-5 shadow mt-5 justify-content-between rounded mb-5">
          <input className="form-control p-4 border-0 w-100" type="text" placeholder="Search for any skill" />
          <h4 className="px-5">
            <BsSearch />
          </h4>
          <div className="d-flex align-items-center border-2 border-start">
            <h5 className="px-5 text-center">Kategori</h5>
            <button className="border-0 px-4 py-3 btn btn-primary text-white rounded me-2 fs-5">Search</button>
          </div>
        </div>

        {data?.map((item) => {
          return (
            <div className="border-1 d-flex justify-content-between shadow px-5" key={item.id}>
              <div className="d-flex py-3 my-1 align-items-center">
                <img className="w-50 h-50 mx-5" style={{ objectFit: "contain" }} src={item.photo} alt="" />
                <div>
                  <h3>{item.name}</h3>
                  <p className="" style={{ opacity: "0.5" }}>
                    {item.job}
                  </p>
                  <div className="d-flex pb-1">
                    <div className="me-2">
                      <CiLocationOn />
                    </div>
                    <p className="" style={{ opacity: "0.5" }}>
                      {item.location}
                    </p>
                  </div>
                  <div className="d-flex">
                    {item.skill
                      .split(" ")
                      .slice(0, 3)
                      .map((skill) => (
                        <div className="border bg-warning rounded py-2 px-4 me-2 mb-2 text-white" style={{ opacity: "0.6" }} key={skill}>
                          {skill}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Link to={`profile/${item.id}`}>
                  <button className="btn btn-primary me-5 ">Lihat Profile</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default HomeComponent;
