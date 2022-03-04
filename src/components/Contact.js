import React from "react"
import "../style.css"
import Button from "./Button"

export default function Contact(){
    return (
        <div id="Contact" className="bg-gray-50">
            <div className="wrapper pt-12 sl:pt-16 pb-24 px-1 xs:px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
                <div className="contact-wrapper rounded-2xl p-6 xs:p-8 md:p-12 xl:p-16 flex flex-col gap-8 md:gap-12 shadow-2xl">
                    <h2 className=" text-white w-full max-w-lg text-shadow h2">Not sure where to start? Then, let's explore together with us!</h2>
                    <Button content="Explore with us"/>
                </div>
            </div>
        </div>
    )
}