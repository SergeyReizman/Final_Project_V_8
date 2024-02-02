// One-page application with a navigation bar, a hero section,
// and multiple sections for different types of content such as statistics,
// business details, billing information, card deals, testimonials, clients, 
// a call-to-action, and a footer. (JSX allows writing HTML-like code)
// Import necessary dependencies and components
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import React, { useState, useEffect } from "react";
import axios from 'axios';

// App Component
const App = () => {
  // State to manage customer data, loading status, and errors
  const [customers, setCustomers] = useState([]); // Array to store customer data
  const [loading, setLoading] = useState(true); // Boolean to track loading status
  const [error, setError] = useState(""); // String to store error messages

  // Function to fetch customer data from the server
  const fetchCustomers = async () => {
    try {
      const SERVER = "http://127.0.0.1:5000/api/customers";
      const response = await axios.get(SERVER);
      setCustomers(response.data); // Set customer data on successful response
      console.log("Fetched customers:", response.data); // Log the fetched customer data
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setError("Failed to fetch customer data. Please try again."); // Set error message on error
    } finally {
      setLoading(false); // Set loading to false, indicating that data fetching is complete
    }
  };

  // useEffect hook to fetch customer data on component mount
  useEffect(() => {
    fetchCustomers();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  // JSX structure for the entire application
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navigation bar and basic layout */}
      <div className="paddingX flexCenter boxWidth">
        <Navbar />
        {/* Display the number of customers or loading/error message */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
            <h1 style={{ color: "red" }}>Total Customers: {customers.length}</h1>
            {/* Display a list of customer names */}
            <ul>
              {customers.map((customer) => (
                <li key={customer.id} style={{ color: "yellow" }}> Customer names:
                  {customer.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Content sections */}
      <div className="bg-primary paddingX flexCenter boxWidth">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />

        {/* New element for "Made by Sergey Reizman" in yellow color */}
        <p style={{ color: "yellow", textAlign: "center", marginTop: "20px" }}>Made by Sergey Reizman</p>

        {/* Additional text lines */}
        <p>
          This is a line of text.<br />
          This is a new line.
        </p>

        {/* Display the button to the Netlify calculator with added margin */}
        <div style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
          <p>Explore our Business Calculator</p>
          <button
            onClick={() => window.open("https://zingy-mousse-b7755d.netlify.app/", "_blank", "noopener noreferrer")}
            style={{ display: "block", margin: "20px auto", padding: "10px 20px", backgroundColor: "#3498db", color: "#fff", borderRadius: "5px", cursor: "pointer" }}
          >
            Calculator Link
          </button>

        </div>
        {/* Display the button to the Ocean Calendar with Sea colors */}
        <div style={{ color: "#0077cc", textAlign: "center", marginTop: "20px" }}>
          <p>Explore our Ocean-Inspired Calendar</p>
          <button
            onClick={() => window.open("https://lustrous-naiad-03cfad.netlify.app//", "_blank", "noopener noreferrer")}
            style={{
              display: "block",
              margin: "20px auto",
              padding: "10px 20px",
              backgroundColor: "#00a0a0",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Ocean Calendar Link
          </button>
        </div>
      </div>
      {/* Display the button to the To-Do List */}
      <div style={{ color: "#0077cc", textAlign: "center", marginTop: "20px" }}>
        <p>Explore our To-Do List</p>
        <button
          onClick={() => window.open("https://sparkly-bunny-a5c231.netlify.app/",
            "_blank", "noopener noreferrer")}
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 20px",
            backgroundColor: "#8B4513", // Brown color
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          To-Do List Link
        </button>
      </div>

      {/* Button for the "Project Specification Document" */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="https://preeminent-basbousa-497ee5.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
            Project Specification Document
          </button>
        </a>
      </div>
      {/* Button for Expense Manager */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="https://cute-beijinho-40cf41.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ backgroundColor: "purple", color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
            Expense Manager Link
          </button>
        </a>
      </div>

      {/* Button for Eco Drive */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="https://luxury-rolypoly-39a52a.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
            Eco Drive Link
          </button>
        </a>
      </div>
      {/* Empty line */}
      <div style={{ marginTop: "20px" }}></div>

      {/* Button for the LinkedIn profile */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="https://www.linkedin.com/in/sergey-reizman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ backgroundColor: "#0077b5", color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
            LinkedIn Profile
          </button>
        </a>
      </div>

      {/* Empty line after LinkedIn button */}
      <div style={{ marginTop: "20px" }}></div>

      {/* 20px margin at the bottom */}
      <div style={{ marginBottom: "20px" }}></div>
    </div>

  );
};

export default App;
