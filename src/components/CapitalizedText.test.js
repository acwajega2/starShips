import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from '../Enzyme';
import CapitalizedText from './CapitalizedText'





describe("Testing the CapitalizedText Component", () => {
    
//------Doing SnapShot Testing---------------------------
    it("Matches the previous snap shot", () => {
        const sampleText ="hello wajega"
        const component = renderer.create(<CapitalizedText text ={sampleText}/>).toJSON();
        expect(component).toMatchSnapshot()
    });

//------- End of Snapshot Testing--------------------

//----- Testing if the StarShip Provider Initializes Properly
    it("Should Initialize properly", () => {
        const sampleText ="hello wajega"
        shallow(<CapitalizedText text ={sampleText}/>)
    })

    
//---------End of Initialization Testing
    



})