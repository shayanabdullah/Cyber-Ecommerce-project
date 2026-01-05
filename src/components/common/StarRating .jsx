import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1 text-[#FFB547]">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
          return <FaStar key={index} />;
        }

        if (rating >= starValue - 0.5) {
          return <FaStarHalfAlt key={index} />;
        }

      
      })}
    </div>
  );
};

export default StarRating;
