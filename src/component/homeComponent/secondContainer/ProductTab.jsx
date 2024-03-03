import tab1 from "./img/tab1.png";
import tab2 from "./img/tab2.png";
import BtnShopNow from "../firstContainer/BtnShopNow";
import "./TabList.css";
export default function ProductTab(props) {
  return (
    <div className={`boxProduct ${props.className}`}>
      <div>
        <img src={props.image1} alt="tab" />
        <div className="tabSales">
          <h1>50</h1>
          <p>
            %<br />
            OFF
          </p>
        </div>
        <div className="tabName">
          <p>{props.name1}</p>
          <BtnShopNow className="tabBtn" />
        </div>
      </div>
      <div>
        <img src={props.image2} alt="tab2" />
        <div className="tabSales">
          <h1>40</h1>
          <p>
            %<br />
            OFF
          </p>
        </div>
        <div className="tabName">
          <p>{props.name2}</p>
          <BtnShopNow className="tabBtn" />
        </div>
      </div>
    </div>
  );
}
