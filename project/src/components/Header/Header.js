import React from 'react';

// importFolders
import ListNav from './ListNav';
import ProfileImage from './ProfileImage';


export default function Header(){
    return(
        <>
            <ProfileImage />
            <ListNav />
        </>
    )
}