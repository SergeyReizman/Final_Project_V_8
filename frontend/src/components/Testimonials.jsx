// Handles the display of testimonials or user reviews.
import { feedback } from "../constants"; // Importing feedback data
import styles from "../style"; // Importing styles
import FeedbackCard from "./FeedbackCard"; // Importing FeedbackCard component

// Testimonials functional component
const Testimonials = () => (
  // Section for displaying testimonials with styling
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    {/* Background gradient for visual effect */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Heading and description for testimonials section */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      {/* Main heading */}
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      
      {/* Description */}
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    {/* Container for displaying feedback cards */}
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* Mapping through feedback data to display each FeedbackCard */}
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

// Exporting Testimonials component as default
export default Testimonials;
