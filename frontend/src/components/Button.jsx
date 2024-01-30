// A simple React component that renders a button with customizable styles.
import React from "react";

// Button component that accepts styles as a prop
const Button = ({ styles }) => (
  // Button element with customizable styles
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

// Exporting Button component as default
export default Button;
