import { createContext } from 'react';

export type AppContextProps = {
    todos,
    addTodo,
    updateTodo
    deleteTodo,
    resetTodo,
}

export const AppContext = createContext<Partial<AppContextProps>>({
    todos: [],
    addTodo: (todoText: any) => {
    },
    updateTodo: (todoText: any) => {
    },
    deleteTodo: (todoIndex: any) => {
    },
    resetTodo: (todoText: any) => {
    },

});
