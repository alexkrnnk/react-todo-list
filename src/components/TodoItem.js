import React from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
    return (
        <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <span className="todo-text">{task.text} </span>
            <button className="complete-btn"
                onClick={() => toggleTask(task.id)}>
                {task.completed ? '✔' : ''}
            </button>

            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </li>
    );
}

export default TodoItem;