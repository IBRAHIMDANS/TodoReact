import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import {
    Button,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from '@material-ui/core';
import { Add as PlusIcon, ClearRounded as ClearRoundedIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { AppContext } from '../context/AppContext';

export default function TodoList() {
    const { todos, deleteTodo, resetTodo } = useContext(AppContext);
    const [pagination, setPagination] = useState(5);
    return (
        <>
            {todos.length > 0 && <ResetButton>
                <Button
                    aria-label="Reset Todo"
                    onClick={() => resetTodo()}>
                    <ClearRoundedIcon/> <Typography> Reset Todo </Typography>
                </Button>
            </ResetButton>}
            <List>
                {todos.length === 0 &&
                <Typography> Pas de Todo <span aria-label={'emoji cry'} role={'img'}> 😢</span></Typography>}
                {todos && todos.slice(0, pagination).map((todo, index) => (
                    <ListItem key={index.toString()} dense button>
                        <Checkbox tabIndex={-1} disableRipple/>
                        <ListItemText primary={todo}/>
                        <ListItemSecondaryAction>
                            <IconButton
                                aria-label="Delete"
                                onClick={() => deleteTodo(index)}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
                {todos.length > 5 && <Button
                    aria-label="Plus"
                    onClick={() => setPagination(pagination + 5)}
                >
                    <PlusIcon/> Afficher plus
                </Button>}
                <InfosBtn>
                    <SpanInfo>Nombre de todos est : {todos.length}</SpanInfo>
                </InfosBtn>
            </List>
        </>
    );
};
const ResetButton = styled.div`
display: flex;
justify-content: flex-end;
margin: .5em;
`;
const InfosBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: .5em;
`;
const SpanInfo = styled.span`
    font-size: 14px;
    background-color: #aba9a9;
    padding: .5em;
    color: white;
`;
