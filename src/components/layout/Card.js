import React from 'react'

const Card = (props) => {
    const {image, title, description} = props.data;
    return (
        <div className="d-flex">
            <div className="w-25 text-right">
                <img src={image} alt="Card icon" className="w-50" />
            </div>
            <div className="w-50">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
