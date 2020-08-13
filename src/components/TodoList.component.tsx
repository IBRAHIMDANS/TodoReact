import React, { useContext } from 'react';
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
import { AppContext } from '../context/AppContext';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import styled from 'styled-components';

export default function TodoList() {
    const { todos, deleteTodo, resetTodo } = useContext(AppContext);

    return (
        <>
            <ResetButton
                aria-label="Reset Todo"
                onClick={() => {
                    resetTodo();
                }}>
                <ClearRoundedIcon/> <Typography> Reset Todo</Typography>
            </ResetButton>
            <List>
                {todos.length === 0 &&
                <Typography> No Todo <span aria-label={'emoji cry'} role={'img'}> 😢</span></Typography>}
                {todos.map((todo, index) => (
                    <ListItem key={index.toString()} dense button>
                        <Checkbox tabIndex={-1} disableRipple/>
                        <ListItemText primary={todo}/>
                        <ListItemSecondaryAction>
                            <IconButton
                                aria-label="Delete"
                                onClick={() => {
                                    deleteTodo(index);
                                }}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
const ResetButton = styled(Button)`
display: flex;
justify-content: flex-end;
align-content: flex-end;
align-items: flex-end;
`;
