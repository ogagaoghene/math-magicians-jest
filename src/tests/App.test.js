import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import Navbar from '../Components/Navbar';

it('Check if App component is rendered', () => {
  const tree = renderer.create(
    <Router><App /></Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Home navigation link', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Calculator navigation link', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Quotes navigation link', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText(/Quotes/i);
  expect(linkElement).toBeInTheDocument();
});
