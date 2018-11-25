import React from 'react';
import styled from 'react-emotion';
import { withRouter } from "react-router";

function ArrowButton({ history, callback }) {
    const goBack = () => {
        if (callback) {
            callback();
        }
        history.goBack();
    }

    return (
        <Back onClick={goBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
        </Back>
        
    )
}

const Back = styled('button')`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;

    .feather-arrow-left {
        color: white;
    }

    &:hover {
        cursor: pointer;
    }
`;

const BackButton = withRouter(ArrowButton);

function PlusButton({ onClick }) {
    return (
        <Plus onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </Plus>
    )
}

const Plus = styled('button')`
    padding: .5em 2em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: ${props => props.theme.colors.gradient};
    border-radius: 4px;

    .feather {
        color: white;
    }

    &:hover {
        cursor: pointer;
    }
`;

function DeleteButton({ onClick }) {
    return (
        <Delete onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
        </Delete>
    )
}

const Delete = styled('button')`
    width: 40px;

    .feather {
        color: white;
    }

    &:hover {
        cursor: pointer;
    }
`;

export {
    BackButton,
    PlusButton,
    DeleteButton
}