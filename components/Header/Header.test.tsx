import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders Header with a navbar list', () => {
    render(<Header />);

    const aboutMe = screen.getByText(/about me/i);
    const work = screen.getByText(/work/i);
    const projects = screen.getByText(/projects/i);

    expect(aboutMe).toBeInTheDocument();
    expect(work).toBeInTheDocument();
    expect(projects).toBeInTheDocument();
  });
});
