import React from 'react';
import styled from 'react-emotion';
// Components
import NotePreview from './NotePreview';
// Hooks
import useLocalStorage from '../hooks/useLocalStorage';

function NoteList() {
    let notes = useLocalStorage('notes');

    return (
        <NoteListStyled>
            {
                notes.map(note => (
                    <li>
                        <NotePreview
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                        />
                    </li>
                ))
            }
        </NoteListStyled>
    );
}

const NoteListStyled = styled('ul')`
    list-style: none;
    padding: 0;
    margin: 0;

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
`;

export default NoteList;