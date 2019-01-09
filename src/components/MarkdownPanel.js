import React from 'react';
import styled from 'react-emotion';

import MarkdownRenderer from './markdownRenderer';

function MarkdownPanel({ note }) {
    return (
        <TextEditorStyled>
            <Title>{note.title}</Title>
            <Body>
                <MarkdownRenderer src={note.body} />
            </Body>
        </TextEditorStyled>
    );
}

const TextEditorStyled = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 1em 0em 2em;
    height: 100%;
    overflow: hidden;
`;

const Title = styled('h1')`
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.family};
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0em 18px .5em;
    padding: 0em 0em .25em;
`;

const Body = styled('div')`
    height: 100%;
    max-height: 80vh;
    width: 100%;
    padding: 18px 18px 40px 18px;
    overflow: scroll;
    background-color: white;

    div:first-child {
        margin-bottom: 30px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    li,
    td,
    th {
        color: ${props => props.theme.colors.bg};
        font-family: ${props => props.theme.fonts.sansFamily};
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        margin: .5em 0em .25em 0em;
    }

    h2 {
        font-size: 1.4rem;
        margin: .5em 0em .25em 0em;
        font-weight: 400;
    }

    h3 {
        font-size: 1.25rem;
        margin: .5em 0em .25em 0em;
        font-weight: 600;
    }

    h4 {
        font-size: 1.2rem;
        margin: .5em 0em .25em 0em;
        font-weight: 400;
    }

    p {
        font-size: .9rem;
        font-weight: 400;
        margin: .45em 0em;
        letter-spacing: .5px;
        line-height: 1.4;
    }

    img {
        width: 100%;
        margin: .5em 0em;
    }

    ul,
    ol {
        padding-left: 18px;
        margin: .65em 0em;
    }

    pre {
        font-family: ${props => props.theme.fonts.family};
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.bg};
        padding: 1em;
        border-radius: 4px;
        margin: .5em 0em;
    }

    code {
        background-color: ${props => props.theme.colors.bg};
        font-family: ${props => props.theme.fonts.family};
        color: ${props => props.theme.colors.text};
        font-size: .8rem;
        font-weight: 400;
        padding: 2px 4px;
        border-radius: 4px;
    }

    table {
        width: 100%;
        font-size: .9rem;
        font-weight: 400;
        margin: 1em 0em;
        letter-spacing: .5px;
        line-height: 1.4;
        border-collapse: collapse;
        display: block;
        overflow-x: auto;
        white-space: nowrap;

        th, td {
            border: 1px solid ${p => p.theme.colors.grey};
            padding: .75em;
        }
    }
`;

export default MarkdownPanel;