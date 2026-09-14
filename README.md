# 📝 The Dummy Blog — MERN Blog Application

A full-stack blog application built with the **MERN stack**, featuring user authentication, protected blog creation, public blog browsing, and owner-only blog deletion.

## 🚀 Live Demo

**Frontend:** https://blog-gebn4w9dt-abid-rehman.vercel.app/

## ✨ Features

* 📖 Browse published blogs without an account
* 🔐 User signup and login
* 🚪 User logout
* 🔑 JWT-based authentication
* ✍️ Authenticated users can create blogs
* 🗑️ Users can delete their own blogs
* 👤 Blogs are associated with the authenticated user
* 🌐 RESTful API
* 📱 Responsive interface
* 🔒 Protected backend routes
* 🗄️ MongoDB database with Mongoose

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Context API
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* REST API

### Deployment

* Vercel — Frontend
* Bonto — Backend

## 🔐 Authentication

The application uses JWT authentication.

Public users can:

* View blogs
* View individual blog posts

Authenticated users can:

* Create blogs
* Delete their own blogs

The backend validates authentication tokens before allowing protected operations.

## 📡 API Endpoints

| Method | Endpoint           | Authentication | Description       |
| ------ | ------------------ | -------------- | ----------------- |
| GET    | `/api/blogs`       | Public         | Get all blogs     |
| GET    | `/api/blogs/:id`   | Public         | Get a single blog |
| POST   | `/api/blogs`       | Required       | Create a blog     |
| DELETE | `/api/blogs/:id`   | Required       | Delete own blog   |
| POST   | `/api/user/signup` | Public         | Create an account |
| POST   | `/api/user/login`  | Public         | Login             |

## 📂 Project Structure

```text
Blog-App/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── my-react-app/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── ...
│   └── package.json
│
└── README.md
```

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/AbidRehman994/Blog-App.git
cd Blog-App
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the backend

```bash
npm run dev
```

### 5. Start the frontend

Open another terminal:

```bash
cd my-react-app
npm install
npm start
```

The application should now be available locally.

## 🎯 What I Learned

Building this project helped me strengthen my understanding of:

* Building REST APIs with Express
* Connecting MongoDB with Mongoose
* JWT authentication
* Password hashing with bcrypt
* Protected API routes
* React Context API
* React Router
* Connecting a React frontend with an Express backend
* Deploying a full-stack application

## 🔮 Future Improvements

* Blog search
* Toast notifications
* Better loading and error states
* Pagination
* Rich text editor
* Image uploads
* Comments and likes

## 👨‍💻 Author

**Abid Rehman**

BS Computer Science
Full-Stack / MERN Developer

