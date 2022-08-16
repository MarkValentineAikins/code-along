import React, {useState} from "react";
function Form(){
    const [data, setData] = useState({

        firstName:"",
        middleName:"",
        lastName: "",
        gender: "",
        dob: "",
        phoneNumber:"",
        email: "",

    }
        

    );

    const handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value;
        

       setData({ ...data,  [name]: value}); 

    } 
    ;
console.log(data);
    return(
    
        <div className="flex justify-center items-center h-screen bg-gray-200 p-4 ">
            <div className="max-w-2xl w-full bg-white border-4 p-10 rounded-2xl "> 
            <div className="max-w-2xl w-full bg-blue-400 border-1 p-2 rounded-3xl text-white text-center mb-5 text-3xl font-extrabold font-sans">

                <h1 >
                Registration
                </h1>
                </div>
    <form>
        <div className=" flex space-y-3 flex-col md:flex-row md:space-y-0 md:gap-2">
        <div >
    <label htmlFor ="firstname" className="form-label" > First Name: </label>
    <input type ="text" 
    name="firstName" 
    id = "firstName" 
    placeholder="Enter your First Name" className="input-style" 
    value={data.firstName}
    onChange = {handleChange}
    />

    
                </div>
    
                <div>
    <label htmlFor="middleName" className="form-label"> Middle Name: </label>
    <input type="text" 
    name = "middleName" 
    id="middleName" 
    placeholder="Enter your middle name or other name" 
    className="input-style" 
    value={data.middleName}
    onChange = {handleChange}
    />

    
                </div>
                <div>
    <label htmlFor="lastName" className="form-label"> Last Name: </label>
    <input type="text" 
    name = "lastName" 
    id="lastName" 
    placeholder="Enter your last" 
    className="input-style"
    value={data.lastName}
    onChange = {handleChange}
    />
    
                </div>
    
        </div>
               
    
                <div>
    <label className="form-label"> Gender: </label>
    <label htmlFor="male" className="form-label">
    <input type="radio" 
    name = "gender" 
    value="male" 
    id="male"
    onChange = {handleChange}
    /> {""}Male

    </label>
    
    <label htmlFor="female"className="form-label">
    <input type="radio" 
    name = "gender" 
    value="female" 
    id="female"
    
    onChange = {handleChange}
    
    />{""} Female

    </label>
    
                </div>
                <div>
    <label htmlFor="dob" className="form-label"> Date of Birth: </label>
    <input type="date" 
    name = "dob" id="dob" 
    placeholder="select your date of birth" 
    className="input-style"
    value={data.dob}
    onChange = {handleChange} 
    />
    
                </div>
                <div>
    <label htmlFor="phoneNumber" className="form-label"> Phone Number: </label>
    <input type="telephone" 
    name = "phoneNumber" 
    id="phoneNumber" 
    placeholder="###-####-###" 
    className="input-style" 
    value={data.phoneNumber}
    onChange = {handleChange}
    />

                </div>
    
                <div>
    <label htmlFor="email"className="form-label">  Email: </label>
    <input type="Email" 
    name = "email" 
    id="email" 
    placeholder="react@example.com" 
    className="input-style"
    value={data.email}
    onChange = {handleChange}
    />
    
                </div>
    
                <div>
                <button type="submit " className="rounded-md bg-red-100 px-4 py-2 text-center text-gray-500 mt-2 ">Sign Up</button>
                </div>
                
            </form>
            </div>
    
    
        </div>
       
            
    
    );
    
    }
     export default Form;
    
