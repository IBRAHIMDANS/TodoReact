import { createContext } from 'react';

export type AppContextProps = {
    todos,
    addTodo,
    deleteTodo,
    resetTodo
}

export const AppContext = createContext<Partial<AppContextProps>>({
    todos : [],
    addTodo: (todoText: any) => {},
    deleteTodo: (todoIndex: any) => {},
    resetTodo: (todoText: any) => {}
});
