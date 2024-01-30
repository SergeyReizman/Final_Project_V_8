// (Call-to-Action): Encourages users to take a specific action.
import styles from "../style"; // Importing styles
import Button from "./Button"; // Importing Button component

// CTA (Call-to-Action) functional component
const CTA = () => (
  // Section for Call-to-Action with styling
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    {/* Left section containing text information */}
    <div className="flex-1 flex flex-col">
      {/* Call-to-Action heading */}
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      
      {/* Call-to-Action paragraph */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    {/* Right section containing Button for the action */}
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* Button component for the Call-to-Action */}
      <Button />
    </div>
  </section>
);

// Exporting CTA component as default
export default CTA;
