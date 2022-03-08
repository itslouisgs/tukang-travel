import React from "react"
import "../style.css"

export default function About(){
    return (
        <div className="bg-gray-50 pt-18">
            <div className="wrapper py-12 xl:py-16 flex flex-col gap-4">
                <h2 className="text-center sl:text-left pb-4">Tentang Kami</h2>
                <p>
                    TukangTravel merupakan sebuah aplikasi yang menyediakan akses informasi bagi masyarakat untuk menemukan tempat-tempat unik dari destinasi wisata yang akan mereka kunjungi nantinya. Sebagai aplikasi yang menunjang lifestyle travelling di Indonesia, kami menyediakan informasi seputar hidden gem yang terletak di destinasi yang Anda ingin kunjungi. Kami juga menawarkan layanan rekomendasi destinasi wisata yang indah tetapi jarang dikenal masyarakat. TukangTravel juga menawarkan tour guide untuk melengkapi para traveler yang membutuhkan bantuan pada saat berada di destinasi tujuannya.
                </p>
                
                <p>Travelling, TukangTravel solusinya.</p>
            </div>
        </div>
    )
}