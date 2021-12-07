import { render, screen } from '@testing-library/react';

import Button from '.';

const props = {
  size: 'large',
  font: 'normal',
  label: 'default label',
  master: '',
  disabled: false,
  onClick: () => {}
}

describe('<Button />', () => {
  it('should render a black button with yellow text', () => {
    render(<Button {...props} master="Luke Skywalker" />);

    expect(screen.getByText(props.label)).toHaveStyle({
      backgroundColor: '#2a2a2a',
      color: '#fbfe63'
    });
  });

  it('should render a white button with black text', () => {
    render(<Button {...props} master="Darth Vader" />);

    expect(screen.getByText(props.label)).toHaveStyle({
      backgroundColor: '#fff',
      color: '#2a2a2a'
    });
  });

  it('should render a small button', () => {
    render(<Button {...props} size="small" />);

    expect(screen.getByText(props.label)).toHaveStyle({
      width: '189px'
    });
  });

  it('should render a large button', () => {
    render(<Button {...props} size="large" />);

    expect(screen.getByText(props.label)).toHaveStyle({
      width: '347px'
    });
  });

  it('should not be clickable', () => {
    render(<Button {...props} disabled={true} />);

    expect(screen.getByText(props.label)).not.toBeEnabled();
  });

  it('should match the snapshot', () => {
    const { container } = render(<Button {...props} />);

    expect(container).toMatchSnapshot();
  });
});
