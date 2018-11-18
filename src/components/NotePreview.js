import React, { useState } from 'react';
import styled from 'react-emotion';
import { withRouter } from "react-router-dom";
import Swipeable from 'react-swipeable';

function NotePreview({ note, deleteNote, history, ...rest }) {
    const [deleteOpen, setDelete] = useState(false);
    const date = new Date(note.lastUpdated);
    return (
        <Swipeable
            onSwipedRight={() => setDelete(true)}
            onSwipedLeft={() => setDelete(false)}
        >
            <NoteStyled
                onClick={() => history.push(`/notes/${note.id}`)}
                deleteOpen={deleteOpen}
                {...rest}
            >
                { deleteOpen && (
                    <button onClick={() => deleteNote(note.id)}>x</button>
                )}
                <div className='title'>
                    <h1>{note.title}</h1>
                    <h2>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</h2>
                </div>
                <p>{note.body}</p>
            </NoteStyled>
        </Swipeable>
    )
}

const NoteStyled = styled('div')`
    display: block;
    position: relative;
    width: 100%;
    background-color: ${p => p.theme.colors.bg};
    padding: ${p => p.deleteOpen ? '1em 0em 1em calc(15% + 1em)' : '1em'};
    border: none;
    border-bottom: ${p => p.last ? 'none' : `2px solid ${p.theme.colors.bgLight}`};
    border-radius: ${p => {
        if (p.first && p.last) return '4px 4px 4px 4px';
        if (p.first) return '4px 4px 0px 0px';
        if (p.last) return '0px 0px 4px 4px';
        return '0px'
    }};
    text-decoration: none;
    text-align: left;

    &:hover {
        cursor: pointer;
    }

    button {
        background-color: red;
        border: none;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        padding: 1em;
        width: 15%;
        border-radius: ${p => {
            if (p.first && p.last) return '4px 0px 0px 4px';
            if (p.first) return '4px 0px 0px 0px';
            if (p.last) return '0px 0px 0px 4px';
            return '0px'
        }};
        color: ${p => p.theme.colors.text};
    }

    .title {
        margin-bottom: .25em;
        width: 100%;
    }

    h1 {
        display: inline-block;
        font-family: ${props => props.theme.fonts.family};
        font-weight: 600;
        color: white;
        font-size: 1rem;
        letter-spacing: 1px;
        margin: 0em;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h2 {
        display: inline-block;
        color: ${p => p.theme.colors.textDarker};
        font-family: ${props => props.theme.fonts.family};
        font-weight: 400;
        font-size: .7rem;
        letter-spacing: 1px;
        text-align: left;
        margin: 0em;
    }

    p {
        font-family: ${props => props.theme.fonts.family};
        font-weight: 400;
        color: ${props => props.theme.colors.textDark};
        font-size: .8rem;
        margin: 0;
        max-height: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default withRouter(NotePreview);