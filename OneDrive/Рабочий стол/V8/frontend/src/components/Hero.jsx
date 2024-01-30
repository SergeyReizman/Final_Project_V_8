// Represents the hero section, usually a prominent and introductory part of the website
import styles from "../style"; // Importing styles
import { discount, robot } from "../assets"; // Importing assets
import GetStarted from "./GetStarted"; // Importing GetStarted component

// Hero functional component
const Hero = () => {
  return (
    // Hero section with styling
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Left content container */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Discount banner */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* Discount icon */}
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          {/* Discount text */}
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* Main title and subtitle */}
        <div className="flex flex-row justify-between items-center w-full">
          {/* Main title */}
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          
          {/* GetStarted button for larger screens */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* Subtitle */}
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        
        {/* Main paragraph */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* Right content container with robot image */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* Robot image */}
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* Gradient overlays for visual effects */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* GetStarted button for smaller screens */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

// Exporting Hero component as default
export default Hero;
