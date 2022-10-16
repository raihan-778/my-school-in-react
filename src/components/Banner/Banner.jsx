import React from "react";
import { Carousel } from "flowbite-react";

const Banner = ({ user }) => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slideInterval={5000}>
          <img
            src="https://img.freepik.com/free-psd/school-admission-web-banner-template_237398-47.jpg?w=900&t=st=1665330952~exp=1665331552~hmac=c9017cda148d3f0572918792b1af04880cfcff78ac67076d74b4cf6533463303"
            alt="..."
          />
          <img
            src="https://img.freepik.com/free-psd/e-learning-banner-template_23-2149113644.jpg?w=900&t=st=1665331161~exp=1665331761~hmac=61b429a33d4b42bd7815e91dc0cc588fd5efdadcc45cf38952633510cbe29298"
            alt="..."
          />
          <img
            src="https://img.freepik.com/free-psd/ee-learning-concept-banner-template_23-2148688189.jpg?w=900&t=st=1665331203~exp=1665331803~hmac=3b94b036b32137e3a1eccc6e248957d40d55d62143b9af24b546c90dcb4d5b32"
            alt="..."
          />
          <img
            src="https://img.freepik.com/free-psd/school-admission-web-banner-template_237398-48.jpg?w=900&t=st=1665331267~exp=1665331867~hmac=bb17283bc5c7e44ab558b635666c16f18e301c88132fd07f9828fee97a32c742"
            alt="..."
          />
        </Carousel>
      </div>
      
    </div>
  );
};

export default Banner;
