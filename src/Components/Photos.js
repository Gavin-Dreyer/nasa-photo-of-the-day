import React from 'react'

const Photos = props => {
    return (
        <div className="imgContainer">
            <img alt="space" src={props.imgUrl} />
        </div>
        
    )
}

export default Photos;