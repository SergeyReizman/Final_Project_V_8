// Contains components or logic related to displaying clients.
import { clients } from "../constants"; // Importing client data
import styles from "../style"; // Importing styles

// Clients functional component
const Clients = () => (
  // Section for displaying client logos
  <section className={`${styles.flexCenter} my-4`}>
    {/* Container for client logos with flex layout */}
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* Mapping through client data to display each client logo */}
      {clients.map((client) => (
        // Individual client logo container
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          {/* Client logo image */}
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

// Exporting Clients component as default
export default Clients;
