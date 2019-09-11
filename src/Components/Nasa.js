import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Photos from './Photos';
import Title from './Title';
import Explanation from './Explanation';

function Nasa () {

    const [photo, setPhoto] = useState("")
    


    useEffect (() => {
        axios 
            .get(`https://api.nasa.gov/planetary/apod?api_key=gGTXarFstcIycfV74tgVHNFvwc277RmEY7eZBTW5`)
            .then(response => {
                console.log(response)
                setPhoto(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
    return (
        <div className="container">
            <Title title={photo.title} />
            <Photos imgUrl={photo.url} />
            <Explanation descript={photo.explanation} />
        </div>
        
    )
}


export default Nasa;