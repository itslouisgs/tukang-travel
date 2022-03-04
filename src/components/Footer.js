import React from "react"
import logo from "../assets/logo.png"
import appStoreBadge from "../assets/app-store-badge.png"
import googlePlayBadge from "../assets/google-play-badge.png"

export default function Footer(){
    return (
        <div className="border-t-[0.25px] border-[#999999925]">
            <div className="wrapper">
                {/* Top section */}
                <div className="flex items-center justify-between py-8 flex-col sm:flex-row gap-6 sm:gap-0">
                    <div className="flex flex-col gap-6 w-full sm:w-fit">
                        <img className="h-16 w-fit" src={logo} alt="TukangTravel"/>
                        <div className="flex sm:gap-12 sl:gap-24 leading-normal">
                            <ul className="w-1/2 sm:w-fit">
                                <li><a href="">Home</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Join Us</a></li>
                                <li><a href="">Blogs</a></li>
                            </ul>
                            <ul className="w-1/2 sm:w-fit">
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full sm:w-fit">
                        <h6 className="font-semibold">Download TukangTravel Now</h6>
                        <div className="flex gap-4 sm:gap-6 flex-wrap">
                            <a className="hover:opacity-80" href=""><img className="h-8 min-w-fit xs:h-10" src={googlePlayBadge} alt="Get it on Google Play"/></a>
                            <a className="hover:opacity-80" href=""><img className="h-8 min-w-fit xs:h-10" src={appStoreBadge} alt="Download on the App Store"/></a>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Bottom section */}
                <div className="flex items-center justify-between pt-4 pb-6 flex-col xs:flex-row gap-1 xs:gap-0">
                    <div className="flex gap-1">
                        <a href=""><i class="text-lg md:text-xl text-gray-800 ri-facebook-box-fill"></i></a>
                        <a href=""><i class="text-lg md:text-xl text-gray-800 ri-twitter-fill"></i></a>
                        <a href=""><i class="text-lg md:text-xl text-gray-800 ri-youtube-fill"></i></a>
                        <a href=""><i class="text-lg md:text-xl text-gray-800 ri-instagram-line"></i></a>
                        <a href=""><i class="text-lg md:text-xl text-gray-800 ri-linkedin-box-fill"></i></a>
                    </div>
                    <p>© 2022 TukangTravel</p>
                </div>
            </div>
        </div>
    )
}