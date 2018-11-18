import React from 'react';
import styled from 'react-emotion';
// Components
import NotePreview from './NotePreview';
// Hooks
import useLocalStorage from '../hooks/useLocalStorage';

function NoteList() {
    let [notes, setNotes] = useLocalStorage('notes');

    function deleteNote(id) {
        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <NoteListStyled>
            {
                notes.map((note, index) => (
                    <li key={note.id}>
                        <NotePreview
                            note={note}
                            deleteNote={deleteNote}
                            first={index === 0}
                            last={index === notes.length - 1}
                        />
                    </li>
                ))
            }
            { notes.length < 1 && (
                <h2>No notes here.</h2>
            ) }
        </NoteListStyled>
    );
}

const NoteListStyled = styled('ul')`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    h2 {
        color: ${props => props.theme.colors.bgLight};
        font-family: ${props => props.theme.fonts.family};
        text-align: center;
    }
`;

export default NoteList;