import React from 'react'
import ServicesCards from "./Services-Cards";

const Services = () => {
    return (
        <>
            <div className="text-center">
                <hr/>
                <h1>Nase Usluge</h1>
                <h4 className="py-5">OVO SU SAMO NEKE OD USLUGA KOJE PRUŽAMO NAŠIM KRAJNJIM KORISNICIMA</h4>
            </div>
            <ServicesCards />
        </>
    )
}

export default Services
