import { useState } from 'react';

export default initialValue => {
    const [todos, setTodos] = useState(initialValue);

    return {
        todos,
        addTodo: todoText => {
            setTodos([...todos, todoText]);
        },
        updateTodo: todo => {
            const newTodo = todos.filter((_, index) => index !== todo );
            setTodos(newTodo);
        },
        deleteTodo: todoIndex => {
            const newTodo = todos.filter((_, index) => index !== todoIndex);
            setTodos(newTodo);
        },
        resetTodo: todoText => {
            setTodos([]);
        }
    };
};
