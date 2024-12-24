# To-Do List Application

This is a simple application for creating and managing tasks using React. It allows you to add, delete tasks, and toggle their status (completed/uncompleted). All tasks are saved in `localStorage` so that they are not lost when the page reloads.

## Functionality

- Adding new tasks
- Switching task status (completed/uncompleted)
- Deleting tasks
- Saving tasks to `localStorage` so that they are saved after page reloading

## Technology Stack

| Стек технологий | Описание                             |
|-----------------|--------------------------------------|
| React           | Библиотека для создания интерфейсов. |
| JavaScript      | Язык программирования для фронтенда.|
| CSS             | Технология для стилизации веб-страниц.|

## Installation and startup

1. Clone the repository:

   ```bash
   git clone https://https://github.com/alexkrnnk/react-todo-list.git

2. Navigate to the project catalog:

    ```bash
    cd react-todo-list

3. Establish dependencies:

    ```bash
    npm install

4. Launch the application:

    ```bash
    npm start

The application will be available at http://localhost:3000.

## Notes

- This application uses React Hooks (useState, useEffect) to manage the state and load tasks from localStorage.
- You can extend the functionality by adding features such as task filtering, editing, etc.
