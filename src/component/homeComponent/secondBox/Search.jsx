import logo from "./logo.png";
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./Search.css";

export default function Search() {
  return (
    <>
      <div className="containerHeader">
        <img src={logo} alt="photo" />
        <div className="inputBox">
          <input type="text" placeholder="Search For items ..." />
          <div className="button">
            All Categories <IoIosArrowDown />
          </div>
          <div className="iconSearch">
            <IoMdSearch />
          </div>
        </div>
        <div className="iconCarts">
          <div>
            <MdOutlinePersonOutline />
            Account
          </div>
          <div>
            <FaRegHeart />
            Wishlist
          </div>
          <div>
            <MdOutlineShoppingCart />
            Cart
          </div>
        </div>
      </div>
    </>
  );
}
