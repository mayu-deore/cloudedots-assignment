import React, { useState } from 'react';
import TaskForm from '../Taskform/Taskform';
import TaskList from '../Tasklist/Tasklist';

function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskContent) => {
    const newTask = {
      id: tasks.length + 1,
      content: taskContent,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>To-Do App</h1>
      {/* <TaskForm onAddTask={addTask} /> */}
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default TaskApp;
