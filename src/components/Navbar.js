import React from "react"
import "../style.css"
import logo from "../assets/logo.png"

export default function Navbar(){
    return(
        <nav className="bg-gray-50 shadow-lg fixed w-full z-50">
            <div className="flex justify-between px-24 py-3 items-center max-w-screen-2xl mx-auto">
                <div className="w-fit">
                    <img src={logo} alt="Logo" className="h-12"/>
                </div>
                <ul className="list-none text-base font-medium">
                    <li className="inline-block"><a class="hover:opacity-75" href="">Home</a></li>
                    <li className="inline-block ml-8"><a href="">About Us</a></li>
                    <li className="inline-block ml-8"><a href="">Blogs</a></li>
                    <li className="inline-block ml-8"><a href="">Contacts</a></li>    
                </ul>  
            </div>
        </nav>
    )
}