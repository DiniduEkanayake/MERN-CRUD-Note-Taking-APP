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
    SECRET = your secret key
    PORT=5000
    URL = Your Domain or VMs IP
    ```

6. Install the client dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

7. Start the application Locally:

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

8. Start the application using nginx and pm2:

## 1. Install PM2 Globally

- To install PM2 globally, run the following command:

    ```bash
    npm install -g pm2
    ```

## 2. Start the Backend with PM2

- Navigate to the backend folder of your MERN app:
   ```bash
   cd /path/to/backend
    ```
- Run your app using PM2:
  ```bash
  pm2 start index.js --name mern-backend
    ```
## 3. Ensure PM2 Continues Running After Reboot

- To ensure your app continues to run after the system restarts, save the
PM2 process and configure startup:

```bash
pm2 save pm2 startup
```

# Nginx Guide

## 1. Install Nginx

- If Nginx is not already installed on your system, you can install it by running:

```bash
sudo apt update sudo apt install nginx -y
```

## 2. Create a Nginx Configuration File

- Create a configuration file for your app under the
/etc/nginx/sites-available/ directory:

```bash
sudo nano /etc/nginx/sites-available/mern-app
```

### 2.1 Example Nginx Configuration

- Add the following configuration to serve your frontend and set up the
- reverse proxy for your backend:

```bash
server { 
        listen 80; server_name your-server-IP;

    # Serve React app (frontend)
    location / {
        root /var/www/frontend;
        index index.html;
        try_files $uri /index.html;
    }

    # Reverse proxy to Node.js (backend)
    location /api/ {
        proxy_pass http://localhost:5000/; # Adjust based on your backend port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Error handling for 404
    error_page 404 /index.html;

}
```

-   Frontend (`/`): Serves the static files of your React app.
-   Backend (`/api/`): Forwards API requests to your Node.js server.

## 3. Move Frontend Build Folder Files to Nginx Directory

- Move the frontend build folder files to /var/www/frontend/:

```bash
sudo mv /path/to/your/frontend/build/\* /var/www/frontend/
```

Make sure to adjust the server_name and proxy_pass as per your app's configuration.

## 4. Enable the Site in Nginx

- Create a symbolic link to the sites-enabled folder:

```bash
sudo ln -s /etc/nginx/sites-available/mern-app /etc/nginx/sites-enabled/
```

## 5. Test Nginx Configuration

Before restarting Nginx, test the configuration:

```bash
sudo nginx -t
```

If the test is successful, you'll see:

nginx: configuration file /etc/nginx/nginx.conf test is successful

## 6. Restart Nginx

To apply the new configuration, restart Nginx:

```bash
sudo systemctl restart nginx
```

## 7. Enable Nginx to Start on Boot

Ensure Nginx starts automatically when the system reboots:

```bash
sudo systemctl enable nginx
```

# Step-by-Step: Permissions and Ownership

## 1. Set Correct Permissions for the Frontend

Ensure that the frontend files in /var/www/frontend are readable by Nginx:

```bash
sudo chown -R www-data:www-data /var/www/frontend 
sudo chmod -R 755 /var/www/frontend
```

# Verify the Setup

## 1. Check the Status of PM2

To see if your backend is running properly with PM2, use:

```bash
pm2 list
```

## 2. Check Nginx Status

Make sure Nginx is running correctly:

```bash
sudo systemctl status nginx
```

## 3. Check Logs

-   PM2 logs: To view the logs for your backend:

    ```bash
    pm2 logs
    ```
    
-   Nginx logs: To view the error logs for Nginx:

    ```bash
    sudo tail -f /var/log/nginx/error.log
    ```
    
## 4. Open Your App in the Browser

Navigate to your VM IP address or domain name in the browser:

http://your-server-ip

Your React frontend should appear, and the Node.js API should work via the /api endpoint.

# Additional Notes

## PM2 Restart Commands

To restart your backend:

```bash
pm2 restart mern-backend
```

## Nginx Restart Commands

To restart Nginx:

```bash
sudo systemctl restart nginx
```

To check the Nginx service status:

```bash
sudo systemctl status nginx
```

With this guide, you should now have your MERN application running smoothly with PM2 for the backend and Nginx as a reverse proxy and static file server for the frontend.

## Usage

Once the application is running, you can interact with the following endpoints:

- `GET /api/items`: Fetch all items from the database.
- `POST /api/items`: Add a new item to the database.
- `PUT /api/items/:id`: Update an item with the specified ID.
- `DELETE /api/items/:id`: Delete an item with the specified ID.

In the frontend, you can perform CRUD operations via a simple UI, where you'll be able to add, view, edit, and delete items.

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [PM2](https://www.npmjs.com/package/pm2)
- [Nginx](https://nginx.org/en/docs/)

