//https://unicode-table.com/en/2606/

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        if (index < rating) {
          return <span>★</span>;
        } else {
          return <span>☆</span>;
        }
      })}
    </div>
  );
};

export default StarRating;
