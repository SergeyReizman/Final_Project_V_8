// Deals with card-related content or functionality
import { card } from "../assets"; // Importing card asset
import styles, { layout } from "../style"; // Importing styles
import Button from "./Button"; // Importing Button component

// CardDeal functional component
const CardDeal = () => (
  // Section for dealing with card-related content
  <section className={layout.section}>
    {/* Section information */}
    <div className={layout.sectionInfo}>
      {/* Section heading */}
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      
      {/* Section paragraph */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      {/* Button component for additional action */}
      <Button styles={`mt-10`} />
    </div>

    {/* Section image displaying card */}
    <div className={layout.sectionImg}>
      <img src={card} alt="card_deal" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

// Exporting CardDeal component as default
export default CardDeal;
