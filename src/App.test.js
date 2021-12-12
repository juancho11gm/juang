import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React App Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/JuanG/i);
  expect(linkElement).toBeInTheDocument();
});
