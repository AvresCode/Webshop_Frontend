import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
//import ReactStars from "react-rating-stars-component";
import Reviews from "../../Components/Reviews/Modal";
import StarRating from "../ShopPage/rating";
import ReviewBlock from "../../Components/Reviews/ReviewBlock";

const DetailsPage = () => {
  const [products, setProducts] = useState(null);
  const params = useParams();
  useEffect(() => {
    const getProducts = async () => {
      const prodId = params.id;
      const response = await axios.get(
        `http://localhost:4000/products/${prodId}`
      );

      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      {products ? (
        <div className="product-container">
          <div>
            <img
              className="product-img"
              src={products.mainImage}
              alt="product"
            />
          </div>
          <div>
            <div className="product-title">
              <h1>{products.title}</h1>
              <p>
                <div>
                  <StarRating rating={products.rating} />
                </div>

                {/* <div>
                  <button className="add-review">Add Review</button>{" "}
                </div>*/}
                <div>
                  <Reviews buttonName={"Add Review"} productId={params.id} />
                </div>
              </p>
            </div>
            <div>
              <h2 className="price">€{products.price}</h2>
            </div>
            <div className="second-container">
              <p></p>
              <p className="description">{products.description}</p>
              <button className="button-add-to-card">
                <img
                  className="icon-separation"
                  src="/icons/fluent_cart-24-regular.png"
                  alt="like"
                />
                Add to cart
              </button>
              <button className="favorite">
                <img
                  className="icon-separation"
                  src="/icons/Group 235.png"
                  alt="like"
                />
                Favorite
              </button>
              <div>
                <p>
                  Share <img src="/icons/Group 205.png" alt="like" />
                </p>
              </div>
            </div>
          </div>
          <div>
            <ReviewBlock />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;
