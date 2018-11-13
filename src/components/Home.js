import React from 'react';
import styled from 'react-emotion';
// Components
import NoteList from './NoteList';
import { PlusButton } from './IconButtons';

function Home() {
    return (
        <>
            <Toolbar>
                <PlusButton />
            </Toolbar>
            <HomeStyled>
                
                <NoteList />
            </HomeStyled>
        </>
    );
}

const HomeStyled = styled('div')`
    padding: 1em;
`;

const Toolbar = styled('header')`
    display: flex;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 65px;
    padding: .5em;
    justify-content: flex-end;
    align-items: center;

    button {
        float: right;
    }
`;

export default Home;