import React, { useEffect, useState } from "react";
import {v4 as uuid } from "uuid";
import TaskItem from "../Components/TaskItem";
//import bg from "../assets/images/bg.png";
import {useTaskContext} from "../context/TaskContext";



function TaskManager (){
   /*  const [tasks, setTasks] = useState (() => {
//get the task from the localstorage
const saveTasks=localStorage.getItem("tasks");
if (!saveTasks) return[];
// We use of the parse method
return JSON.parse(saveTasks);

    }); */
    const {tasks, setValue} = useTaskContext();

    const [input, setInput] = useState ("");

    const handleSubmit = (e) =>{
    
        e.preventDefault();

        if(input ==="") return;

        const newTask ={
            id: uuid(),
            text:input, 
            completed: false,
        };

        setValue([newTask, ...tasks]);
        setInput("");

        const handleDelete = (id) => {
            const newTasks = tasks.filter((tasks) => tasks.id !== id);
            setValue(newTasks);
        };

        const handleCompleted = (id) =>{
            const newTasks = tasks.map((task) =>{
                if (tasks.id === id) { 
                    return {...tasks, 
                    completed: !tasks.completed,
                };
                }
                return task;
            });
        
            };

            setValue(newTask);
            
        };

    const handleEdit = (id) =>{
        const newTasks = tasks.filter((task) =>{ if (task.id === id){
            setInput(task.text);
        } else {
            return false;
        }
        return task;
    });
    setValue (newTasks)
    } 

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);   
    
    

     return(

        <div className="bg-blue-400 h-screen max-w-2xl w-full flex justify-center items-center">
          
            {/* <img src={bg} alt="background" className=" absolute w-full h-full object-cover mix-blend-screen "/> */}

            <div className="max-w-xl rounded-xl bg-white py-10 px-5 max-h-96 overflow-hidden shadow-lg" >
            <div className="flex justify-center mb-10 bg-blue-700 rounded-2xl py-3 shadow-md" >
                <h1 className="text-white text-center text-lg font-extrabold ">To-Do-List</h1></div>
                <form className="flex space-x-2 w-[30rem] shadow-md" onSubmit={handleSubmit}>

               
                    <input type="text" className="border-blue-400 border-2 px-2 py-3 rounded-md 
                    p-2 outline-none w-10/12" placeholder="enter a list " onChange={(e) =>setInput(e.target.value)} 
                    value={input}/> 
                <button  disabled ={input ===""} type="add" className="bg-blue-600 px-6 py-4 text-lg rounded-md text-center font-serif text-white shadow-md">Add</button>
                </form>
                <div className="space-y-2 overflow-y-auto h-56">
                 {
                    tasks.map((task) =>(<TaskItem 
                        key={task.id} 
                        task = {task} 
                        handleDelete = {handleDelete} 
                        handleCompleted = {handleCompleted}
                        handleEdit = {handleEdit}
                        />))

                 }
                        
                
                    
                </div>
            </div>
            
                
        
        </div>
    );  
       
   }
export default TaskManager;

