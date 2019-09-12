import React from 'react'
import styled from 'styled-components'

const ImgStyle = styled.img`
    height: auto;
    max-width: 80%;
    display: flex;
    margin: auto;
    padding: 10px;
    border: 1px solid #77aaff;
    box-shadow:  1px 1px black,
        2px 2px black,
        3px 3px #77aaff,
        4px 4px #77aaff,
        5px 5px black,
        6px 6px black,
        7px 7px #77aaff,
        8px 8px #77aaff,
        9px 9px black,
        10px 10px black,
        11px 11px #77aaff,
        12px 12px #77aaff;
         
`;

const Photos = props => {
    return (
        <div>
            <ImgStyle alt="space" src={props.imgUrl} />
        </div>
        
    )
}

export default Photos;