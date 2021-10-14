import React from 'react';

// ImportFolders
import CounterContent from './CounterContent';
import TextContent from './TextContent'

//  importStyles
import styled from 'styled-components'
const MainBackground = styled.div`
    display:flex;
    justify-content:center;
    background-image: url('https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80');
    background-size: cover;
    width:99%;
    height:100vh;
    margin: 10px auto;
`

export default function MainBanner() {
    return (
        <>
            <MainBackground>
                <CounterContent />
                <TextContent />
            </MainBackground>
        </>
    )
}