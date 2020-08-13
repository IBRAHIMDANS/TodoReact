import React from 'react';
import { fireEvent, getByTestId, getByText, render } from '@testing-library/react';
import { AddItem, TodoList } from '../components';

describe('Todolist  component test ', () => {
    test(' Check Text No Todo', () => {
        const { getByText } = render(<TodoList/>);
        const linkElement = getByText(/Pas de Todo/i);
        expect(linkElement).toBeInTheDocument();
    });
    test(' Check counter is empty', () => {
        const { getByText } = render(<TodoList/>);
        const linkElement = getByText(/Nombre de todos est : 0/i);
        expect(linkElement).toBeInTheDocument();
    });
    // test(' fill imput and submit ', () => {
    //     const { getByTestId, getByText } = render(<AddItem/>);
    //
    //     const input = getByTestId(/items/i);
    //     fireEvent.change(input, { target: { value: 'food' } });
    //     fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    //     expect(getByText(/Nombre de todos est : 0/i)).toBe(/Nombre de todos est : 1/i);
    // });

});
