import NavLinks from "./NavLinks";
import "./style.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLeft">
        <div className="logo">
          The<span>Shop</span>
        </div>
        <div className="navLinksWrap">
          <NavLinks />
        </div>
        <div className="searchInput">
          <input type="text" />
        </div>
      </div>
      <div className="navBarRight">
        <div>
          <AiOutlineUser />
        </div>
        <div>
          <AiOutlineShoppingCart />
        </div>
        <div>
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
