import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom'
import App from '../App'

 it("Check if App component is rendered", () => {
    const tree = renderer.create(
    <Router><App /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
})