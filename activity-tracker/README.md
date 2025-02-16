# Activity Tracker API

## 📌 Overview
This is a Node.js + Express API for tracking user activities with MongoDB.

## 🚀 Features
- Create, retrieve, and complete activities.
- JWT-based authentication.
- MongoDB database (auto-creates collection when inserting data).

## 🛠️ Installation & Setup
### **1. Clone the Repository**
```sh
git clone <repo-url>
cd <project-folder>
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Setup Environment Variables**
Create a `.env` file and add:
```env
MONGO_URI=mongodb://localhost:27017/activitydb
JWT_SECRET=your_secret_key
```

### **4. Start the Server**
```sh
npm start
```
The API will be available at `http://localhost:3000/api/activities`

##  API Documentation
Import the **Postman collection** from the `postman_collection.json` file in the repo.

##  Endpoints
### 🔹 Create an Activity
```
POST /api/activities
```
**Request Body:**
```json
{
  "title": "Go to Gym",
  "description": "1-hour workout",
  "dayNumber": 17
}
```

### 🔹 Get All Activities
```
GET /api/activities
```

### 🔹 Complete an Activity
```
PUT /api/activities/:id/complete
```

