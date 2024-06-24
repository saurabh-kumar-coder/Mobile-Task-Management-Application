### Coding Exercise: Mobile Task Management Application

### Objective:

    Create a Task Management Mobile Application using Node.js for the backend and React Native for the frontend. This exercise will test the candidate's ability to design and implement a full-stack application, including RESTful API creation, state management in React Native, and integration between the frontend and backend.

### Requirements:

    || Backend (Node.js):

        Setup: Initialize a Node.js project with Express.js.
        Database: Use an in-memory database like SQLite or a NoSQL database like MongoDB (using Mongoose).
        API Endpoints:
            - GET /tasks: Retrieve all tasks.
            - POST /tasks: Create a new task.
            - PUT /tasks/: Update an existing task.
            - DELETE /tasks/: Delete a task.
        Task Model: Each task should have the following fields:
            - id: Unique identifier (auto-generated).
            - title: String, required.
            - description: String, optional.
            - completed: Boolean, default to false.
            - createdAt: Date, auto-generated.
            - updatedAt: Date, auto-generated/updated.

    ||  Frontend (React Native):

        Setup: Initialize a React Native project (using Expo or React Native CLI).
        Components:
            TaskList: Display all tasks with options to edit and delete.
            TaskForm: Form to create a new task or edit an existing task.
            TaskItem: Display individual task details with edit and delete options.
        Features:
            Fetch tasks from the backend and display them.
            Add a new task using a form.
            Edit an existing task.
            Delete a task.
            Mark a task as completed/uncompleted.
        -- Implement offline storage to handle cases where the device is not connected to the internet (using AsyncStorage or another local storage solution).
        -- State Management: Use React hooks (useState, useEffect) for managing component state and side effects. Optionally, use Context API or a state management library like Redux for global state management.
        -- Navigation: Implement navigation between screens using React Navigation.

---

running frontend : npm start
running backend : npm run start