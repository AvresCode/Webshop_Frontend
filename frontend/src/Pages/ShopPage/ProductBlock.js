import { NavLink } from "react-router-dom";
import StarRating from "./rating";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { AiOutlineHeart } from "react-icons/ai";

const ProductBlock = (props) => {
  return (
    <div className="product-display">
      <div className="image-container">
        <NavLink to={`/details/${props.id}`}>
          <img
            className="image"
            width="70vw"
            alt={props.title}
            src={props.mainImage}
          />
        </NavLink>
      </div>

      <div className="text-container">
        <div className="text-container-items">
          <NavLink to={`/details/${props.id}`}>{props.title}</NavLink>
        </div>

        <div className="text-container-items ">
          <div className="icons-display-block"> €{props.price}</div>
          <div>
            <StarRating rating={props.rating} />
          </div>
        </div>
        <div className="text-container-items">
          {props.description.substring(0, 150)}...
        </div>

        <div className="text-container-items">
          <div className="icons-display-block">
            {" "}
            <AiOutlineShoppingCart />
          </div>

          <div>
            <AiOutlineHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
