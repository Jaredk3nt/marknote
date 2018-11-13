import React from 'react';
import styled from 'react-emotion';
import { Link } from "react-router-dom";

function NotePreview({ title, body, id }) {

    return (
        <NoteStyled to={`/notes/${id}`}>
            <h1>{title}</h1>
            <p>{body}</p>
        </NoteStyled>
    )
}

const NoteStyled = styled(Link)`
    display: block;
    background-color: ${props => props.theme.colors.bg};
    padding: 1em;
    border-bottom: 2px solid ${props => props.theme.colors.bgLight};
    text-decoration: none;

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

export default NotePreview;