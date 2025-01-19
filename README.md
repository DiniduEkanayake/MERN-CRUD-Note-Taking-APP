# MERN CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack, which consists of MongoDB, Express, React, and Node.js. The application allows users to perform basic CRUD operations on a resource, such as creating, reading, updating, and deleting data from a database.

## Features

- **Create**: Add new items to the database.
- **Read**: View all items stored in the database.
- **Update**: Modify existing items.
- **Delete**: Remove items from the database.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Requests**: Axios or Fetch API

## Installation

### Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) - version 14 or higher
- [MongoDB](https://www.mongodb.com/) - You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database or set up a local instance.
- [npm](https://www.npmjs.com/) - Node Package Manager

### Steps to Install

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/mern-crud-app.git
    ```

2. Navigate to the project folder:

    ```bash
    cd mern-crud-app
    ```

3. Install the server dependencies:

    ```bash
    cd backend
    npm install
    ```

4. Set up your MongoDB database. If you are using MongoDB Atlas, create a new cluster and get your connection string. Alternatively, you can set up MongoDB locally.

5. Create a `.env` file inside the `backend` folder and add the MongoDB connection string:

    ```env
    MONGO_URI=your-mongodb-connection-string
    PORT=5000
    ```

6. Install the client dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

7. Start the application:

    - In one terminal window, start the backend server:

      ```bash
      cd backend
      npm start
      ```

    - In another terminal window, start the React frontend:

      ```bash
      cd frontend
      npm start
      ```

    The frontend will be running on `http://localhost:3000`, and the backend API will be running on `http://localhost:5000`.

## Usage

Once the application is running, you can interact with the following endpoints:

- `GET /api/items`: Fetch all items from the database.
- `POST /api/items`: Add a new item to the database.
- `PUT /api/items/:id`: Update an item with the specified ID.
- `DELETE /api/items/:id`: Delete an item with the specified ID.

In the frontend, you can perform CRUD operations via a simple UI, where you'll be able to add, view, edit, and delete items.


## Contributing

If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)


