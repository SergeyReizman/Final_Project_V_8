// Designed to represent a card for displaying feedback or testimonials.
import { quotes } from "../assets"; // Importing quotes asset

// FeedbackCard functional component
const FeedbackCard = ({ content, name, title, img }) => (
  // Container for feedback card with styling
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* Quotation marks image */}
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />

    {/* Feedback content paragraph */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    {/* Feedback author information */}
    <div className="flex flex-row">
      {/* Author's image */}
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      
      {/* Author's name and title information */}
      <div className="flex flex-col ml-4">
        {/* Author's name */}
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        
        {/* Author's title */}
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

// Exporting FeedbackCard component as default
export default FeedbackCard;
