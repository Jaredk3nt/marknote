import React, { useState } from 'react';
import styled from 'react-emotion';

function TextEditor({ note }) {
    const [title, changeTitle] = useState(note.title);
    const [body, changeBody] = useState(note.body);

    return (
        <TextEditorStyled>
            <TitleEditor
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
            />
            <BodyEditor
                value={body}
                onChange={(e) => changeBody(e.target.value)}
            />
        </TextEditorStyled>
    );
}

const TextEditorStyled = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 1em 0em 0em;
    height: 100%;
    overflow: hidden;
`;

const TitleEditor = styled('input')`
    background-color: ${props => props.theme.colors.bgDark};
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.bgDark};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.family};
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0em 18px .5em;
    padding: 0em 0em .25em;

    &:focus {
        border-bottom: 2px solid ${props => props.theme.colors.bgLight};
    }
`;

const BodyEditor = styled('textarea')`
    background-color: ${props => props.theme.colors.bgDark};
    border: none;
    color: ${props => props.theme.colors.textDark};
    font-family: ${props => props.theme.fonts.family};
    font-size: .85rem;
    height: 100%;
    max-height: 80vh;
    width: 100%;
    resize: none;
    padding: 18px;
    overflow: scroll;

    &:focus {
        background-color: ${props => props.theme.colors.bg};
    }
`;

export default TextEditor;