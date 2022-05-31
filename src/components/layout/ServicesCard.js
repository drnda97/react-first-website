import React from 'react'

const ServicesCard = (props) => {
    const {image, title, href} = props.data;
    return (
        <a href={href} className="w-75 align-self-center">
            <div className="card d-flex flex-column w-100">
                <div className="w-100 text-center">
                    <img src={image} alt="Card icon" className="w-25 py-3" />
                </div>
                <div className="w-100 text-center">
                    <h4>{title}</h4>
                </div>
            </div>
        </a>
    )
}

export default ServicesCard
