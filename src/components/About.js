import React from "react"
import "../style.css"
import pic from "../assets/pic.png"

export default function About(props){
    
    const flexDirection = props.colReverse === "true" ? "flex justify-between gap-24 items-center flex-row-reverse" : "flex justify-between gap-24 items-center"

    return(
        <div className="max-w-screen-2xl px-24">
            <div className={flexDirection}>
                <div className="flex flex-col gap-8">
                    <h2 className="font-medium text-3xl">{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
                <img className="rounded-2xl" src={pic} alt=""></img>
            </div>
        </div>
    )
}