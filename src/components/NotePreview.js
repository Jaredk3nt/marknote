import React, { useState } from 'react';
import styled from 'react-emotion';
import { withRouter } from "react-router-dom";
import Swipeable from 'react-swipeable';

function NotePreview({ title, body, id, deleteNote, history, ...rest }) {
    const [deleteOpen, setDelete] = useState(false);
    return (
        <Swipeable
            onSwipedRight={() => setDelete(true)}
            onSwipedLeft={() => setDelete(false)}
        >
            <NoteStyled
                onClick={() => history.push(`/notes/${id}`)}
                deleteOpen={deleteOpen}
                {...rest}
            >
                { deleteOpen && (
                    <button onClick={() => deleteNote(id)}>x</button>
                )}
                <h1>{title}</h1>
                <p>{body}</p>
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

    h1 {
        font-family: ${props => props.theme.fonts.family};
        font-weight: 600;
        color: white;
        font-size: 1rem;
        letter-spacing: 1px;
        margin: 0em 0em .25em 0em;
    }

    p {
        font-family: ${props => props.theme.fonts.family};
        font-weight: 400;
        color: ${props => props.theme.colors.textDark};
        font-size: .8rem;
        margin: 0;
        max-height: 34px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default withRouter(NotePreview);