import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../Components/Quotes';

describe('Snapshot testing', () => {
  it('Check if Quotes component is rendered', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders quote', () => {
    render(<Quotes />);
    const linkElement = screen.getByText(/Mathematics is not about numbers, equations, computations, or algorithms. It is about understanding./i);
    expect(linkElement).toBeInTheDocument();
  });
});
