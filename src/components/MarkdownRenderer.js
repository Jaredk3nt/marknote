import React from 'react';
import styled from 'react-emotion';
import remark from 'remark';
import reactRenderer from 'remark-react';

function MarkdownRenderer({ note }) {
    const generateMarkdown = (content) => {
        return remark().use(reactRenderer).processSync(content).contents;
    }

    return (
        <TextEditorStyled>
            <Title>{note.title}</Title>
            <Body>
                {generateMarkdown(note.body)}
            </Body>
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
    padding: 18px;
    overflow: scroll;
    background-color: white;

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        color: ${props => props.theme.colors.bg};
        font-family: ${props => props.theme.fonts.sansFamily};
    }

    h1 {
        font-size: 1.5rem;
        margin: .25em 0em;
    }

    h2 {
        font-size: 1.4rem;
        margin: .25em 0em;
    }

    p {
        font-size: .9rem;
        font-weight: 400;
        margin: .25em 0em;
        letter-spacing: .5px;
    }

    img {
        width: 100%;
        margin: .5em 0em;
    }
`;

export default MarkdownRenderer;