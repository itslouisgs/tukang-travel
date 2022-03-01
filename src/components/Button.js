import React from "react"

export default function Button(props){
    return(
        <div className={`px-4 py-2 rounded text-${props.textColor ? props.textColor : "white"} bg-${props.background ? props.background : "orange-600"} drop-shadow-2xl hover:opacity-90 cursor-pointer w-fit`}>{props.content ? props.content : "Button"}</div>
    )
}