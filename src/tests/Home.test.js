import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Components/Home'

describe("Snapshot testing", () => {
    it("Check if Home component is rendered", () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})