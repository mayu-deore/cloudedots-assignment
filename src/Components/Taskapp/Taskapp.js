import React, { useState } from 'react';
import TaskForm from '../Taskform/Taskform';
import TaskList from '../Tasklist/Tasklist'

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [users] = useState([
    { id: 1, name: 'User A' },
    { id: 2, name: 'User B' },
    { id: 3, name: 'User C' },
  ]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = ({ content, user }) => {
    const newTask = {
      id: tasks.length + 1,
      content: content,
      user: user,
    };
    setTasks([...tasks, newTask]);
  };

  console.log("tasks",tasks)

  const updateTask = ({ id, content, user }) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, content: content, user: user } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setEditingTask(null);
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  return (
    <div className='tas-app-div-main'>
      <h1>To-Do App</h1>
      <TaskForm
        onAddTask={addTask}
        onUpdateTask={updateTask}
        editingTask={editingTask}
        users={users}
      />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        users={users}
      />
    </div>
  );
}

export default TaskApp;
