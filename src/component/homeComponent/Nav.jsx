import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import "./Nav.css";
export default function Nav() {
  return (
    <>
      <div className="containerNav">
        <div>
          <RiMenu2Line className="menuIcons" />
        </div>
        <div className="listsLink">
          <Link className="link" to="/react-vite-Full-E-Commerce-Landing-Page">
            Home
          </Link>
          <Link className="link">
            Category <IoIosArrowDown className="IoIosArrowDown" />
          </Link>
          <Link className="link">
            Products <IoIosArrowDown className="IoIosArrowDown" />
          </Link>
          <Link className="link">
            Pages <IoIosArrowDown className="IoIosArrowDown" />
          </Link>
          <Link className="link">
            Blog <IoIosArrowDown className="IoIosArrowDown" />
          </Link>
          <Link className="link">
            Elements <IoIosArrowDown className="IoIosArrowDown" />
          </Link>
        </div>
        <div className="numberPhone">
          <MdOutlineLocalPhone />
          +373 76 732 480
        </div>
      </div>
    </>
  );
}
