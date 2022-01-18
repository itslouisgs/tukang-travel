import React from "react"
import "./style.css"
import logo from "./assets/logo.png"

export default function Navbar(){
    return(
        <nav className="bg-gray-50 shadow-lg ">
            <div className="flex justify-between px-24 py-3 items-center max-w-screen-2xl mx-auto">
                <div className="w-fit">
                    <img src={logo} alt="Logo" className="h-12"/>
                </div>
                <ul className="list-none text-base font-semibold">
                    <li className="inline-block">Home</li>
                    <li className="inline-block ml-8">About Us</li>
                    <li className="inline-block ml-8">Blogs</li>
                    <li className="inline-block ml-8">Contacts</li>    
                </ul>  
            </div>
        </nav>
    )
}