import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./style.css";

import carousel1 from "../../assets/imageswiper1.jpg";
import carousel2 from "../../assets/imageswiper2.jpg";
import carousel3 from "../../assets/imageswiper3.jpg";

const LandingCarouselComponent = () => {
  return (
    <>
      <body>
        <div className="slide-container swiper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={{
              clickable: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="slide-content">
              <div className="card-wrapper swiper-wrapper">
                <SwiperSlide>
                  <div className="card swiper-slide ">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img src={carousel1} alt="" className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Rihana</h2>
                      <p className="profesi">Web Devoloper</p>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Excepturi, reprehenderit.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img src={carousel2} alt="" className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Martin</h2>
                      <p className="profesi">Web Devoloper</p>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Excepturi, reprehenderit.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img src={carousel3} alt="" className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Jonson</h2>
                      <p className="profesi">Web Devoloper</p>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Excepturi, reprehenderit.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img src={carousel3} alt="" className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">Jonson</h2>
                      <p className="profesi">Web Devoloper</p>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Excepturi, reprehenderit.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
          <div className="swiper-button-next nav-btn"></div>
          <div className="swiper-button-prev nav-btn"></div>
          <div className="swiper-pagination"></div>
        </div>
      </body>
    </>
  );
};

export default LandingCarouselComponent;
