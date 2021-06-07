import React from 'react'

import './product.css'

const Produect = (props) => {
    return (
        <div className='card'>
            <p>product name : {props.title}</p>
            <p>product price : {props.price}</p>
        </div>
    )
}

export default Produect