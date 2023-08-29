Next Auth

Features

User authentication with NextAuth.js and Google OAuth
Initial credits for new users
Functionality to use credits
Page for purchasing more credits
Integration with MariaDB database

Technologies Used

    Next.js
    NextAuth.js
    MariaDB
    Chakra UI
    React.js
    Node.js
    TypeScript

Getting Started
Prerequisites

    Node.js
    Yarn or npm
    MariaDB

Installation

    Clone the repository:

bash

git clone <https://github.com/bernardcaldas/nextjs-auth>

    Install the dependencies:

yarn install

or

npm install

Create a .env.local file in the root of the project and add the following environment variables:

makefile

NEXT_PUBLIC_GOOGLE_ID=your-google-client-id
NEXT_PUBLIC_GOOGLE_SECRET=your-google-client-secret
DATABASE_URL=your-database-url

Run the development server:

`yarn dev`


Open http://localhost:3000 with your browser to see the result.

Project Structure

sql

GET /api/userData - Returns the user data.
POST /api/addCredits - Adds credits to the user's account.

## Interaction with the Database

The application interacts with a MariaDB database to store and retrieve user data and credits. The database has a single table, users, which stores the email, name, image, credits, and totalVisits of each user.

When a user logs in, their email, name, and image are saved to the database if they do not already exist. If the user is logging in for the first time, they are given a certain number of initial credits, and their totalVisits is set to 1. If the user has logged in before, their totalVisits is incremented by 1.

When a user purchases credits, the credits field in the database is updated to reflect the new total.

When a user uses a credit, the credits field in the database is decremented by 1.



mariaDB  status and important commands : 

`mariadb -u root -p ` 

`sudo systemctl status mariadb`





## Authentication

Authentication is managed using NextAuth.js, a complete open-source authentication solution for Next.js applications. Google OAuth is used as the authentication provider. When a user logs in, their session is stored in an HTTP cookie, and their user data is stored in the MariaDB database if it does not already exist.

# Frontend
Components

The main React components of the application are:

Navbar: This component is responsible for rendering the navigation bar at the top of the page. It shows different options based on whether the user is logged in or not.

CreditButton: This component renders a button that, when clicked, decrements the user's credits by 1.

CreditCardsComponent: This component renders three different "credit cards" that the user can click on to purchase more credits.

## Context

The CreditsContext is used to manage the state of the user's credits throughout the application. It is created using the createContext function from React and provides a state object and a dispatch function to all components that consume the context. The state object has a single property, credits, which is the number of credits the user currently has. The dispatch function is used to update the credits in the state object.