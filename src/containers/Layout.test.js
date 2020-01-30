import React from 'react';
import { shallow, mount } from '../Enzyme';

import renderer from 'react-test-renderer';
import { StarShipProvider } from '../components/Context';

import CustomLayout from './Layout';


describe("Testing the Custom Layout", () => {
    
    //------Doing SnapShot Testing---------------------------
    it("Matches the previous snap shot", () => {
        const sampleLayout = () => {
            
            return (
                <StarShipProvider>
                    <CustomLayout />                   
                 
                </StarShipProvider>
                
            )
        }    


            const component = shallow(sampleLayout())
            expect(component).toMatchSnapshot()
        });
    
    //------- End of Snapshot Testing--------------------
    
    //----- Testing if the StarShip Provider Initializes Properly
    it("Should Initialize properly", () => {
        const sampleLayout = () => {
            
            return (
                <StarShipProvider>
                    <CustomLayout >
                     
                    </CustomLayout>

                </StarShipProvider>
                
            )
        }   

            shallow(sampleLayout())
        })
    
        
    //---------End of Initialization Testing
        
    
    
    
    })