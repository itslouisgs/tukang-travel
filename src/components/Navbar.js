import React from "react"
import "../style.css"
import logo from "../assets/logo.png"

export default function Navbar(){
    const toggleNavbar = (e)=>{
        e.preventDefault()
        const hamburger = document.getElementById("hamburger")
        const hiddenNav = document.getElementById("hidden-nav")

        hamburger.classList.toggle("expand")
        if (hamburger.classList.contains("expand"))
            hiddenNav.classList.replace("max-h-0", "max-h-48")
        else
            hiddenNav.classList.replace("max-h-48", "max-h-0")
    }

    return(
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="wrapper flex justify-between py-3 items-center">
                <div className="w-fit">
                    <img src={logo} alt="Logo" className="h-10 md:h-12"/>
                </div>
                <ul className="hidden md:block list-none">
                    <li className="inline-block"><a href="">Home</a></li>
                    <li className="inline-block ml-8"><a href="#About">About Us</a></li>
                    <li className="inline-block ml-8"><a href="">Blogs</a></li>
                    <li className="inline-block ml-8"><a href="#Contact">Contacts</a></li>    
                </ul>  
                <div id="hamburger" className="md:hidden block w-6 h-4 elative rotate-0  transform -top-[2.5px] rounded-full hover:opacity-80 cursor-pointer" onClick={toggleNavbar}>
                    <span className="top-0"></span>
                    <span className="top-2"></span>
                    <span className="top-4"></span>
                </div>
            </div>
            <div id="hidden-nav" className="wrapper transition-[max-height] duration-500 ease-in-out overflow-hidden max-h-0">
                <ul className="list-none pt-4 pb-6">
                    <li><a href="">Home</a></li>
                    <li><a href="#About">About Us</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="#Contact">Contacts</a></li>    
                </ul>  
            </div>
        </nav>
    )
}