import React from 'react';

// import folders
import CtaButton from './CtaButton';

// importStyles
import styled from 'styled-components'
const Text = styled.h5` 
    position:absolute;
    margin-top:300px;
    width:100%;
    max-width:600px;
    text-align:center;
    font-size:1.20rem;
    font-weight: 800;
    
`
const Button = styled.button`
    background:white;
    height:30px;
    margin-top:390px;
    padding: 20px;
    border:0;
    border-radius:10px;
    align-items:center;
    text-align:center;
    &:hover{
        color:red;
        transform: scale(1.1);
    }
            
    
`

export default function TextContent() {
    return (
        <>
            <Text>
                👋🏻 Hello!! My Name is Rafael, have 20 Years and I am Front-end Developer
                Professional career in development in the area of technology (T.I). Front-end, development and entrepreneurship are my main focuses. Currently, I am majoring in systems analysis and development, attending the 2rd semester. - at Unopar.            
            </Text>
            <CtaButton />
        </>
    )
}