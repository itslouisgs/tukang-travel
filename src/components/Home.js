import React from "react"
import { Helmet } from 'react-helmet'
import "../style.css"
import Button from '../components/Button'
import ParagraphLayout  from '../components/ParagraphLayout'

export default function Home(){
    const lang  = document.documentElement.lang
    const translations = require(`../assets/translations/${lang}.json`)
    console.log(translations)

    return(
        <div>
            <Helmet>
                <title>TukangTravel</title>
            </Helmet>
            <div className="hero h-screen">
                <div className="wrapper flex justify-center h-full pt-16 md:pt-18">
                    <div className="my-auto flex flex-col gap-8">
                        <h1 className=" text-white text-shadow text-center">{translations.heading}</h1>
                        <div className="flex justify-center mx-auto gap-3 md:gap-6 flex-wrap">
                            <Button href="#About" className="btn-secondary" content={translations.button.learnMore} />
                            <Button href="#Join" className="btn-primary" content={translations.button.exploreWithUs} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="About" className="bg-gray-50 py-20 xl:py-24 flex flex-col gap-24">
                <ParagraphLayout 
                    key = "1"
                    title= {<div>TukangTravel, <span className="text-orange-600">asisten rencana perjalanan</span> Anda</div>} 
                    img = "pic.jpg"
                    desc = "TukangTravel hadir sebagai asisten virtual rencana perjalanan untuk Anda yang gemar travelling. Sebagai aplikasi yang menunjang lifestyle travelling di Indonesia, kami menyediakan informasi seputar hidden gem yang terletak di destinasi yang Anda ingin kunjungi. Kami juga menawarkan layanan rekomendasi destinasi wisata yang indah tetapi jarang dikenal masyarakat."
                    colReverse = "false"
                />
                <ParagraphLayout 
                    key = "2"
                    title= {<div><span className="text-orange-600">Tak perlu lagi cemas </span> akan destinasi yang akan dikunjungi</div>} 
                    img = "pic.jpg"
                    desc = "Rasa cemas akan destinasi wisata yang akan dikunjungi pasti merupakan momok bagi setiap traveler. Untuk itu, kami memberikan layanan untuk menentukan destinasi wisata yang tepat bagi Anda dan mengakomodasi setiap kebutuhan travelling Anda supaya liburan Anda nyaman dan lancar tanpa rasa cemas."
                    colReverse = "true"
                />
            </div>
            <div id="Join" className="bg-gray-50">
                <div className="wrapper pt-12 sl:pt-16 pb-24 px-1 xs:px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
                    <div className="contact-wrapper rounded-2xl p-6 xs:p-8 md:p-12 xl:p-16 flex flex-col gap-8 md:gap-12 drop-shadow-lg">
                        <h2 className=" text-white w-full max-w-2xl text-shadow h2">Bingung mulai travelling dari mana? Ayo, gabung dengan kami sekarang juga!</h2>
                        <div className="flex gap-4">
                            <Button href="" content="Gabung"/>
                            <Button href="/contact" className="btn-secondary" content="Kontak Kami"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}