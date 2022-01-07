import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders a Header', () => {
    render(<Header />);

    const heading = screen.getByText(/about me/i);
    expect(heading).toBeInTheDocument();
  });
});
