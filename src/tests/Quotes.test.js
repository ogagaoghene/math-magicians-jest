import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../Components/Quotes'

describe("Snapshot testing", () => {
  it("Check if Quotes component is rendered", () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  }); 

  it('renders quote', () => {
    const { getByText } = render(<Quotes />);
    expect( screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms. It is about understanding.') ).toBeInTheDocument();
   });
})

