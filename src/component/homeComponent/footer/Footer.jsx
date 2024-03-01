import logo from "./imgFooter/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { RiFacebookLine } from "react-icons/ri";
import { TbLetterX } from "react-icons/tb";
import { PiBasketballBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import poz1 from "./imgFooter/poz1.png";
import poz2 from "./imgFooter/poz2.png";
import poz3 from "./imgFooter/poz3.png";
import poz4 from "./imgFooter/poz4.png";
import poz5 from "./imgFooter/poz5.png";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="containerFooter">
        <div className="boxFooter1">
          <img src={logo} alt="logo" />
          <div>
            FoodTrove is the biggest market of grocery products.
            <br /> Get your daily needs from our store.
          </div>
          <div>
            <IoLocationOutline />
            <p>
              51 Green St.Huntington ohaio beach ontario,
              <br /> NY 11746 KY 4783, USA.
            </p>
          </div>
          <div>
            <FaRegEnvelope />
            <p>vitalie.munteanu.94@mail.ru</p>
          </div>
          <div>
            <MdOutlinePhone />
            <p>+373 76732480</p>
          </div>
        </div>
        <div className="boxFooter2">
          <h4>Company</h4>
          <p>About US</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>contact Us</p>
          <p>Support Center</p>
        </div>
        <div className="boxFooter3">
          <h4>Category</h4>
          <p>Dairy & Bakery</p>
          <p>Fruits & Vegetable</p>
          <p>Snack & Spice</p>
          <p>Juice & Drinks</p>
          <p>Chicken & Meat</p>
          <p>Fast Food</p>
        </div>
        <div className="boxFooter4">
          <h4>Subscribe Our Newsletter</h4>
          <div className="boxInputFooter">
            <input type="text" placeholder="Search Here ..." />
            <FaPaperPlane className="envelopIcon" />
          </div>
          <div>
            <RiFacebookLine className="iconMedia" />
            <TbLetterX className="iconMedia" />
            <PiBasketballBold className="iconMedia" />
            <FaInstagram className="iconMedia" />
          </div>
          <div className="footerPhotos">
            <img src={poz1} alt="photo" />
            <img src={poz2} alt="photo" />
            <img src={poz3} alt="photo" />
            <img src={poz4} alt="photo" />
            <img src={poz5} alt="photo" />
          </div>
        </div>
      </div>
    </>
  );
}
