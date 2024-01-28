// Represents the footer section.
import styles from "../style"; // Importing styles
import { logo } from "../assets"; // Importing logo asset
import { footerLinks, socialMedia } from "../constants"; // Importing footerLinks and socialMedia data

// Footer functional component
const Footer = () => (
  // Footer section with styling
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* Main content container */}
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      {/* Logo and description container */}
      <div className="flex-[1] flex flex-col justify-start mr-10">
        {/* Logo */}
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        
        {/* Description paragraph */}
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable, and secure.
        </p>
      </div>

      {/* Footer links container */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {/* Mapping through footerLinks to display each section */}
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            {/* Footer section title */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            
            {/* List of links for the footer section */}
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Copyright and social media links container */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      {/* Copyright text */}
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 SergeyReizmanBank. All Rights Reserved.
      </p>

      {/* Social media icons */}
      <div className="flex flex-row md:mt-0 mt-6">
        {/* Mapping through socialMedia to display each icon */}
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

// Exporting Footer component as default
export default Footer;
