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

  const reloadComponent = () => window.location.reload(false);

  return (
    <div>
      <button onClick={toggleModal}>{props.buttonName}</button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div>
              {" "}
              <StarRating />
            </div>
            <div>ffreowsjjajj</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
