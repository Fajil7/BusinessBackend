import React from 'react'
import './brandLogo.css'


const BrandLogo = (props) => {
    const { cardDetails } = props
    const { name, yourlogo } = cardDetails
    return (

        <li className="supporting-brand-logo-list-container">
            {/* <img src={image}
                className="supporting-brand-logo-list"
            /> */}
            <p>{name}</p>
        </li>

    )
}
export default BrandLogo
