import React, {useState} from "react";
import logo from "../assets/image/logo.png";
function PasswordReset(){
    const [data, setData] = useState({

        oldpasswrd:"",
        newpassword:"",
        passconfirm: "",
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
    <div className="flex flex-col md:flex-row">
        <div className="max-w-3xl w-full space-x-3 snap-center space-y-1 flex justify-center items-center shadow-sm bg-gradient-to-t from-blue-400 to-gray-200 p-4">
        
        <img src ={logo} alt = "logo" className="px-3 py-3 rounded-3xl object-fill h-20 w-20"/>

<ul className="max-w-3xl w-full flex gap-4  px-2 py-2 m-2 text-blue">
    

<li className="rounded-md bg-red-300 px-4 py-2"><a href="#">Home</a></li>
<li className="rounded-md bg-green-200 px-4 py-2"><a href ="#">About</a></li>
<li className="rounded-md bg-blue-200 px-4 py-2"><a href ="#">Service</a></li>
<li className="rounded-md bg-gray-300 px-4 py-2"><a href ="#">Contact</a></li>
</ul>
</div>
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-4 ">
            
            
            <div className="max-w-2xl w-full bg-gray-100 border-1 p-10 rounded-xl shadow-xl "> 
            <div className="max-w-2xl w-full bg-red-400 border-1 p-2 rounded-xl text-white text-center mb-5 text-3xl font-extrabold font-sans shadow-lg">


                <h1 >
               Password Reset
                </h1>
                </div>

        <div className="shadow-md px-4 py-3 bg-white rounded-lg mb-4 max-w-2xl w-full">
            <h4 className="block text-lg text-blue-400 z-50 font-extrabold text-center"> Password Reset Guide</h4>
            <p> Password should include characters (alphanumeric + symbols) that are not easy to guess.</p>
            
            <p>
                Password should include the following: 

            </p>
            <ul className="list-disc  p-4 font-mono font-style: italic font-thin">
                    <li>Numbers Eg. 0-9</li>
                    <li>Alphabets Eg. A-Z</li>
                    <li>symbols Eg. # $ & _ - + @ </li>
                    <li>At least one Uppercase</li>
                    <li>At least one lowercase</li>
                    <li>Not less than eight characters</li>
                </ul>
        </div>
    <form>
        <div className=" flex space-y-3 flex-col md:flex-row md:space-y-0 md:gap-2">
        <div >
    <label htmlFor ="oldPassword" className="form-label" > Old Password: </label>
    <input type ="Password" 
    name="oldpasswrd" 
    id = "oldpasswrd" 
    placeholder="Enter your old Password" 
    className="input-style" 
    value={data.oldpasswrd}
    onChange = {handleChange}
    />

    
                </div>
    
                <div>
    <label htmlFor="newpassword" className="form-label"> New Password: </label>
    <input type="Password" 
    name = "newpassword" 
    id="newpassword" 
    placeholder="Enter a new password" 
    className="input-style" 
    value={data.newpassword}
    onChange = {handleChange}
    />

    
                </div>
                <div>
    <label htmlFor="passconfirm" className="form-label"> Confirm Password: </label>
    <input type="Password" 
    name = "passconfirm" 
    id="passconfirm" 
    placeholder="re-enter new password" 
    className="input-style"
    value={data.passconfirm}
    onChange = {handleChange}
    />
    
                </div>
    
        </div> 
    
                <div>
                <button 
                type="submit " 
                className=" text-xl font-extrabold font-sans max-w-2xl w-full bg-green-400 border-1 rounded-3xl px-4 py-2 
                text-center text-white mt-4 z-50 shadow-lg">Submit</button>


                </div>
                
            </form>
            </div>
    
    
        </div>
        </div>
            
    
    );
    
    }
     export default PasswordReset;
    

