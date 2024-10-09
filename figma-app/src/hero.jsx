import React from "react";
import BIKE from "../../figma-app/src/assets/bike.png";

function Hero() {
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-7 col-xs-12 my-4 d-flex justify-content-center flex-column align-items-center">
          <div className="">
          <h2 className="fw-medium">Fair price ride</h2>
          <h1 className="fw-bold">
            Rent our <span style={{color: "#EF8D12"}}>Scooter</span>
          </h1>
          <p className="">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          </div>
        </div>
        <div className="col-md-5 col-xs-12 text-center">
          <img className=" h-75 img-fluid" src={BIKE} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
