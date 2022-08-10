import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../Components/Quotes'

describe("Snapshot testing", () => {
    it("Check if Quotes component is rendered", () => {
        const tree = renderer.create(<Quotes />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})