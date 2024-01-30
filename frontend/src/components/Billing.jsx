// Handles billing-related information or functionality
import { apple, bill, google } from "../assets"; // Importing necessary assets
import styles, { layout } from "../style"; // Importing styles

// Billing functional component
const Billing = () => (
  // Billing section with reversed layout
  <section id="product" className={layout.sectionReverse}>
    {/* Billing section image and gradient overlays */}
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* Gradient overlays for visual effects */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    {/* Billing section information */}
    <div className={layout.sectionInfo}>
      {/* Billing section heading */}
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>

      {/* Billing section paragraph */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      {/* Billing section app logos */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* Apple App Store logo */}
        <img src={apple} alt="apple_store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        
        {/* Google Play Store logo */}
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

// Exporting Billing component as default
export default Billing;
