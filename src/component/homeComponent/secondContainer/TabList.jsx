import ProductTab from "./ProductTab";
import "./TabList.css";
import { listTab } from "./listTab";
import { useState } from "react";

export default function TabList() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="containerTabList">
      <div className="tabList">
        <div
          onClick={() => toggleTab(0)}
          className={toggleState === 0 ? "activeBtn" : " "}
        >
          <h5 onClick={() => toggleTab(0)}>Cake & Milk</h5>
          <p>(65 items)</p>
        </div>
        <div
          className={toggleState === 1 ? "activeBtn" : " "}
          onClick={() => toggleTab(1)}
        >
          <h5>Fresh Meat</h5>
          <p>(30 items)</p>
        </div>
        <div
          className={toggleState === 2 ? "activeBtn" : " "}
          onClick={() => toggleTab(2)}
        >
          <h5>Vegetables</h5>
          <p>(25 items)</p>
        </div>
        <div
          className={toggleState === 3 ? "activeBtn" : " "}
          onClick={() => toggleTab(3)}
        >
          <h5>Apple & Mango</h5>
          <p>(45 items)</p>
        </div>
        <div
          className={toggleState === 4 ? "activeBtn" : " "}
          onClick={() => toggleTab(4)}
        >
          <h5>Strawberry</h5>
          <p>(68 items)</p>
        </div>
        <div>
          <h5
            style={{
              color: "red",
            }}
          >
            View More
          </h5>
        </div>
      </div>
      <div className="tabProducts">
        <ProductTab
          name1={listTab[0].name1}
          name2={listTab[0].name2}
          image1={listTab[0].image1}
          image2={listTab[0].image2}
          className={toggleState === 0 ? "activeContent" : " "}
        />
        <ProductTab
          name1={listTab[1].name1}
          name2={listTab[1].name2}
          image1={listTab[1].image1}
          image2={listTab[1].image2}
          className={toggleState === 1 ? "activeContent" : " "}
        />
        <ProductTab
          name1={listTab[2].name1}
          name2={listTab[2].name2}
          image1={listTab[2].image1}
          image2={listTab[2].image2}
          className={toggleState === 2 ? "activeContent" : " "}
        />
        <ProductTab
          name1={listTab[3].name1}
          name2={listTab[3].name2}
          image1={listTab[3].image1}
          image2={listTab[3].image2}
          className={toggleState === 3 ? "activeContent" : " "}
        />
        <ProductTab
          name1={listTab[4].name1}
          name2={listTab[4].name2}
          image1={listTab[4].image1}
          image2={listTab[4].image2}
          className={toggleState === 4 ? "activeContent" : " "}
        />
      </div>
    </div>
  );
}
