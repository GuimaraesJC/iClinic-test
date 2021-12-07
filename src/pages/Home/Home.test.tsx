import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';


import Home from '.';

describe('<Home />', () => {
  it('should have a button with label "START"', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const buttonElement = screen.getByText(/start/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it(`should contain the creator's name`, () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const subtitleElement = screen.getByRole('heading', { level: 2 });
    expect(subtitleElement).toContainHTML('<span>Jean Carlos Guimarães</span>');
  });

  it('should match the snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
