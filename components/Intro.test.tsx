import { render } from '@testing-library/react';
import Intro from '@/components/Intro';

describe('Home', () => {
  it('matches snapshot', () => {
    const { container } = render(<Intro />);

    expect(container).toMatchSnapshot();
  });
});
