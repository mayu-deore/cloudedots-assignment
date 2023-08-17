import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const TaskList = ({ tasks, onDeleteTask, onEditTask, users }) => {
  return (
    <div>
      <div >
      {tasks.map((task) => (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap", gap:"10px", marginBottom:"10px"}}>
        <div className='tasklist-div' key={task.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between", width:"100%"}}    >
          <h3 style={{margin:"0px"}}>
          {task.content} 
          </h3>
          <p style={{margin:"0px" , fontSize:"13px", color:"gray"}}>
           {task.user}
          </p>
        </div>
      <div style={{display:"flex", gap:"10px"}}>
      <button onClick={() => onEditTask(task)} className='edit-button'><AiFillEdit style={{fill:"white",height:"25px", width:"25px"}}/></button>
          <button className='delet-button' onClick={() => onDeleteTask(task.id)} ><MdDelete style={{fill:"white",height:"25px", width:"25px"}}/></button>
      </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default TaskList;
