import React, { Component } from 'react';

import {StarShipConsumer} from './Context'
import XPagination from './Pagination'
import StarShip from './StarShip'


class starShipList extends Component {

    //-----> declaring the local state to hold our recieved star ships
    state = {
        starShips: []
    }


    //----End of state declaraton
    render() {
        return (
            <React.Fragment>
                <div className="container">
                
                <StarShipConsumer>
                    {value =>{
                        //----getting the variables from the consumer
                        const {starShips,pageNumbers, currentPage, itemsPerPage, changePage} = value

                        //----> you can perfom a number of initialisations hia

                        //------> Determinig the products to display -----
                        const indexOfLastStarShip = currentPage * itemsPerPage;
                        const indexOfFirstStarShip = indexOfLastStarShip - itemsPerPage;
                        const currentStarShips = starShips.slice(indexOfFirstStarShip, indexOfLastStarShip);


                            console.log("---"+currentStarShips)

                        //----Rendering the starship
                        const renderStarShips = currentStarShips.map(starShip => {
                            return (
                                <React.Fragment>
                                    <StarShip  key ={starShip.id} starShip ={starShip} />

                                </React.Fragment>
                                
                            )


                        })



                     


                        return(
                        <React.Fragment>
                          
                          <div className="my-5">
                          {renderStarShips}

                          </div>
                          <XPagination/>
                          
                        </React.Fragment>
                           




                        )



                    }}
                    
                    </StarShipConsumer>
                </div>
            </React.Fragment>
        );
    }
}

export default starShipList;