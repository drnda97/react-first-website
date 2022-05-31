import React from 'react'
import ServicesCard from "../layout/ServicesCard";
import time from '../../assets/icons/time.png'
import phone from '../../assets/icons/phone.png'
import backup from '../../assets/icons/backup.png'

const ServicesCards = () => {
    return (
        <>
            <div className="w-75 mx-auto my-5 d-flex">
                <div className="col-4 mx-2 d-flex">
                    <ServicesCard data={{
                        image: time,
                        title: "Instalacija Operativnih Sistema",
                        href: '/'
                    }} />
                </div>
                <div className="col-4 mx-2 d-flex">
                    <ServicesCard data={{
                        image: phone,
                        title: "Podešavanje mrežnih konekcija",
                        href: '/'
                    }} />
                </div>
                <div className="col-4 mx-2 d-flex">
                    <ServicesCard data={{
                        image: backup,
                        title: "Instalacija Softvera",
                        href: '/'
                    }} />
                </div>
            </div>
            <div className="w-75 mx-auto my-5 d-flex">
                <div className="col-4 mx-2 d-flex">
                    <ServicesCard data={{
                        image: time,
                        title: "Bekap i Restore",
                        href: '/'
                    }} />
                </div>
                <div className="col-4 mx-2 d-flex">
                    <ServicesCard data={{
                        image: phone,
                        title: "Izrada WEB sajtova",
                        href: '/'
                    }} />
                </div>
                <div className="col-4 mx-2 d-flex">
                    <ServicesCard data={{
                        image: backup,
                        title: "Google Optimizacija",
                        href: '/'
                    }} />
                </div>
            </div>
        </>
    )
}

export default ServicesCards
