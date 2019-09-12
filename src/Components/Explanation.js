import React from 'react'
import styled from 'styled-components'

const DescriptCon = styled.div`
    font-size: 2rem;
    width: 80%;
    margin: auto;
    text-shadow: 0 1px 0 #bbb,
        0 2px 0 #bbb,
        0 3px 0 #bbb,
        0 4px 0 #bbb,
        0 5px 0 #bbb,
        0 6px 1px #bbb,
        0 0px 3px #bbb,
        0 1px 3px #bbb,
        0 3px 5px #bbb,
        0 5px 10px #bbb,
        0 5px 20px #fff;
    line-height: 3rem;
`;

const Explanation = props => {
    return (
        <DescriptCon>
            <p>{props.descript}</p>
        </DescriptCon>
    )
}

export default Explanation;