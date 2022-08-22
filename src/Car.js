import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import "./car.css";

function Car({ imagesrc, modeltype, testDrive }) {
  return (
    <div className="car">
      <div className="car__image">
        <img src={imagesrc} alt="" />
      </div>
      <h2 className="car__model">{modeltype}</h2>
      <div className="car__actions">
        <ButtonPrimary name="order" />
        {testDrive && <ButtonSecondary name="test drive" />}
      </div>
      <p className="car__info">
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </p>
    </div>
  );
}

export default Car;
