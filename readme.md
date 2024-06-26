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

---

ABOUT:
Performing a CRUD operation using react native as frontend, Node js as a Backend and MongoDb as a database.

node -v : v18.20.3
npm -v : v10.7.0
Project Structure: 1. Backend (server side scripting) 2. Frontend (client side scripting)

1. Backend:
   - Configure the .env file. Enter your configuration about mongodb server and port in which you want to run the project.
   - models: taskSchema with perperties such as title, description, completed
   - routes: assigning the request type and the path for each API.
   - controllers: controllers created as follows
     -> addTaskController : add a task
     -> getTaskController : get tasks
     -> updateCompleted : updated if task is completed or not
     -> getParticularTask : getting a single task
     -> updateParticularTask : updating data in a particular task
     -> deleteController : deleting a task.
   - config: configuring Database related information.
2. Frontend:
   - dependencies :
     -> axios
     -> @react-native-community/async-storage
     -> @rneui/themed
     -> etc..
   - mycomponents :
     -> CreateNewTask
     -> DeleteTask
     -> GetAllTask
     -> UpdateTaskData
   - mypages
     -> TaskList

----------------------- IMAGES -------------------

### Home Screen : getting all the task list
![1_TaskList](https://github.com/saurabh-kumar-coder/Mobile-Task-Management-Application/assets/26488830/f35438f1-2165-408b-8bb1-096a2ed874b5)

### Creating a task
![2_CreateTask](https://github.com/saurabh-kumar-coder/Mobile-Task-Management-Application/assets/26488830/9f1d6624-3b17-46dd-9c4a-5f5bb14e0aad)

### Getting a single task
![3_GettingSingleTask](https://github.com/saurabh-kumar-coder/Mobile-Task-Management-Application/assets/26488830/c6e131e7-5b27-478b-bc7f-b0ef2b458ed7)

### Updating a particular task
![4_UpdateScreen](https://github.com/saurabh-kumar-coder/Mobile-Task-Management-Application/assets/26488830/a43659ec-fa5a-46ec-a76f-2a67c00a2a54)

### Marking a task as complete
![5_MarkCompleted](https://github.com/saurabh-kumar-coder/Mobile-Task-Management-Application/assets/26488830/604be85b-ccc1-4049-9eb3-e20341822a3f)

### Deleting as task : (First record is deleted.)
![6_TaskHelloWorldDELETED](https://github.com/saurabh-kumar-coder/Mobile-Task-Management-Application/assets/26488830/5c1f56b5-cbee-49fa-a68d-56d2632c96d5)
