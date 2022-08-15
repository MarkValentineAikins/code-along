import React from "react";
import {TrashIcon} from "@heroicons/react/outline";

function TaskItem({task, handleDelete}){


    return(
        <div className="flex  bg-gray-200 mt-10 border-2 rounded-md border-gray-300">
                <div className="flex-1 p-2" >{task}</div>
              

                <div className="bg-blue-500 p-2 rounded-md">
                <button className="bg-blue-800 p-2 rounded-md" onClick={() => handleDelete(task)}>
                <TrashIcon height={24} color="white"/>
              </button>
                    </div>
                </div>
    )
}

export default TaskItem;
