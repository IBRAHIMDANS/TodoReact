import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('check title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Todo App React/i);
  expect(linkElement).toBeInTheDocument();
});
