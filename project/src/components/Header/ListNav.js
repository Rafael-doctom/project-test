import React, { useState } from 'react';

// importStyles
import styled from 'styled-components'
const Container = styled.div`
    //
`

const Lista = styled.ul`
    display:flex;
`

const ListItem = styled.li`
    list-style:none;
    font-family: 'Poppins', sans-serif;
    display: block;
    font-weight: 700;
    font-size: 14px;
    color: #2a2a2a;
    text-transform: capitalize;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    height: 40px;
    line-height: 40px;
    border: transparent;

    padding-left: 20px;
    padding-right: 20px;
    &:hover{
        color:red;
        transform: scale(1.1);
    }    
`


export default function ListNav() {

    const [initialClick, setInitial] = useState(false)
    const [aboutClick, setAbout] = useState(false)
    const [portfolioClick, setPortfolio] = useState(false)
    const [habilidadesClick, setHabilidades] = useState(false)
    const [contactClick, setContact] = useState(false)

    return (
        <>
            <Container>
                <Lista>
                    <ListItem onClick={() => setInitial(true)}>
                        Inicio
                    </ListItem>
                    {
                        initialClick ?
                            <>
                                teste
                            </>
                            : null
                    }
                    <ListItem onClick={() => setAbout(true)}>Sobre</ListItem>
                    {
                        aboutClick ?
                            <>
                                teste
                            </>
                            : null
                    }
                    <ListItem onClick={() => setPortfolio(true)}>Portfólio</ListItem>
                    {
                        portfolioClick ?
                            <>
                                teste
                            </>
                            : null
                    }
                    <ListItem onClick={() => setHabilidades(true)}>Habilidades</ListItem>
                    {
                        habilidadesClick ?
                            <>
                                teste
                            </>
                            : null
                    }
                    <ListItem onClick={() => setContact(true)}>Contato</ListItem>
                    {
                        contactClick ?
                            <>
                                teste
                            </>
                            : null
                    }
                </Lista>
            </Container>
        </>
    )
}