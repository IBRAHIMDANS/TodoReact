import React from 'react';
import { AppContext } from './context/AppContext';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import { AddItem, TodoList } from './components';
import useTodoState from './hooks/useTodoState';

function App() {
    const { todos, addTodo, deleteTodo, resetTodo } = useTodoState([]);
    return (
        <div className="App">
            <AppBarComponent position="static" color={'primary'}>
                Todo App React
            </AppBarComponent>
            <AppContext.Provider value={{
                todos,
                addTodo,
                deleteTodo,
                resetTodo
            }}>
                <AddItem/>
                <TodoList/>
            </AppContext.Provider>
        </div>
    );
}
const AppBarComponent = styled(AppBar)`
display: flex;
padding: 1em;
`;

export default App;
