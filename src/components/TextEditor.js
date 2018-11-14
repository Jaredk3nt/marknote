import React from 'react';
import styled from 'react-emotion';

function TextEditor({ title, body, setTitle, setBody, save }) {
    return (
        <TextEditorStyled>
            <TitleEditor
                value={title}
                placeholder={title.length ? '' : 'Title'}
                onChange={(e) => setTitle(e.target.value)}
            />
            <BodyEditor
                value={body}
                placeholder={body.length ? '' : 'Start writing your notes here...'}
                onChange={(e) => setBody(e.target.value)}
            />
            <Toolbar>
                <button onClick={save}>save note</button>
            </Toolbar>
        </TextEditorStyled>
    );
}

const Toolbar = styled('nav')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: ${props => props.theme.colors.bgDark};
    padding: .5em;

    button {
        background: ${props => props.theme.colors.gradient};
        height: 100%;
        color: ${props => props.theme.colors.text};
        font-family: ${props => props.theme.fonts.family};
        border: none;
        border-radius: 4px;

        &:hover {
            cursor: pointer;
        }
    }
`;

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
    margin: 0em 18px 0px;
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
    max-height: calc(80vh - 60px);
    width: 100%;
    resize: none;
    padding: 18px;
    overflow: scroll;

    &:focus {
        background-color: ${props => props.theme.colors.bg};
    }
`;

export default TextEditor;