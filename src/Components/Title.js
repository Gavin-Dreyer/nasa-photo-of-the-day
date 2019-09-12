import React from 'react';
import styled from 'styled-components';

const TitleCon = styled.div`
    font-size: 4rem;
    background-color: Grey;
    width: 80%;
    margin: auto;
    text-align: center;
    box-shadow: 10px 10px;
`;

const Title = props => {
    return (
        <TitleCon>
            <p>{props.title}</p>
        </TitleCon>
        
    )
}

export default Title;