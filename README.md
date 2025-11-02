# 🏦 HooBank — Modern UI/UX Banking Platform  

[![Frontend Deploy](https://img.shields.io/badge/Netlify-Deployed-success?logo=netlify)](https://sergeybank.netlify.app/)
[![Backend Framework](https://img.shields.io/badge/Flask-Backend-blue?logo=flask)](https://flask.palletsprojects.com/)
[![Frontend Framework](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)](https://react.dev/)
[![Build Status](https://img.shields.io/github/actions/workflow/status/SergeyReizman/Final_Project_V_8/ci.yml?branch=main&logo=github)](https://github.com/SergeyReizman/Final_Project_V_8/actions)
[![License](https://img.shields.io/github/license/SergeyReizman/Final_Project_V_8)](https://github.com/SergeyReizman/Final_Project_V_8/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue)](#)
[![Database](https://img.shields.io/badge/SQLite-Database-blueviolet?logo=sqlite)](https://www.sqlite.org/index.html)
[![Continuous Integration](https://img.shields.io/badge/CI/CD-Workflow-lightgrey?logo=githubactions)](#)

---

## 🌐 Overview  

**HooBank** is a modern banking web platform built with **React**, **Vite**, **Tailwind CSS**, and a **Flask** backend.  
It features a **Bank Management System** with secure APIs for **customers**, **accounts**, and **transactions**, plus robust **validation** and **continuous integration** using **GitHub Actions**.  

🔗 **Project Specification Document (PSD):**  
[➡️ View on Netlify](https://65b2bd17774d3328a0371504--preeminent-basbousa-497ee5.netlify.app/)

---

## ⚙️ Tech Stack  

### 🖥️ Frontend  
- **React.js** + **Vite** — Fast & lightweight development  
- **Tailwind CSS** 3.4.1 — Responsive, utility-first styling  
- **Axios** — API communication  

### 🔧 Backend  
- **Flask** — Microframework for Python  
- **Flask-SQLAlchemy** — ORM integration  
- **Flask-CORS** — Secure cross-origin requests  
- **SQLite** — Local relational database  

### 🧱 Build & Tools  
- Node.js (v18+)  
- GitHub Actions for CI/CD  
- npm scripts for build & testing  

---

## 🚀 Project Setup  

### 🖥️ Frontend  
```bash
git clone https://github.com/SergeyReizman/Final_Project_V_8.git
cd frontend
npm install
npm install axios
npm run dev


cd backend
python -m venv env
.\env\Scripts\activate
pip install -r requirements.txt
python app.py


name: CI
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm test


.bg-primary: rgb(0, 4, 15)
.bg-dimBlue: rgba(9, 151, 124, 0.1)
.text-dimWhite: rgba(255, 255, 255, 0.7)


frontend/
 ├─ src/
 │   ├─ components/
 │   ├─ styles/
 │   └─ index.jsx
backend/
 ├─ app.py
 ├─ models/
 ├─ migrations/
 ├─ env/
 └─ bank.db


npm test




---




# HooBank - Modern UI/UX Website

Discover a rich set of banking functions, personalization options, 
and security measures designed to elevate your financial experience. Dive into the future of banking with HooBank. 
For a detailed feature breakdown, refer to the 

[Project Specification Document]

(https://65b2bd17774d3328a0371504--preeminent-basbousa-497ee5.netlify.app/).

# Bank Management System

Build Status:
## Overview

https://github.com/SergeyReizman/Final_Project_V_8/assets/140590660/d68ab7bd-15bd-4a8d-b6db-1b0192059e3a

The provided document is a detailed guide for the HooBank project, 
covering various aspects such as project overview, 
setup instructions, database structure, styling details, 
technologies used, and additional notes.

The choice of technologies (React, Flask, Tailwind CSS) 
is suitable for building a modern web application.
Including Vite for fast frontend development is a good choice.
Well-documented utility classes for spacing, flex, and positioning.
Responsive design considerations with media queries. 
It also includes a proposed features section.

To maintain a secure and reliable banking application, it is essential to continually review and update input and request validation mechanisms as the application evolves.

A Flask application includes endpoints for managing customers, accounts, and transactions in a bank using 
Flask for building the web application, 
Flask-CORS for handling Cross-Origin Resource Sharing, and 
Flask-SQLAlchemy for interacting with a SQLite database.
The SQLite database is configured, and the SQLAlchemy models for Customer, Account, and Transaction have been defined. 

SQL Injection is a vulnerability that occurs when a web application trusts the user’s input without properly parameterizing it. To prevent this, the web application must use prepared statements, which instruct the database to execute a part of the user’s query. This allows an attacker to submit their own SQL statement to the database. Once the attacker submits a prepared statement, it is possible to read the rest of the query and execute it.

The CORS extension is also enabled for all routes, allowing cross-origin requests.

The API endpoints are designed to handle valid data and provide meaningful error responses for invalid input or requests.

In HooBank's Flask backend, both input and request validation are implemented using a combination of Flask request parsing and custom validation logic.

### Input and Request Validation 

Implementation in HooBank

When developing a robust API like HooBank, ensuring the integrity and security of the data being sent to the server is crucial. 
Two fundamental aspects to address this concern are input validation and request validation.

### Input Validation

Input validation involves verifying the correctness and expected format of the data sent by clients to the API. This process helps prevent malformed or malicious input from compromising the system. In the context of HooBank, input validation is applied to user-generated data, such as customer information, transaction details, and account data.

#### Why Input Validation?

1. **Security**: Protect your application from common security vulnerabilities such as SQL injection, cross-site scripting (XSS), and other injection attacks.

2. **Data Integrity**: Ensure that the data entering your system meets the expected criteria, reducing the risk of errors and corruption.

3. **Enhanced User Experience**: By validating input on the server side, you can provide immediate feedback to users, guiding them to correct any mistakes in their input.

### Request Validation

Request validation is concerned with checking the correctness of the overall request made to the API. This involves verifying that the request structure, headers, and payload align with the expected format. For HooBank, request validation ensures that every interaction with the API follows predefined standards.

### Why Request Validation?

1. **API Consistency**: Enforce a consistent API structure, making it easier for developers to understand and use the endpoints correctly.

2. **Prevent Unnecessary Processing**: Validate requests early in the process to avoid unnecessary computation or database operations for invalid requests.

3. **Error Handling**: Proper request validation enables more informative error messages, aiding developers in diagnosing and fixing issues.

GitHub Actions workflow is designed to run a job named "build" on every push to the "main" branch. 
The job sets up Node.js version 18, installs frontend dependencies, and then runs the frontend tests. 
This is a common structure for a Continuous Integration (CI) workflow for a frontend project, 
ensuring that the code is checked out, dependencies are installed, 
and tests are executed automatically on each push to the main branch.

## Continuous Integration Workflow

The CI/CD workflow is designed to run on every push to the "main" branch. 
It includes a job named "build" that sets up Node.js, installs frontend dependencies, 
and runs frontend tests automatically on each push to the main branch.
Implementing CI/CD practices is crucial for modern software development, 
enabling teams to deliver high-quality software more rapidly and reliably.
The provided GitHub Actions workflow should work as intended for Continuous Integration (CI) on the Windows environment. 
It includes the original CI job for building and testing a frontend application and a separate cache-clear job to handle cache management.

This document concludes with a summary of the project's goals and a link to the 
Project Specification Document hosted on Netlify. 

HooBank is a modern web development project that aims to build a responsive React JS application with a stunning UI, 
high-quality assets, and robust backend functionalities for managing customers, accounts, and transactions in a bank.

This project aims to provide a user-friendly banking application with a modern UI/UX. 
For more details, refer to the Project Specification Document (PSD). 

(PSD Deploy on Netlify link: https://65b2bd17774d3328a0371504--preeminent-basbousa-497ee5.netlify.app/)

## Project Setup

### Project Setup

### Frontend

1. Clone the repository: `git clone https://github.com/SergeyReizman/Final_Project_V_8.git`
2. Navigate to the frontend directory: `cd frontend`
3. Install dependencies: `npm install` & 'npm install axios'
4. Run development server: `npm run dev` (runs on http://localhost:5173/)
5. Build for production: `npm run build`

### Backend

1. Clone the repository: `git clone https://github.com/SergeyReizman/Final_Project_V_8.git`
2. Set up a virtual environment: `cd backend -> python -m venv env -> .\env\Scripts\activate`
3. Install dependencies: `pip install -r requirements.txt`
To update pip, run: 
python.exe -m pip install --upgrade pip
4. Run the application: `python app.py`
"app.py" creates the necessary database tables and runs the Flask app on port 5000 in debug mode.

## Database

The application uses SQLite as the database, and the database file is named `bank.db`. 
The database schema includes tables for Customers, Accounts, and Transactions.

## Styling

#### Tailwind CSS

- Version: 3.4.1

#### Global Styles

- Box sizing reset.
- Typography adjustments.
- Form styling.

#### Utility Classes

- Spacing (m-, p-, mx-, my-, mt-, mb-, ml-, mr-).
- Flex container properties (flex, flex-row, flex-col, flex-wrap).
- Positioning (absolute, relative, -left-1/2, -right-[50%], bottom-0, right-0, top-0).
- Z-index and shadows.

#### Responsive Design

- Media queries for different screen widths (xs, ss, sm, md, lg, xl).

##### Background Colors

- .bg-dimBlue: rgba(9, 151, 124, 0.1)
- .bg-primary: rgb(0, 4, 15)

##### Text Colors

- .text-dimWhite: rgba(255, 255, 255, 0.7)
- .text-primary: rgb(0, 4, 15)

### Styling:

### Tailwind CSS

- Version: 3.4.1

#### Global Styles

- Box sizing reset.
- Typography adjustments.
- Form styling.

#### Utility Classes

- Spacing (m-, p-, mx-, my-, mt-, mb-, ml-, mr-).
- Flex container properties (flex, flex-row, flex-col, flex-wrap).
- Positioning (absolute, relative, -left-1/2, -right-[50%], bottom-0, right-0, top-0).
- Z-index and shadows.

#### Responsive Design

- Media queries for different screen widths (xs, ss, sm, md, lg, xl).

##### Background Colors

- .bg-dimBlue: rgba(9, 151, 124, 0.1)
- .bg-primary: rgb(0, 4, 15)

##### Text Colors

- .text-dimWhite: rgba(255, 255, 255, 0.7)
- .text-primary: rgb(0, 4, 15)
### Testing

Run tests with: `npm test`

### Conclusion

This project aims to provide a user-friendly banking application with a modern UI/UX.

For more details, refer to the Project Specification Document deploy on Netlify:

https://65b2bd17774d3328a0371504--preeminent-basbousa-497ee5.netlify.app/

Version: 1.0.0

Last Updated: 28.01.2024

Frontend deploy on Netlify:

https://sergeybank.netlify.app/

"# Final_Project_V_8" 

# Fake server
json-server -H 0.0.0.0 -p 3000 -w db.json

HooBank - Modern UI/UX Website

Overview

HooBank is a modern web development project using Modern UI/UX, React.js & Tailwind CSS that aims to build a responsive React JS application with a stunning UI, 
high-quality assets, gradients, business stats, reusable feature sections, call-to-action buttons, testimonials, and more. 
Developed by Sergey Reizman.

# Tech Stack

React
ReactDOM
Tailwind CSS
Flask (Backend)
Flask-SQLAlchemy
Flask-CORS
Flask-Marshmallow

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm create vite@latest

cd ...

npm install

npm install -g npm@latest

npm init -y

npm run dev

npm install -D tailwindcss postcss autoprefixer

ctrl + j

ctrl + c

npx tailwindcss init -p

npm install tailwindcss@latest --save-dev

npm install tailwindcss@latest

npx tailwindcss build -o output.css

pip freeze > requirements.txt

cd backend

python -m venv env

.\env\Scripts\activate

deactivate

pip install -r requirements.txt

pip install Flask Flask-CORS Flask-SQLAlchemy

flask shell

pip install flask

python.exe -m pip install --upgrade pip

pip install flask-cors

pip install Flask-SQLAlchemy

pip install marshmallow

cd frontend

npm install axios

npm install axios@latest

npm i axios

npm run build

git config --global core.autocrlf false


This command is used to build the React application for production.
It generates optimized and minified files in the build folder.
The filenames include hashes to ensure cache busting, helping with efficient caching in the user's browser.

npm test

Launches the test runner in interactive watch mode.
This is typically used for running unit tests for your React components and ensuring that your application behaves as expected.
It provides feedback in the console about the test results.

npm run eject

This is a one-way operation that "ejects" your Create React App configuration.
Ejecting gives you full control over the build tools and configuration files (e.g., webpack, Babel, ESLint) of your project.
Once ejected, you cannot revert to the default configuration provided by Create React App.
This is an advanced feature and should be used with caution. 
It's typically done when you need more customization and control over the build process.

npm run dev

It's a common convention in many JavaScript projects using npm or yarn scripts.

npm init -y

It is used to initialize a new Node.js project with a default package.json file without having to go through the interactive setup. 
The -y flag stands for "yes," and it automatically accepts the default values for all the prompts during the initialization process.


### Customer Management:

Get the List of Customers

Endpoint: GET /api/customers
Description: Retrieve a list of all customers.
Create a New Customer

Endpoint: POST /api/customers
Description: Add a new customer to the system.
Request Body: JSON with the customer's name.
Update a Customer

Endpoint: PUT /api/customers/{customer_id}
Description: Modify the details of an existing customer.
Request Body: JSON with the updated customer information.
Delete a Customer

Endpoint: DELETE /api/customers/{customer_id}
Description: Remove a customer from the system.
Account Management
Get the List of Accounts

Endpoint: GET /api/accounts
Description: Retrieve a list of all accounts.
Create a New Account

Endpoint: POST /api/accounts
Description: Open a new account for a customer.
Request Body: JSON with the customer ID and initial balance.
Update an Account

Endpoint: PUT /api/accounts/{account_id}
Description: Modify the details of an existing account.
Request Body: JSON with the updated account information.
Delete an Account

Endpoint: DELETE /api/accounts/{account_id}
Description: Close an account and remove it from the system.
Transaction Management
Get the List of Transactions

Endpoint: GET /api/transactions
Description: Retrieve a list of all transactions.
Create a New Transaction

Endpoint: POST /api/transactions
Description: Record a new transaction for an account.
Request Body: JSON with the account ID, transaction amount, and action type.
Update a Transaction

Endpoint: PUT /api/transactions/{transaction_id}
Description: Modify the details of an existing transaction.
Request Body: JSON with the updated transaction information.
Delete a Transaction

Endpoint: DELETE /api/transactions/{transaction_id}
Description: Remove a transaction record from the system.

### Technologies Used

Frontend Technologies

   React
   ReactDOM
   Tailwind CSS

Backend Technologies

- Flask: A micro web framework for Python
- Flask-SQLAlchemy: Flask extension for SQLAlchemy, a SQL toolkit for Python
- Flask-CORS: Flask extension for handling Cross-Origin Resource Sharing (CORS)

Build Tools

Vite (for fast frontend development)


   Development Environment
   
   1. Clone the repository:

      git clone https://github.com/SergeyReizman/Final_Project_V_8.git

   2. Frontend Setup

   Install dependencies:

   cd frontend

   npm install

   npm install axios

   Run the development server:
   
   npm run dev

   Build for Production:

   npm run build

   3. Backend Setup

   https://github.com/SergeyReizman/Final_Project/assets/140590660/39d8d80e-15d3-4011-b373-ad7c89da822d


   Install Python dependencies:

   cd backend

   python -m venv env

   .\env\Scripts\activate
   
   Install dependencies: `pip install -r requirements.txt`
   
   Run the application: `python app.py`

   Run Flask Shell:

   flask shell

   Deactivate Virtual Environment:

   deactivate

   Additional Configuration

   Update Database Schema:

   flask db upgrade
   

### Project Structure Overview

Frontend Structure

/src
|-- components
|   |-- App.jsx
|-- styles
|   |-- index.css
|-- index.jsx
|-- ...

components: This directory contains React components used in the project. The main application component, App.jsx, is located here.

styles: The styles directory holds global styles for the project. index.css likely includes styling rules that are applied across various components.

index.jsx: This is the entry point for the React application, where the main React component is rendered.

Configuration Files
.babelrc (if applicable): Configuration file for Babel, a JavaScript compiler. It may contain settings for transpiling JavaScript code.

vite.config.js: Configuration file for Vite, the build tool used for fast frontend development. It may include settings for bundling, plugins, and other build-related configurations.

Configuration Files

.babelrc (if applicable)
vite.config.js (for Vite configuration)

Backend Structure

/backend
|-- app.py
|-- env
|   |-- ...
|-- migrations
|   |-- ...
|-- models
|   |-- ...
|-- ...

- **app.py:** Main entry point for the Flask application, containing application configuration, route definitions, and setup.
  It contains the application configuration, route definitions, and possibly other setup.

- **env:** Virtual environment files for the Flask application.
  The env directory is commonly used for virtual environment files. 
  It might contain the virtual environment setup for the Flask application.

- **migrations:** Directory for migration scripts.
  If Flask-Migrate is used,
  this directory stores migration scripts.

- **models:** Python files defining database models using Flask-SQLAlchemy.

# Database

The application uses SQLite as the database, 
and the SQLite database file which is stored in the root directory is named `bank.db`. 
The database schema includes tables for Customers, Accounts, and Transactions.


This document serves as a comprehensive guide to understanding the structure, setup, and styling of the project. 
Ensure that you update placeholders with project-specific information and customize the content based on your project requirements.

Project Specification Document

This document outlines the key aspects of the HooBank project, including its objectives, tech stack, features, setup instructions, and additional notes. 
It serves as a guide for developers, designers, and other stakeholders involved in the project.

https://65b2bd17774d3328a0371504--preeminent-basbousa-497ee5.netlify.app/

Project Title: HooBank - Modern UI/UX Website

1. Introduction

1.1 Overview

HooBank is a modern web development project aimed at building a responsive React JS application with a stunning UI, high-quality assets, and robust backend functionalities for managing customers, accounts, and transactions in a bank.

1.2 Project Objectives

Develop a visually appealing and user-friendly banking application.
Implement a responsive and modern UI/UX using React.js and Tailwind CSS.
Build a Flask backend to manage customers, accounts, and transactions.
Ensure cross-origin resource sharing (CORS) using Flask-CORS.
Utilize Flask-SQLAlchemy for efficient interaction with an SQLite database.

2. Tech Stack

2.1 Frontend Technologies

React
ReactDOM
Tailwind CSS
Vite (for fast frontend development)

2.2 Backend Technologies

Flask
Flask-SQLAlchemy
Flask-CORS

2.3 Build Tools

Vite (for frontend development)

3. Features

3.1 Bank Management System

3.1.1 Customer Management

Retrieve a list of customers
Add a new customer
Modify existing customer details
Remove a customer from the system

3.1.2 Account Management

Retrieve a list of accounts
Open a new account for a customer
Modify existing account details
Close an account and remove it from the system
3.1.3 Transaction Management
Retrieve a list of transactions
Record a new transaction for an account
Modify existing transaction details
Remove a transaction record from the system

4. Project Setup

4.1 Frontend Setup

Clone the repository: git clone https://github.com/SergeyReizman/Final_Project_V_8.git
Install dependencies: cd frontend -> npm install
Run development server: npm run dev
Build for production: npm run build

4.2 Backend Setup

Clone the repository: git clone https://github.com/SergeyReizman/Final_Project_V_8.git
Set up virtual environment: cd backend -> python -m venv env -> .\env\Scripts\activate
Install dependencies: pip install -r requirements.txt
Run the application: python app.py

5. Database

SQLite is used as the database (bank.db).
Database schema includes tables for Customers, Accounts, and Transactions.

6. Styling

6.1 Tailwind CSS

Version: 3.4.1

6.1.1 Global Styles

Box sizing reset, typography adjustments, form styling.

6.1.2 Utility Classes

Spacing, flex container properties, positioning, z-index, shadows.

6.1.3 Responsive Design

Media queries for different screen widths.

6.1.4 Colors

Background and text colors defined.

7. Additional Notes

Flask Shell: flask shell is used for interactive Flask shell.
Virtual Environment: python -m venv env is used for creating a virtual environment.
Build Tools: Vite is used for fast frontend development.
Testing: npm test is used for launching the test runner.
Ejecting: npm run eject is a one-way operation providing full control over build tools.

8. Conclusion

This project aims to provide a user-friendly banking application with a modern UI/UX. For more details, refer to the project specification document.

(Deploy on Netlify: https://65b2bd17774d3328a0371504--preeminent-basbousa-497ee5.netlify.app/)

Proposed Features

Banking Functions

Advanced Search and Filtering:

Search transactions by date, amount, category, or recipient/sender.
Filter accounts by type (checking, savings, etc.) or balance range.

Scheduled Payments and Transfers:

Set up recurring payments for bills, rent, or loan repayments.
Schedule automatic transfers between accounts.

Investment Options:

Integrate investment accounts within the platform.
Enable buying and selling of stocks, ETFs, or mutual funds.

International Transfers:

Facilitate international money transfers with competitive exchange rates and transparent fees.

Loan Applications and Tracking:

Initiate loan applications through the website.
Track the status of existing loans.

Bill Pay:

Integrate with popular billers for online bill payments and tracking.

Mobile Check Deposit:

Allow users to scan checks using a mobile device and deposit them directly into accounts.
Personalization and Convenience

Customizable Dashboards:

Personalize dashboards with frequently used features, account summaries, and financial goals.

Budgeting Tools and Insights:

Integrate budgeting tools to track income and expenses.
Set spending limits and receive personalized insights on spending habits.

Goal Setting and Tracking:

Allow users to set financial goals (e.g., vacation, retirement).
Track progress towards achieving financial goals.

Financial Literacy Resources:

Provide educational resources within the platform for informed financial decisions.

Dark Mode and Accessibility Features:

Implement a dark mode option.
Enhance accessibility features for users with disabilities.

Multi-language Support:

Offer the platform in multiple languages for a diverse audience.
Security and Trust

Two-Factor Authentication:

Implement two-factor authentication for secure login and transaction verification.

Biometric Login:

Enable login using fingerprints or facial recognition for added security.

Data Encryption:

Ensure all user data is encrypted at rest and in transit.

Regular Security Audits:

Conduct periodic security audits to identify and address vulnerabilities.

Fraud Prevention and Monitoring:

Implement advanced fraud detection systems.
Monitor transactions for suspicious activity.

Community and Communication

Secure Messaging:

Allow users to securely message customer support representatives directly within the platform.

Community Forum:

Create a forum for users to ask questions, share tips, and learn from each other.

Personalized Financial Advice:

Offer personalized financial advice through integrated chatbots or human advisors.

Rewards and Loyalty Programs:

Implement reward programs for using the platform or achieving financial goals.