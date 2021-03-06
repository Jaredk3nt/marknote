import React, { useState } from 'react';
import styled from 'react-emotion';
import Swipeable from 'react-swipeable';
import { withRouter } from 'react-router-dom';
// Components
import TextEditor from './TextEditor';
import MarkdownPanel from './MarkdownPanel';
import { BackButton } from './IconButtons';
// Hooks
import useLocalStorage from '../hooks/useLocalStorage';

const tabs = { EDIT: 'edit', VIEW: 'view' };
const directions = { RIGHT: 'RIGHT', LEFT: 'LEFT' };

function Editor({ match, history }) {
    const [tab, setTab] = useState(tabs.EDIT);
    const [notes, setNotes] = useLocalStorage('notes');
    const filter = (notes.filter(note => note.id === match.params.noteId));
    if (!filter.length) {
        history.push('/');
        return null;
    }
    const note = filter[0];
    const [title, setTitle] = useState(note.title);
    const [body, setBody] = useState(note.body);

    const save = () => {
        const newNotes = notes.filter(note => note.id !== match.params.noteId);
        setNotes([ ...newNotes, {
            ...note,
            title,
            body,
            lastUpdated: new Date().getTime()
        }]);
    }

    const changeTab = (tab) => {
        save();
        setTab(tab);
    }

    const goBack = () => {
        save();
        history.goBack();
    }

    const changeTabSwipe = (dir) => {
        if (dir === directions.LEFT) {
            if (tab === tabs.EDIT) return changeTab(tabs.VIEW);
            return;
        }
        if (dir === directions.RIGHT) {
            if (tab === tabs.VIEW) return changeTab(tabs.EDIT);
            return goBack();
        }
    }

    return (
        <Swipeable
            style={{ height: '100%'}}
            delta={40}
            onSwipedRight={() => changeTabSwipe(directions.RIGHT)}
            onSwipedLeft={() => changeTabSwipe(directions.LEFT)}
        >
            <EditorStyled>
                <Toolbar>
                    <BackButton callback={save} />
                </Toolbar>
                <Tabs>
                    <button className={tab === tabs.EDIT ? 'active' : ''} onClick={() => changeTab(tabs.EDIT)}>{tabs.EDIT}</button>
                    <button className={tab === tabs.VIEW ? 'active' : ''} onClick={() => changeTab(tabs.VIEW)}>{tabs.VIEW}</button>
                </Tabs>
                {
                    (tab === tabs.EDIT)
                    ? <TextEditor
                        title={title}
                        body={body}
                        setTitle={setTitle}
                        setBody={setBody}
                        save={save}
                    />
                    : <MarkdownPanel note={note} />
                }
            </EditorStyled>
        </Swipeable>
    )
}

const EditorStyled = styled('div')`
    height: 100%;
    overflow: hidden;
`;

const Toolbar = styled('header')`
    width: 100%;
    height: 50px;
`;

const Tabs = styled('div')`
    display: flex;
    width: 100%;
    height: 40px;

    button {
        background-color: ${props => props.theme.colors.bg};
        color: ${props => props.theme.colors.text};
        font-family: ${props => props.theme.fonts.family};
        letter-spacing: 1px;
        width: 50%;
        padding: 1em;
        border: none;

        transition: background .25s ease;

        &.active {
            background-color: #405def;
            background: radial-gradient(circle farthest-corner at 120% 80%, #63d6d0, transparent), #405def;

            &:hover {
                background-color: #3046b5;
            }
        }

        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.colors.bgLight};
        }
    }
`

export default withRouter(Editor);