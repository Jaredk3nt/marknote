import React from 'react';
import styled from 'react-emotion';
// Components
import NotePreview from './NotePreview';
// Hooks
import useLocalStorage from '../hooks/useLocalStorage';

function NoteList() {
    let [notes,] = useLocalStorage('notes');
    console.log(notes);

    return (
        <NoteListStyled>
            {
                notes.map(note => (
                    <li key={note.id}>
                        <NotePreview
                            id={note.id}
                            title={note.title}
                            body={note.body}
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

    li {

        &:first-child {
            a {
                border-radius: 4px 4px 0px 0px;
            }
        }

        &:last-child {
            a {
                border-radius: 0px 0px 4px 4px;
                border-bottom: none;
            }
        }
    }

    h2 {
        color: ${props => props.theme.colors.bgLight};
        font-family: ${props => props.theme.fonts.family};
        text-align: center;
    }
`;

export default NoteList;