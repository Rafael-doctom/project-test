import React from 'react';

// importFolders
import ListNav from './ListNav';
import ProfileImage from './ProfileImage';

//  importStyles
import styled from 'styled-components'
const HeaderBackground = styled.div`
    display:flex;
    justify-content: space-between;

    position: relative;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 100;
    height: 80px;
    background: #fff;
    -webkit-transition: all .5s ease 0s;
    -moz-transition: all .5s ease 0s;
    -o-transition: all .5s ease 0s;
    transition: all .5s ease 0s;

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    max-width: 1140px;
    `



export default function Header() {
    return (
        <>
            <HeaderBackground>
                <ProfileImage />
                <ListNav />
            </HeaderBackground>
        </>
    )
}