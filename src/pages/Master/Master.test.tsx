import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Master from '.';

describe('<Master />', () => {
  it('should have a button with label "choose your path again, Padawan"', () => {
    render(
      <BrowserRouter>
        <Master />
      </BrowserRouter>
    );

    const buttonElement = screen.getByText(/choose your path again, padawan/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Master />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
