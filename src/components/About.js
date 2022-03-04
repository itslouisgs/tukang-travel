import React from "react"
import "../style.css"
import pic from "../assets/pic.jpg"

export default function About(props){
    const flexDirection = props.colReverse === "true" ? "sl:flex-row-reverse" : "sl:flex-row"

    return(
        <div className="wrapper">
            <div className={`flex justify-between gap-12 lg:gap-18 xl:gap-24 items-center flex-col-reverse ${flexDirection}`}>
                <div className="max-w-xl sl:max-w-none flex flex-col gap-8 sl:w-3/5">
                    <div className="text-center sl:text-left">{props.title}</div>
                    <p>{props.desc}</p>
                </div>
                <img className="rounded-2xl w-full max-w-md sl:w-2/5" src={pic} alt=""></img>
            </div>
        </div>
    )
}