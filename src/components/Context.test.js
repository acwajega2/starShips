import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from '../Enzyme';

import {StarShipProvider} from './Context'



describe("Testing the Context API", () => {
    
//------Doing SnapShot Testing---------------------------
    it("Matches the previous snap shot", () => {
        const component = renderer.create(<StarShipProvider />).toJSON();
        expect(component).toMatchSnapshot()
    });

//------- End of Snapshot Testing--------------------

//----- Testing if the StarShip Provider Initializes Properly
    it("Should Initialize properly", () => {
        shallow(<StarShipProvider/>)
    })

    
//---------End of Initialization Testing
    



})