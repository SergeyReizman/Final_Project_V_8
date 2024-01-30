// A button or clickable element designed to encourage users to get started.
import styles from "../style"; // Importing styles
import { arrowUp } from "../assets"; // Importing arrowUp asset

// GetStarted functional component
const GetStarted = () => (
  // Container for Get Started button with styling
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    {/* Inner container with gradient background */}
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      {/* Text and arrow-up icon container */}
      <div className={`${styles.flexStart} flex-row`}>
        {/* "Get" text with gradient */}
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        
        {/* Arrow-up icon */}
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      {/* "Started" text with gradient */}
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

// Exporting GetStarted component as default
export default GetStarted;
