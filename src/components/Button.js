import React from "react"
import "../style.css"

export default function Button(props){
    return(
        <a href={props.href} className={`btn ${props.className ? props.className : "btn-primary"}`}>{props.content}</a>
    )
}