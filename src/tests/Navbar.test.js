import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Components/Navbar'

describe("Snapshot testing", () => {
    it("Check if Navbar component is rendered", () => {
        const tree = renderer.create(<Navbar />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})