import React from "react"
import logo from "../assets/logo.png"
import appStoreBadge from "../assets/app-store-badge.png"
import googlePlayBadge from "../assets/google-play-badge.png"

export default function Footer(){
    const boxShadow = {
        boxShadow: '0px -5px 10px rgba(0, 0, 0, 0.1)'
    }

    return (
        <div className="px-24" style={boxShadow}>
            <div className="flex items-center justify-between max-w-screen-2xl mx-auto py-8">
                <div className="flex flex-col gap-6">
                    <img className="h-16 w-fit" src={logo} alt="TukangTravel"/>
                    <div className="flex gap-24">
                        <ul>
                            <li><a className="leading-7" href="">Home</a></li>
                            <li><a className="leading-7" href="">About Us</a></li>
                            <li><a className="leading-7" href="">Join Us</a></li>
                            <li><a className="leading-7" href="">Blogs</a></li>
                        </ul>
                        <ul>
                            <li><a className="leading-7" href="">Privacy Policy</a></li>
                            <li><a className="leading-7" href="">Terms of Service</a></li>
                            <li><a className="leading-7" href="">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold">Download TukangTravel Now</h3>
                    <div className="flex gap-6">
                        <a className="hover:opacity-80" href=""><img className="h-10" src={appStoreBadge} alt="Download on the App Store"/>
                        </a>
                        <a className="hover:opacity-80" href=""><img className="h-10" src={googlePlayBadge} alt="Get it on Google Play"/>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex items-center justify-between pt-4 pb-6">
                <div className="flex gap-1">
                    <a href=""><i class="text-xl text-gray-800 ri-facebook-box-fill"></i></a>
                    <a href=""><i class="text-xl text-gray-800 ri-twitter-fill"></i></a>
                    <a href=""><i class="text-xl text-gray-800 ri-youtube-fill"></i></a>
                    <a href=""><i class="text-xl text-gray-800 ri-instagram-line"></i></a>
                    <a href=""><i class="text-xl text-gray-800 ri-linkedin-box-fill"></i></a>
                </div>
                <div>© 2022 TukangTravel</div>
            </div>
        </div>
    )
}