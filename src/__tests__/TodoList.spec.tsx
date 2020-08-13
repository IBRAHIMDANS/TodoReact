import React from 'react';
import { render } from '@testing-library/react';
import { TodoList } from '../components';
import userEvent from '@testing-library/user-event';

describe("Todolist  component test ", () => {
    test(' Button reset text is Reset Todo', () => {
        const { getByText } = render(<TodoList />);
        const linkElement = getByText(/Reset Todo/i);
        expect(linkElement).toBeInTheDocument();
    });
    test(' Button reset onclick ', () => {
        const mockOnClick = jest.fn();
        const { getByText } = render(<TodoList />)
        const linkElement = userEvent.click(getByText(/Reset Todo/i))
        userEvent.click(getByText(/Reset Todo/i))
        expect(linkElement).toBeUndefined();
    });

});
