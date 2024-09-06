

# School Management API

Welcome to the School Management API project! This API provides a robust and scalable backend system for managing students, courses, instructors, and grades in a school or educational institution. 

## Features

- **Student Management**: Add, update, retrieve, and delete student records.
- **Course Management**: Manage course information, including course details and instructor assigned.
- **Instructor Management**: Maintain instructor profiles and link them to courses.
- **Grade Management**: Track and update student grades for various courses.  (Inprogres)

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB using Mongoose
- **Version Control**: Git

## Installation

To get started with the School Management API, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Paschal-web3/Student_Management_API.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd Student_Management_API
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your environment variables. Example:
   
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

5. **Start the Server**

   ```bash
   npm start
   ```

## API Endpoints

### Students

- **Create a Student**
  - `POST /students`
  - Request Body: `{ "FullName": "John Doe", "Email": "john@example.com", ... }`

- **Get All Students**
  - `GET /students`

- **Get Student by ID**
  - `GET /students/:id`

- **Update a Student**
  - `PUT /students/:id`
  - Request Body: `{ "FullName": "Jane Doe", ... }`

- **Delete a Student**
  - `DELETE /students/:id`

- **Delete All Students**
  - `DELETE /students`

### Courses

- **Create a Course**
  - `POST /courses`
  - Request Body: `{ "CourseName": "Mathematics", "CourseCode": "MATH101", ... }`

- **Get All Courses**
  - `GET /courses`

- **Get Course by ID**
  - `GET /courses/:id`

- **Update a Course**
  - `PUT /courses/:id`
  - Request Body: `{ "CourseName": "Advanced Mathematics", ... }`

- **Delete a Course**
  - `DELETE /courses/:id`

### Instructors

- **Create an Instructor**
  - `POST /instructors`
  - Request Body: `{ "Name": "Dr. Smith", "Email": "smith@example.com", ... }`

- **Get All Instructors**
  - `GET /instructors`

- **Get Instructor by ID**
  - `GET /instructors/:id`

- **Update an Instructor**
  - `PUT /instructors/:id`
  - Request Body: `{ "Name": "Dr. John Smith", ... }`

- **Delete an Instructor**
  - `DELETE /instructors/:id`

### Grades

- **Assign a Grade**
  - `POST /grades`
  - Request Body: `{ "studentId": "id", "courseId": "id", "score": "95" }`

- **Get Grades for a Student**
  - `GET /grades/:studentId`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m "Add feature: your feature description"
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request**



---

Feel free to adjust the sections according to your project's specifics and add any additional information you think is relevant.