import React, {useState, useEffect} from 'react';
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; // If there is data, parse, otherwise - empty array
  });
  const [newTask, setNewTask] = useState(""); // Add a new task

  // Loading a shuffle array from the Local Storage on bootup 
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    console.log(savedTasks);
    if(savedTasks) { 
      try{
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Error loading data from Local Storage", error);
      }
    }
  }, []);

  // Saving tasks to Local Storage each time the task array is changed
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function for adding a new task
  const addTask = () => {
    if(newTask.trim() === "") return; // Checking a void string
    const task = {
      id: Date.now(), // A unique identifier
      text: newTask,
      completed: false, // Checking the creation of a task
    };
    setTasks((prevTasks) => [...prevTasks, task]); // Add a task to the list
    setNewTask(""); // Clearing the field new task
  }

  // Update task's status (completed/uncompleted)
  const toggleTask = (id) => {
      setTasks(tasks.map((task) => 
        // Run the array, if the id is equal, change the state. If we don't find it, we return just a task
        task.id === id ? {...task, completed: !task.completed } : task
      ));
  };

  // Delete a task
  const deleteTask = (id) => {
    // A task is excluded from the new array if its id matches the passed id
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="caption-container">To-Do List</h1>
      {/* Input field and add button */}
      <div>
        <input
          className="input-container"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="input-button" onClick={addTask}> Create Task </button>
      </div>
      {/* Component for displaying the task list */}
      <TodoList tasks = {tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
