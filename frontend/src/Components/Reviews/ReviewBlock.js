/*import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ReviewBlock = () => {
  const [reviews, setReviews] = useState(null);
  const [products, setProducts] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const prodId = params.id;
      const response = await axios.get(
        `http://localhost:4000/products/${prodId}`
      );

      setProducts(response.data);
      setReviews(response.data.reviews);
      console.log("review", response.data.reviews);
      console.log("rspecificeview", response.data.reviews);
    };
    getProducts();
  }, []);

  return (
    <div>
      {reviews
        ? reviews.map((review, index) => {
            <p key={index}>
              {review.text}, {review.rating}
            </p>;
          })
        : "No review yet!"}
    </div>
  );
};

export default ReviewBlock;  */
