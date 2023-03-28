import React from "react";
import LandingCarousel from "../../component/landingCarousel/landingCarouselComponent";
import LandingInvitation from "../../component/landingInvitation/landingInvitation";
import LandingPageComponent1 from "../../component/landingPage1/landingPageComponent1";

// import swiper1 from "../../assets/imageswiper1.jpg";
// import swiper2 from "../../assets/imageswiper2.jpg";
// import swiper3 from "../../assets/imageswiper3.jpg";

const LandingPagePages = () => {
  return (
    <>
    <div>
      <LandingPageComponent1 />
      <LandingCarousel />
      <LandingInvitation />
      </div>
    </>
  );
};

export default LandingPagePages;
