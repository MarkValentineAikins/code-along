import React from "react";
import {TrashIcon, PencilAltIcon} from "@heroicons/react/outline";

function TaskItem({task, handleDelete, handleCompleted, handleEdit}){



    return(
        <div className="flex  bg-gray-200 mt-10 border-2 justify-between items-center rounded-md border-gray-200">
                <div className="flex space-x-2">
                    <input type="checkbox" name="" id="" checked={task.completed} onChange ={()=>handleCompleted(task.id)}/>
                    <div className="flex-1" >{task.text}</div>
                </div>
                
                

              

                <div className="bg-blue-500 p-2 rounded-md">
                <button className="bg-red-800 p-2 rounded-md" onClick={() => handleDelete(task.id)}>
                <TrashIcon height={24} color="white"/>
              </button>
              <button className="bg-gray-800 p-2 rounded-md" onClick={() => handleEdit(task.id)}>
                <PencilAltIcon height={24} color="white"/>
              </button>
                    </div>
                </div>
    )
}

export default TaskItem;
