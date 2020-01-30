import React from 'react';
import { shallow, mount } from '../Enzyme';
import StarShipList from './Pagination';
import renderer from 'react-test-renderer';
import {StarShipProvider} from './Context'


describe("Testing the StarShipList Component", () =>{


 //------Doing SnapShot Testing---------------------------
    it("Matches the previous snap shot", () => {
     
    const component = renderer.create( < StarShipProvider ><StarShipList  />      
        </StarShipProvider>).toJSON();
    expect(component).toMatchSnapshot()
    
});
//------- End of Snapshot Testing--------------------



  //-----App Initializing Test-----
  it("Should Run Properly",()=>{
    shallow(<StarShipList />)
  });
  //-----End of Initializing Test----
    
    
    

    
  
 

})