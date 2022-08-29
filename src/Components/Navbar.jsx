import React from "react";
import logo from "../assets/image/logo.png";

import NavItem from "./NavItem";

const Links = [

    {
       label: "Home",
       to: "/"
    },

    {
        label: "About",
        to: "/About"
     },

     {
        label: "Product",
        to: "/product-list"
     },

     {
        label: "Task Manager",
        to: "/Task-Manager"
     },

     {
        label: "Contact",
        to: "/Contact"
     },
    
]


function Navbar(){

    return (
    <nav className="flex justify-between py-3 px-20 shadow-md m-1 bg-white-100">
        <img src = {logo} alt="logo" className="px-3 py-3 rounded-md object-fill h-20 w-30"/>
        <ul className=" hidden gap-5 md:flex  px-2 py-4 m-2 text-blue" >

        {
            Links.map((link,index) => (
                <NavItem key ={index}label ={link.label} to={link.to}/>
            ))
        }
        </ul>
    </nav>

    )
}

export default Navbar;
