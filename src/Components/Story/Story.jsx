import React from 'react'
import Storie from '../Storie/Storie'
import "./Story.css"

function Story() {
    return (
        <div className='Story'>

            <Storie
                titre="FATOU SECK"
                Source_profil=""
                image=""
            />

            <Storie
                titre="MAMADOU CAMARA"
                Source_profil="https://www.google.com/search?q=lien+image+garcon&oq=lien+image+garcon&aqs=chrome..69i57j33i160.6361j0j7&sourceid=chrome&ie=UTF-8#imgrc=1wbzZF9nMIZKgM"
                image="https://www.google.com/search?q=lien+image+garcon&oq=lien+image+garcon&aqs=chrome..69i57j33i160.6361j0j7&sourceid=chrome&ie=UTF-8#imgrc=1wbzZF9nMIZKgM"
            />

            <Storie
                titre="OTHMAN MEKOUAR"
                Source_profil=""
                image=""
            />

            <Storie
                titre="KEITA NASSOU"
                Source_profil=""
                image=""
            />

            <Storie
                titre="IVO COSTA"
                Source_profil=""
                image=""
            />


        </div>
    )
}

export default Story