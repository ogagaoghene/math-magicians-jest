import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Navbar';

describe('Snapshot testing', () => {
  it('Check if Navbar component is rendered', () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
