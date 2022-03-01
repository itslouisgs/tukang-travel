import React from "react"
import "../style.css"
import Button from "./Button"

export default function Contact(){
    return (
        <div className="bg-gray-50">
            <div className="max-w-screen-2xl px-24 py-16">
                <div className="contact-wrapper rounded-2xl p-16 flex flex-col gap-12 shadow-2xl">
                    <h2 className="text-3xl font-medium text-white w-3/5 text-shadow">Not sure where to start? Let's explore together with us!</h2>
                    <div className="flex gap-6">
                        <Button content="Explore with us"/>
                    </div>
                </div>
            </div>
        </div>
    )
}