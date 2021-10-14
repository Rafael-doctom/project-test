import React from 'react';

// importFolders
import AtomListNav from '../Atoms/AtomListNav';

// importStyles
import styled from 'styled-components'
const Container = styled.div`
    //
`

const List = styled.ul`
    display:flex;
`

export default function ListNav() {

    return (
        <>
            <Container>
                <List>
                   <AtomListNav />
                </List>
            </Container>
        </>
    )
}