Real-Time Collaborative Note-Taking Application
Overview
This application is a real-time collaborative note-taking tool built using the MERN stack (MongoDB, Express, React, Node.js) with PostgreSQL as the database. It allows multiple users to work together on notes in real-time, with changes instantly visible to all collaborators.

Features
User Authentication: Users can securely register, log in, and manage their sessions using JSON Web Tokens (JWT).
Real-Time Collaboration: Users can edit notes simultaneously, with changes automatically synced across all active sessions.
Note Management: Users have the ability to create, edit, delete, and share notes with others. Sharing can be restricted to read-only or write access.
Socket.IO Integration: The application uses Socket.IO to handle real-time updates and collaboration on notes.
How the Application Works

1. Database Setup
   The application uses PostgreSQL as the database, which stores user information, notes, and access permissions.
   You will need to create a PostgreSQL database and configure it in the application’s environment file.
2. Backend (Node.js)
   The backend is built using Express and connects to the PostgreSQL database.
   RESTful API endpoints are provided for user authentication, note management, and real-time collaboration.
   CORS is enabled to allow the frontend to communicate with the backend.
   Socket.IO is used to manage real-time communication between users for collaborative editing.
3. Frontend (React)
   The frontend is built using React, providing a responsive and interactive user interface.
   React Router is used for navigation between different pages, such as login and the notes page.
   Users can log in and see a list of their notes, which they can select to view or edit.
   When a note is edited, the changes are immediately broadcast to other users who have access to the same note.
4. Real-Time Collaboration
   When a user starts editing a note, their changes are sent to the backend via Socket.IO.
   The backend then broadcasts these changes to all other users currently viewing the same note.
   This ensures that everyone sees the most up-to-date version of the note in real-time.
5. Environment Configuration
   The application requires configuration details to be stored in a .env file, such as database credentials and JWT secrets.
   This file is essential for the application to connect to the database and manage user sessions securely.
6. Running the Application
   To run the backend server, navigate to the server directory and start the server.
   To run the frontend, navigate to the client directory and start the React application.
   The application will be accessible through a web browser, where users can register, log in, and start collaborating on notes.

Getting Started
Prerequisites
Node.js and npm installed on your machine.
PostgreSQL installed and configured with a database for the application.
A basic understanding of Node.js, React, and PostgreSQL.
Installation
Clone the repository to your local machine.
Set up your PostgreSQL database and create necessary tables.
Configure the .env file with your database credentials and other required settings.
Install dependencies for both the backend and frontend.
Run the backend and frontend servers to start the application.
