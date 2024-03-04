import { IoMdArrowRoundForward } from "react-icons/io";
import banner from "./img/banner.png";
import Product from "./Product";
import { listPopular } from "./ListPopular";
import BtnShopNow from "../firstContainer/BtnShopNow.jsx";
import "./PopularProducts.css";
import { useState, useEffect } from "react";

export default function PopularProducts() {
  const [items, setItem] = useState(listPopular);

  const filterProducts = (catItem) => {
    const updateProducts = listPopular.filter((item) => {
      return item.name === catItem;
    });
    setItem(updateProducts);
  };

  return (
    <>
      <div className="containerPopular">
        <h2>Popular Products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br />
          incididunt ut labore lacus vel facilisis.
        </p>
        <div className="boxPopular">
          <div className="columnBox1">
            <div className="btnsPopular">
              <div
                className={items === listPopular ? "activ" : " "}
                onClick={() => setItem(listPopular)}
              >
                <p>All</p>
                <IoMdArrowRoundForward />
              </div>
              <div className="active" onClick={() => filterProducts("Snacks")}>
                <p>Snack</p>
                <IoMdArrowRoundForward />
              </div>
              <div
                className="active"
                onClick={() => filterProducts("Vegetables")}
              >
                <p>Vegetable</p>
                <IoMdArrowRoundForward />
              </div>
              <div className="active" onClick={() => filterProducts("Fruits")}>
                <p>Fruit</p>
                <IoMdArrowRoundForward />
              </div>
              <div className="active" onClick={() => filterProducts("Bakery")}>
                <p>Bakery</p>
                <IoMdArrowRoundForward />
              </div>
            </div>
            <div className="containerBanner">
              <img src={banner} alt="banner" />
              <div className="boxBanner">
                <h3>Juicy</h3>
                <h2>Fruits</h2>
                <p>100% Natural</p>
                <BtnShopNow />
              </div>
            </div>
          </div>
          <div className="columnBox2">
            {items.map((item) => (
              <Product
                src={item.image}
                name={item.name}
                describe={item.describe}
                review={item.review}
                price={item.price}
                preprice={item.prePrice}
                feedback={item.review}
                stars={item.stars}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
