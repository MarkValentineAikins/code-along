import React from "react";
import logo from "../assets/image/logo.png";
import NavItem from "./NavItem";

function Navbar(){

    return (
    <nav className="flex justify-between py-3 px-20 shadow-md"s>
        <img src = {logo} alt=""/>
        <ul className="flex gap-2">
        <NavItem menu="Home"/>
        <NavItem menu="About Us"/>
        <NavItem menu="Service"/>
        <NavItem menu="Product"/>
        <NavItem menu="Contact"/>
        </ul>
    </nav>

    )
}

export default Navbar;
