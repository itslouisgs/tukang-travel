import React from "react"
import "../style.css"

export default function Button(props){
    const background = props.background ? `bg-` + props.background : "bg-orange-600"
    const textColor = props.textColor ? `text-`+ props.textColor : "text-white"

    return(
        <div className={`px-4 py-2 rounded drop-shadow-2xl hover:opacity-90 cursor-pointer w-fit ${textColor} ${background}`}>{props.content ? props.content : "Button"} </div>
    )
}