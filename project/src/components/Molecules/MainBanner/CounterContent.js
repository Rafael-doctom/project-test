import React from 'react';

// importFolders 
import AtomCounter from '../../Atoms/MainBanner/AtomCounter';

// importStyles
import styled from 'styled-components'
const Container = styled.div`
    display:flex;
    justify-content:center;
    z-index: 100;
    -webkit-transition: all .5s ease 0s;
    -moz-transition: all .5s ease 0s;
    -o-transition: all .5s ease 0s;
    transition: all .5s ease 0s;
    max-width: 1800px;
    position: absolute;
    width: 100%;
    padding: 12px 0px;
    height: 100px;
    background-color: rgba(250,250,250,0.3);
    


`

export default function CounterContent() {

    var dayCurrent = new Date().getDate()
    var yearCurrent = new Date().getFullYear()

    return (
        <>
            <Container>
                <AtomCounter TextCounter={`Hoje é dia ${dayCurrent} de ${yearCurrent}`} />
            </Container>
        </>
    )
}