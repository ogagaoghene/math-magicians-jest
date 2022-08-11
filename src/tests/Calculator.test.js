import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';

describe('Snapshot testing', () => {
  it('Check if Calculator component is rendered', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
