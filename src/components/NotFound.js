import React from "react"
import "../style.css"
import Button  from '../components/Button'

export default function NotFound(){
    return (
        <div className="bg-gray-50">
            <div className="wrapper w-4/5 h-[80vh] text-center flex flex-col justify-center gap-4">
                <h1 className="pt-18 text-center text-9xl text-orange-600">404</h1>
                <h2 className="pb-4">Oops, halaman tak ditemukan</h2>
                <div className="mx-auto">
                    <Button content="Kembali ke Beranda" href="/"/>
                </div>
            </div>
        </div>
    )
}