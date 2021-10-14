import React from 'react';

// importStyles
import styled from 'styled-components'

const DateCurrent = styled.h5`
color:black;
    font-size:2rem;
    font-family: 'Rubik', sans-serif;
    letter-spacing: 3px;
`

export default function AtomCounter(props) {
    
    return (
        <DateCurrent>
            {props.TextCounter}
        </DateCurrent>
    )
}