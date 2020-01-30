import React from 'react';
import { shallow, mount } from '../Enzyme';
import XPagination from './Pagination';
import renderer from 'react-test-renderer';
import {StarShipProvider} from './Context'


describe("Testing the Pagination Component", () =>{


 //------Doing SnapShot Testing---------------------------
    it("Matches the previous snap shot", () => {
     
    const component = renderer.create( < StarShipProvider ><XPagination  />      
        </StarShipProvider>).toJSON();
    expect(component).toMatchSnapshot()
    
});
//------- End of Snapshot Testing--------------------



  //-----App Initializing Test-----
  it("Should Run Properly",()=>{
    shallow(<XPagination />)
  });
  //-----End of Initializing Test----
    
    
    

    
  
 

})