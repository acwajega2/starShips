import React from 'react';
import { shallow, mount } from '../Enzyme';
import StarShip from './StarShip';
import renderer from 'react-test-renderer';



describe("Testing the StarShip Component", () =>{


  //------Doing SnapShot Testing---------------------------

    it("Matches the previous snap shot", () => {
        const sampleStarShip = {
            name: "shipA",
            crew: 23,
            passengers: 10,
            hyperdrive_rating : 2.4
            
      }
        const component = renderer.create(<StarShip key={2} starShip={sampleStarShip} />).toJSON();
        expect(component).toMatchSnapshot()
        
  });
  //------- End of Snapshot Testing--------------------
    
//----- Testing if the StarShip Component Initializes Properly
    it("Should Initialize properly", () => {
        const sampleStarShip = {
            name: "shipA",
            crew: 23,
            passengers: 10,
            hyperdrive_rating : 2.4
            
      }
        shallow(<StarShip key={2} starShip={sampleStarShip} />)
    })

    
//---------End of Initialization Testing
    
    
    
    
    

    
  
 

})