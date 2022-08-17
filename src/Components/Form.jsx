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
    
        <div className="flex justify-center items-center h-screen bg-white p-4 ">
            <div className="max-w-2xl w-full bg-gray-100 border-1 p-10 rounded-3xl shadow-xl "> 
            <div className="max-w-2xl w-full bg-red-400 border-1 p-2 rounded-xl text-white text-center mb-5 text-3xl font-extrabold font-sans shadow-lg">

                <h1 >
               CYC Sign Up Form
                </h1>
                </div>
    <form>
        <div className=" flex space-y-3 flex-col md:flex-row md:space-y-0 md:gap-2">
        <div >
    <label htmlFor ="firstname" className="form-label" > First Name: </label>
    <input type ="text" 
    name="firstName" 
    id = "firstName" 
    placeholder="Mark" 
    className="input-style" 
    value={data.firstName}
    onChange = {handleChange}
    />

    
                </div>
    
                <div>
    <label htmlFor="middleName" className="form-label"> Middle Name: </label>
    <input type="text" 
    name = "middleName" 
    id="middleName" 
    placeholder="Valentine" 
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
    placeholder="Aikins" 
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
                <button 
                type="submit " 
                className=" text-xl font-extrabold font-sans max-w-2xl w-full bg-green-400 border-1 rounded-3xl px-4 py-2 
                text-center text-white mt-4 z-50 shadow-lg">Sign Up</button>


                </div>
                
            </form>
            </div>
    
    
        </div>
       
            
    
    );
    
    }
     export default Form;
    
