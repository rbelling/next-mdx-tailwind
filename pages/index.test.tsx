import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading and matches snapshot', () => {
    const { container } = render(<Home />);

    const heading = screen.getByTestId('heading');

    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
