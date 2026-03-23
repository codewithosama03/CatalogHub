## CatalogHub

## React Product Catalog Application (Frontend Learning Project)

## About

CatalogHub is a frontend-focused product catalog application built using React.

The project demonstrates how modern e-commerce listing systems work by implementing product fetching, search functionality, category filtering, pagination, and dynamic routing.

It simulates a real-world product browsing experience where users can explore products, view detailed information, and interact with catalog features.

This project focuses on application structure, state handling, and user experience rather than backend complexity.

##  Features

Product listing fetched from API

Dynamic product detail pages

Search functionality with debouncing

Category-based filtering

Client-side pagination

Loading and error handling states

Responsive grid layout

Navigation using React Router

Clean UI using Tailwind CSS

Basic Add to Cart / Buy Now UI (frontend only)

Application Flow

The application follows a simple product browsing flow.

User lands on the Home page

Navigates to the Products page

Products are fetched from an API

User can search products using a debounced search input

User can filter products by category

Filtered results are paginated for better UX

User clicks on a product to view detailed information

Product details are dynamically rendered based on route parameter

If a product is not found, a fallback UI is shown

## Data Handling

The project simulates real-world data handling using API calls.

Products are fetched asynchronously using Axios

Data is stored in component state

Filtering and searching are handled on the client side

Debouncing is used to optimize search performance

Pagination logic slices the dataset for display

Error and loading states ensure smooth user experience

## Routing Structure

The application uses React Router for navigation.

Home Route (/)

Displays landing page

Products Route (/products)

Displays all products with search, filter, and pagination

Product Details Route (/products/:id)

Displays detailed information of a selected product

HashRouter is used for deployment compatibility with GitHub Pages

## Core Components

SearchBar

Handles user input for searching products

Filter

Allows category-based filtering

ProductCard

Displays individual product preview

Pagination

Controls page navigation

ProductDetails

Displays complete product information

## Layout

Wraps the application structure

## Technologies Used

React

React Router

JavaScript

Axios

Tailwind CSS

Vite

Learning Outcomes

Understanding product listing architecture

Implementing search with debouncing

Handling client-side filtering and pagination

Working with dynamic routes in React

Managing API data in React applications

Building scalable component-based UI

Improving user experience with loading and error states

Deploying React apps using GitHub Pages

## Screenshots

Example:

Home Page

Products Page

Product Details Page

## Future Improvements

Add real cart functionality with state management

Integrate backend for dynamic product data

Add user authentication

Improve UI/UX and responsiveness

Add sorting options (price, rating, etc.)

Implement wishlist feature

Optimize performance with memoization

## Notes

This project focuses on frontend product catalog architecture.

All data handling is done on the client side to understand how real-world product browsing systems work.

The structure is designed so that backend integration can be added easily in the future.
