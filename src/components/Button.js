import React from "react"
import "../style.css"

export default function Button(props){
    return(
        <a href={props.href} className={`px-[14px] md:px-4 py-2 rounded drop-shadow-2xl hover:opacity-90 cursor-pointer w-fit min-w-fit ${props.className ? props.className : "btn-primary"}`}>{props.content}</a>
    )
}