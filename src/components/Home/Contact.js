import React from "react";

const Contact = () => {
    return (
        <div className="contact w-100 text-center my-5">
            <h1 className="text-light pb-5">Kontaktirajte nas</h1>
            <form className="w-50 mx-auto my-5">
                <div className="w-100 my-4 d-flex justify-content-between">
                    <div className="w-50">
                        <input type="text" placeholder="Ime" name="name" className="w-100"/>
                    </div>
                    <div className="w-50">
                        <input type="text" placeholder="Prezime" name="last-name" className="w-100"/>
                    </div>
                </div>
                <div className="w-100 my-4 d-flex">
                    <div className="w-50">
                        <input type="text" placeholder="Predmet" name="subject" className="w-100"/>
                    </div>
                    <div className="w-50">
                        <input type="text" placeholder="Email" name="email" className="w-100"/>
                    </div>
                </div>
                <div className="w-100 my-4">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Poruka"/>
                </div>
            </form>
        </div>
    )
}
export default Contact