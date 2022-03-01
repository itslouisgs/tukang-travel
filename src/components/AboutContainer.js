import React from "react"
import About from "../components/About"
import "../style.css"

export default function AboutContainer(){
    return(
        <div className="bg-gray-50 relative py-24 flex flex-col gap-24">
            <About 
              key = "1"
              title= {<h2 className="font-medium text-3xl">TukangTravel, your <span className="text-3xl text-orange-600">travel itinerary assistant</span></h2>} 
              desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              colReverse = "false"
            />
            <About 
              key = "2"
              title= {<h2 className="font-medium text-3xl"><span className="text-3xl text-orange-600">No more fear of</span> unfamiliar destinations</h2>} 
              desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              colReverse = "true"
            />
        </div>
    )
}