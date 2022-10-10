import { Avatar } from '@mui/material'
import React from 'react'
import "./Storie.css"

function Storie({ image, Source_profil, titre }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }}

            className='story'>

            <Avatar src={Source_profil} />
            <h4>{titre}</h4>

        </div>
    )
}

export default Storie