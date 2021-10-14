import React from 'react';

import styled from 'styled-components'
const Button = styled.button`
    background:white;
    height:30px;
    margin-top:400px;
    padding: 12px 18px;
    border:0;
    border-radius:10px;
    align-items:center;
    text-align:center;
    &:hover{
        color:red;
        transform: scale(1.1);
    }
            
    
`
export default function CtaButton() {
    return (
        <>
            <Button>Entrar em Contato</Button>
        </>
    )
}