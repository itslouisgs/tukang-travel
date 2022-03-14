import React, { useState } from "react"
import emailjs from 'emailjs-com';
import emailkey from '../assets/utils/emailkey';
import { useRef } from 'react';
import { Helmet } from 'react-helmet'
import "../style.css"

export default function Contact() {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        const submitBtn = Array.from(form.current.childNodes).find(element => element.id === "submitBtn")
        
        submitBtn.innerText = "Mengirim..."
        
        emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current, emailkey.USER_ID)
            .then((result) => {
                alert("Pesan Anda sudah berhasil terkirim!");
                submitBtn.innerText = "Kirim"
            },
                (error) => {
                    alert("Terjadi kesalahan, silakan coba lagi!");
                    submitBtn.innerText = "Kirim"
                });
    };

    return (

        <div className="bg-gray-50 pt-32 pb-16">
            <Helmet>
                <title>Contact Us | TukangTravel</title>
            </Helmet>
            <div className="wrapper max-w-4xl">
                <div className="pb-4">
                    <h2 className="pb-4">Kontak Kami</h2>
                    <h3 className="">Sampaikan pesan Anda supaya kami dapat menunjang permintaan Anda!</h3>
                </div>
                <hr className="py-4"/>
                <form ref={form} onSubmit={handleSubmit} method="POST">
                    <div className="form-field">
                        <label className="required" htmlFor="name">Nama</label>
                        <input type="text" name="name" id="name" placeholder="Masukkan nama Anda" required />
                    </div>
                    <div className="form-field">
                        <label className=" required" htmlFor="email">Alamat email</label>
                        <input type="email" name ="email" id="email" placeholder="Masukkan alamat email Anda" required />
                    </div>
                    <div className="form-field">
                        <label className=" required" htmlFor="message">Pesan</label>
                        <textarea name="message" id="message" type="textarea" placeholder="Masukkan pesan Anda" rows="5" required />
                    </div>
                    <button id="submitBtn" type="submit" className="btn btn-primary mt-4">Kirim</button>
                </form>
            </div>
        </div>
    )
}