import React from 'react'
import Card from '../layout/Card';
import time from '../../assets/icons/time.png'
import phone from '../../assets/icons/phone.png'
import backup from '../../assets/icons/backup.png'

const Cards = () => {
    return (
        <div className="w-75 mx-auto d-flex">
            <div className="col-4 mx-2 d-flex">
                <Card data={{
                    image: time, 
                    title: "BRZ DOLAZAK NA ADRESU", 
                    description: "Od trenutka zakazivanja do trenutka dolaska za manje od 60min za hitne intevencije! Kada zakažete termin serviser sigurno dolazi u dogovoreno vreme."
                }} />
            </div>
            <div className="col-4 mx-2 d-flex">
                <Card data={{
                    image: phone, 
                    title: "SUPER LAKO ZAKAZIVANJE", 
                    description: "Telefonsko ili putem emaila i sms poruke. Dovoljno je da nam pošaljete adresu i broj i broj stana i sprata i serviser će vas kontaktirati"
                }} />
            </div>
            <div className="col-4 mx-2 d-flex">
                <Card data={{
                    image: backup, 
                    title: "SPASITE SVOJE PODATKE", 
                    description: "Uradite Bekap i Izvlačenje podataka kod nas na vaše ili naše medije uz pomoć naših servisera. Čuvajte svoje uspomene."
                }} />
            </div>
        </div>
    )
}

export default Cards
