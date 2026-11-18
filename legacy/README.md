# WanderLust

WanderLust is a full-stack web application for listing and browsing travel accommodations, inspired by platforms like Airbnb. Users can sign up, create their own property listings with images, browse listings created by others, and leave reviews.

Live demo: https://wanderlust-4i73.onrender.com

## Features

- User authentication (signup, login, logout) using Passport.js
- Create, edit, and delete property listings (only the owner of a listing can edit or delete it)
- Image upload for listings using Multer and Cloudinary
- Add and delete reviews on listings
- Flash messages for user feedback (success/error notifications)
- Form validation on both client and server side using Joi
- Session management with persistent sessions stored in MongoDB
- Protected routes that require login before performing certain actions

## Tech Stack

**Backend**
- Node.js
- Express.js

**Frontend**
- EJS (Embedded JavaScript templates) with ejs-mate for layouts
- Bootstrap for styling

**Database**
- MongoDB (MongoDB Atlas for hosting)
- Mongoose as the ODM

**Authentication**
- Passport.js with passport-local and passport-local-mongoose

**File Storage**
- Cloudinary (for storing listing images)
- Multer and multer-storage-cloudinary (for handling file uploads)

**Other Libraries**
- connect-flash for flash messages
- connect-mongo for storing sessions in MongoDB
- method-override for supporting PUT/DELETE requests from HTML forms
- joi for schema-based data validation
- dotenv for managing environment variables

**Deployment**
- Render

## Project Structure

WanderLust/
├── controllers/ Route handlers and business logic
├── models/ Mongoose schemas (Listing, Review, User)
├── routes/ Express route definitions
├── views/ EJS templates
│ ├── layouts/
│ ├── includes/
│ └── listings/
├── public/ Static assets (CSS, JS, images)
├── utils/ Helper utilities (error handling, async wrapper)
├── middleware.js Custom middleware (auth checks, validation)
├── cloudConfig.js Cloudinary configuration
├── schema.js Joi validation schemas
├── app.js Application entry point
└── package.json


## Getting Started

### Prerequisites

- Node.js installed on your machine
- A MongoDB Atlas account (or a local MongoDB instance)
- A Cloudinary account for image storage

### Installation

1. Clone the repository

git clone https://github.com/rohil1418/WanderLust.git
cd WanderLust


2. Install dependencies

npm install


3. Create a `.env` file in the root directory and add the following variables

ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret


4. Start the development server

npm run dev


5. The app will be running at http://localhost:8080

## Usage

- Sign up for a new account or log in if you already have one
- Browse existing listings on the home page
- Click on a listing to view its details and reviews
- Logged-in users can add a new listing, upload an image for it, and leave reviews on other listings
- Listing owners can edit or delete their own listings

## Future Improvements

- Add a search and filter system based on location, price, and category
- Add pagination for listings
- Add a map view showing listing locations
- Allow users to edit or delete their own reviews
- Improve mobile responsiveness across all pages

## Author

Rohil