Travel Planner App
This is a Travel Planner application built with React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for the NoSQL database. The app allows users to search for hotels with real time third party API  and save their hotel for travel plans for upcoming trips. It also includes user login and signup functionality to securely store and retrieve data from the database.
https://travelplanwebapp.netlify.app/
Installation
Clone the repository: git clone https://github.com/ThienBNguyen/hotelApi.git
Navigate to the project directory: 
Install dependencies for the frontend:
Navigate to the frontend directory: cd client
Run npm install to install the necessary packages.
Install dependencies for the backend:
Navigate to the backend directory: cd server
Run npm install to install the necessary packages.
Configuration
Create a MongoDB database and obtain the connection URL.
Rename the .env.example file in the backend directory to .env.
Open the .env file and update the following environment variables:
MONGODB_URI with your MongoDB connection URL.
Usage
Start the backend server:
Navigate to the backend directory: cd server
Run npm start to start the server.
Start the frontend development server:
Navigate to the frontend directory: cd frontend
Run npm start to start the development server.
Access the application by visiting http://localhost:3000 in your web browser.
Features
User Signup and Login: Users can create new accounts or log in to their existing accounts to access their saved travel plans.
Hotel Search: Users can search for hotels based on their desired location, dates, and other preferences.
Save Hotel Plans: Users can save hotel plans to their profile for future reference.
User Profile: Users can view and manage their saved travel plans in their profile section.
Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b my-new-feature.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the branch: git push origin my-new-feature.
Submit a pull request.
License
This project is licensed under the MIT License.

Feel free to customize and enhance the application according to your specific requirements. Happy coding!
