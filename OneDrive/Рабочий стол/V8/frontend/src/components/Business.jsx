// Represents information or features related to the business aspect.
import { features } from "../constants"; // Importing feature constants
import styles, { layout } from "../style"; // Importing styles
import Button from "./Button"; // Importing Button component

// FeatureCard component for displaying individual business features
const FeatureCard = ({ icon, title, content, index }) => (
  // Feature card container with styling
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    {/* Icon container with background and styling */}
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      {/* Feature icon */}
      <img src={icon} alt="feature_icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    
    {/* Feature details container */}
    <div className="flex-1 flex flex-col ml-3">
      {/* Feature title */}
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      
      {/* Feature content */}
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

// Business functional component
const Business = () =>  (
  // Business section with layout and styling
  <section id="features" className={layout.section}>
    {/* Business section information */}
    <div className={layout.sectionInfo}>
      {/* Business section heading */}
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      
      {/* Business section paragraph */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
      
      {/* Button component for additional action */}
      <Button styles={`mt-10`} />
    </div>

    {/* Business section image with feature cards */}
    <div className={`${layout.sectionImg} flex-col`}>
      {/* Mapping through features to display FeatureCard for each */}
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

// Exporting Business component as default
export default Business;
