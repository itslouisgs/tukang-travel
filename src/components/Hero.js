import React from "react"
import "../style.css"
import Button from "./Button"

export default function Hero(){
    return(
        <div className="hero h-screen">
            <div className="wrapper flex justify-center h-full pt-16 md:pt-18">
                <div className="my-auto flex flex-col gap-8">
                    <h1 className=" text-white text-shadow text-center">Together we explore the unexplored</h1>
                    <div className="flex justify-center mx-auto gap-3 md:gap-6 flex-wrap">
                        <Button href="#About" className="btn-secondary" content="Learn more" />
                        <Button href="#" className="btn-primary" content="Explore with us" />
                    </div>
                </div>
            </div>
        </div>
    )
}