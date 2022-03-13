import React, { useState } from "react"
import emailjs from 'emailjs-com';
import "../style.css";
import emailkey from '../utils/emailkey';
import { useRef } from 'react';

export default function Contact() {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current, emailkey.USER_ID)
            .then((result) => {
                alert("Pesanmu sudah berhasil terkirim, terima kasih telah mengirimkan pesan kepada kami :)", result.text);
            },
                (error) => {
                    alert("Terjadi kesalahan, Silahkan coba lagi.");
                });
    };

    return (

        <div className="bg-gray-50 pt-32 pb-16">
            <div className="wrapper max-w-4xl">
                <div className="pb-4">
                    <h2 className="text-center sl:text-left pb-4">Kontak Kami</h2>
                    <h3 className="">Sampaikan pesan Anda supaya kami dapat menunjang permintaan Anda!</h3>
                </div>
                <hr className="py-4" />
                <form className="flex flex-col gap-4" ref={form} onSubmit={handleSubmit} method="POST">
                    <div className="flex flex-row items-center">
                        <label className="w-1/4 required" htmlFor="name">Nama</label>
                        <input className="w-3/4 border-[1px] p-2 rounded-lg" type="text" name="name" id="name" placeholder="Masukkan nama Anda" required />
                    </div>
                    <div className="flex flex-row items-center">
                        <label className="w-1/4 required" htmlFor="email">Alamat email</label>
                        <input className="w-3/4 border-[1px] p-2 rounded-lg" type="email" name="email" id="email" placeholder="Masukkan alamat email Anda" required />
                    </div>
                    <div className="flex flex-row items-center">
                        <label className="w-1/4 required" htmlFor="message">Pesan</label>
                        <textarea id="message" className="w-3/4 border-[1px] p-2 rounded-lg" name="message" type="text" placeholder="Masukkan pesan Anda" rows="5" required />
                    </div>
                    <button type="submit" className="btn btn-primary shadow-none mt-4">Kirim</button>
                </form>
            </div>
        </div>
    )
}