import React from 'react'
const Banner = () => {
    return (
        <div className="banner w-100 d-flex flex-column text-center">
            <div className="w-50 align-self-end">
                <h1>SERVIS RAČUNARA</h1>
                <h3 className="text-light">NEMOJTE ČEKATI DA BUDE KASNO</h3>
                <button className="btn primary-button">
                    <a href="/" className="text-light">Kontaktirajte nas</a>
                </button>
            </div>
        </div>
    )
}

export default Banner
