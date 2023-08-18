// import React, { useState, useEffect } from 'react';

// const TaskForm = ({ onAddTask, onUpdateTask, editingTask, users }) => {
//   const [task, setTask] = useState('');
//   const [selectedUser, setSelectedUser] = useState('');

//   useEffect(() => {
//     if (editingTask) {
//       setTask(editingTask.content);
//       setSelectedUser(editingTask.user);
//     }
//   }, [editingTask]);

//   const handleTaskChange = (event) => {
//     setTask(event.target.value);
//   };

//   const handleUserChange = (event) => {
//     setSelectedUser(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (task.trim() !== '' && selectedUser) {
//       if (editingTask) {
//         onUpdateTask({ id: editingTask.id, content: task, user: selectedUser });
//       } else {
//         onAddTask({ content: task, user: selectedUser });
//       }
//       setTask('');
//       setSelectedUser('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{gap:"10px", flexWrap:"wrap"}}>
//       <textarea
//       className='input-task'
//       style={{ width: "100%", height: "100px", fontSize: "25px" }}
//         type="text"
//         placeholder="Enter task"
//         value={task}
//         onChange={handleTaskChange}
//       />
//       <select value={selectedUser} onChange={handleUserChange} className='assignto_div'>
//         <option value="">Assign To</option>
//         {users.map((user) => (
//           <option key={user.id} value={user.name}>
//             {user.name}
//           </option>
//         ))}
//       </select>
//       <button className='add-task' style={{width:"150px", padding:"10px", }} type="submit">{editingTask ? 'Update Task' : 'Add New Task'}</button>
//     </form>
//   );
// };

// export default TaskForm;



import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon

const TaskForm = ({ onAddTask, onUpdateTask, editingTask, users }) => {
  const [task, setTask] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.content);
      setSelectedUser(editingTask.user);
    }
  }, [editingTask]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '' && selectedUser) {
      if (editingTask) {
        onUpdateTask({ id: editingTask.id, content: task, user: selectedUser });
      } else {
        onAddTask({ content: task, user: selectedUser });
      }
      setTask('');
      setSelectedUser('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ gap: "25px", flexWrap: "wrap", display:"flex", alignItems:"center"}}>
      <div >
        <textarea
          className='input-task'
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleTaskChange}
        />
      </div>
      <select value={selectedUser} onChange={handleUserChange} className='assignto_div'>
        <option value="">Assign To</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      <button className='add-task' type="submit">
        {editingTask ? 'Update Task' : <FaPlus size={15} />}
      </button>
    </form>
  );
};

export default TaskForm;

