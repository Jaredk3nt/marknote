import React from 'react';
import styled from 'react-emotion';
import uuidv4 from 'uuid/v4';
import { withRouter } from 'react-router-dom';
// Components
import NoteList from './NoteList';
import { PlusButton } from './IconButtons';
import useLocalStorage from '../hooks/useLocalStorage';

function Home({ history }) {
    const notes = useLocalStorage('notes');

    const createNote = () => {
        const id = uuidv4();
        const newNotes = [...notes, {
            id,
            title: '',
            body: ''
        }];
        localStorage.setItem('notes', JSON.stringify(newNotes));
        history.push(`/notes/${id}`);
    }

    return (
        <>
            <Toolbar>
                <PlusButton onClick={createNote}/>
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

export default withRouter(Home);