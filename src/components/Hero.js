import React from "react"
import "../style.css"
import Button from "./Button"

export default function Hero(){
    return(
        <div className="hero h-screen">
            <div className="flex justify-center h-full max-w-screen-2xl">
                <div className="my-auto flex flex-col gap-8">
                    <h1 className="text-5xl font-semibold text-white text-shadow text-center">Together we explore the unexplored</h1>
                    <div className="flex justify-center mx-auto gap-6 font-medium">
                        <Button textColor="black" background="white" content="Learn more" />
                        <Button content="Explore with us" />
                    </div>
                </div>
            </div>
        </div>
    )
}