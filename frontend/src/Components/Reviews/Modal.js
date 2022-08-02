//https://www.section.io/engineering-education/building-a-custom-user-reviews-page-in-react-typescript-and-reactstrap/

import React, { useState } from "react";
import StarRating from "../Rating";
import "./style.css";
import axios from "axios";

const Reviews = (props) => {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  //const reloadComponent = () => window.location.reload(false);

  const submitReview = async (e) => {
    e.preventDefault();
    setModal(!modal);
    //reloadComponent();

    try {
      await axios.post(
        `http://localhost:4000/products/${props.productId}/review`,
        {
          //we don't need to define productId here as we get it from request
          rating: 4,
          text: text,
        }
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <button onClick={toggleModal} className="button">
        {props.buttonName}
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form onSubmit={submitReview}>
              <div className="modal-rating">
                <div>Rate this product: </div>
                <div>
                  <StarRating />
                </div>
              </div>{" "}
              <textarea
                className="modal-review"
                type="text"
                placeholder="Type your review"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <br />
              <button type="submit" className="button">
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
