import React from "react";
import { ReactDOM } from "react";
import "./FirstBlock.css";
import { Link } from "react-router-dom";
import photo1 from "./photo1.png";
import BtnShopNow from "./BtnShopNow";

export default function FirstBlock() {
  return (
    <>
      <div className="containerFirst">
        <div className="boxText">
          <h5>
            <span>100%</span>Organic Vegetables
          </h5>
          <h1>
            The best way to <br />
            stuff your wallet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Amet reiciendis beatae consequuntur.
          </p>
          <div>
            <BtnShopNow />
          </div>
        </div>
        <div className="boxImagin">
          <img src={photo1} alt="photo" />
        </div>
      </div>
    </>
  );
}
