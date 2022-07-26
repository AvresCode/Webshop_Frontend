import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import ReactStars from "react-rating-stars-component";
import Reviews from "../Components/Reviews";

const DetailsPage = () => {
  const [details, setdetails] = useState(null);
  const params = useParams();
  useEffect(() => {
    const getProDetailsAPI = async () => {
      const prodId = params.id;
      const proDetailsResponse = await axios.get(
        `http://localhost:4000/products/${prodId}`
      );
      console.log(proDetailsResponse.data);
      setdetails(proDetailsResponse.data);
    };
    getProDetailsAPI();
  });

  return (
    <div>
      {details ? (
        <div className="product-container">
          <div>
            <img
              className="product-img"
              src={details.mainImage}
              alt="product"
            />
          </div>
          <div>
            <div className="product-title">
              <h1>{details.title}</h1>
              <p>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={details.rating}
                />
                <button className="add-review">Add Review</button>
              </p>
            </div>
            <div>
              <h2 className="price">€{details.price}</h2>
            </div>
            <div className="second-container">
              <p></p>
              <p className="description">{details.description}</p>
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;
