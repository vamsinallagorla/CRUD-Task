# MERN CRUD Product Application

## Overview
This is a full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack. Users can add, view, update, and delete product details. The frontend is developed with React, and the backend is built with Node.js, Express.js, and MongoDB.

## Features
- Add a new product
- Update existing products
- Delete products
- REST API integration
- MongoDB database connectivity

## Technologies Used

### Frontend
- React.js
- CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## Project Structure

```text
CRUD-Task/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/vamsinallagorla/CRUD-Task.git
```

### Backend Setup

```bash
cd backend
npm install
```

### Create a `.env` file

Create a `.env` file inside the **backend** folder and add:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productdb
```

> Make sure MongoDB Community Server is installed and running on your computer.

### Start the Backend

```bash
npm start
```

### Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

## Author

**Vamsi Nallagorla**