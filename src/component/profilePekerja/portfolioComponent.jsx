import React from "react";
import Navbar from "../../utility/navbar/navbar";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FiGitlab } from "react-icons/fi";
// import rapp from "../../assets/rapp.png";
// import rapp1 from "../../assets/rapp2.png";
// import sapp from "../../assets/sapp.png";
// import sapp1 from "../../assets/sapp2.png";
// import pmw from "../../assets/pmw.png";
// import pmw1 from "../../assets/pmw2.png";
import tokped from "../../assets/tokped.png";
import Footer from "../../utility/footer/footer";
import LoadingScreen from "../../utility/loading/loading";

const PortfolioComponent = (props) => {
  const { data, isLoading } = props;


  const role = localStorage.getItem("role")

  return (
    <>
      <Navbar />

      <div className="container-fluid position-absolute" style={{ backgroundColor: "#5E50A1", top: "120px", height: "50vh" }}></div>

        {/* // left */}


      {isLoading ? <LoadingScreen /> : data?.map((item) => {
        return (
          <div className="container d-flex" style={{ marginTop: "150px" }}>
          <div className="w-25 d-flex flex-column border border-light shadow-lg align-items-center p-2 py-3 position-relative bg-white rounded vh-100" key={item.id}>
          <img className=" w-50" style={{ objectFit: "contain" }} src={item.photo} alt="" />
          <div className="align-items-start ms-3 mt-4 w-100">
            <h5 className="fw-bold">{item.name}</h5>
            <p className="mt-4" style={{ opacity: "0.7" }}>{item.job}</p>
            <p style={{ opacity: "0.7" }}>{item.city}</p>
            <p style={{ opacity: "0.7" }}>{item.city}, {item.province}</p>
            <p style={{ opacity: "0.7" }}>{item.description}</p>
            <h5 className="mt-5 mb-2">Skill</h5>
            {/* <div className="row col-12 text-white">
              {data?.skill.split(" ").map((item) => (
                <p className="col-3 bg-warning mx-2 rounded p-1 text-center" key={item.id}>
                  {item}
                </p>
              ))}
            </div> */}
            <div className="mt-3" style={{ opacity: "0.7" }}>
              {item.email &&  
              <div className="d-flex">
                <div style={{ width: "32px" }}>
                  <AiOutlineMail />
                </div>
                <p>{item.email}</p>
              </div>}
             {item.instagram && <div className="d-flex">
                <div style={{ width: "30px" }}>
                  <BsInstagram />{" "}
                </div>
                <p>{item.instagram}</p>
              </div>}
             {item.github && <div className="d-flex">
                <div style={{ width: "30px" }}>
                  <FiGithub />
                </div>
                <p>{item.github}</p>
              </div>}
             {item.gitlab && <div className="d-flex">
                <div style={{ width: "30px" }}>
                  <FiGitlab />
                </div>
                <p>{item.gitlab}</p>
              </div>}
              
            </div>
          </div>
          {role === "employer" && <button className="btn btn-primary py-3 w-75 mt-3">Hire</button>}
          
        </div>

            <div className="w-75 ms-5 d-flex flex-column border border-light shadow-lg p-2 py-3 position-relative bg-white rounded">
            
              {item.porto && 
               <div className="mb-5"> 
               <h3 className="ms-4 mt-5 border-bottom border-3 border-dark w-25 mb-5">Portofolio</h3>
                <div className="row col-12 text-center">
                  <div className="col-4">
                    <img src={item.porto_photo} alt="" />
                    <p>Remainder App</p>
                  </div>
                </div>
              </div>
              }
              

              {item.exp && 
              <div>
              <h3 className="ms-4 mt-5 border-bottom border-3 pb-2 border-dark w-25 ">Pengalaman Kerja</h3>
              <div className="d-flex mx-5 border-bottom border-3">
                <img className="mx-4 " style={{ objectFit: "contain" }} src={tokped} alt="" />
                <div className="d-flex flex-column mt-5">
                  <h5>{item.exp.title}</h5>
                  <p>{item.exp.employer}</p>
                  <p>{item.fromWhen} - {item.toWhen} - {item.howLong}</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum possimus placeat expedita neque amet nihil consectetur similique iusto corrupti.</p>
                </div>
              </div>
            </div>
        }
        
            
        </div>

        </div>

        )
      })}
         
  
      <Footer />
    </>
  );
};

export default PortfolioComponent;
