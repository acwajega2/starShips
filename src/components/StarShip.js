import React, { Component } from 'react';
import {StarShipConsumer} from './Context'
import { Card, Icon, Avatar,Progress  } from 'antd';

class StarShip extends Component {
    render() {
        const { name,crew,passengers,hyperdrive_rating} = this.props.starShip;
        const { Meta } = Card;
        return (
            <React.Fragment>
                <div className="mx-auto ">
                <StarShipConsumer>
                    {value =>{
                        return(
                            <Card hoverable  bordered className="text-left"
                            title={name}>
                                <p>{"Crew : "}{ crew == 0 ? "None" :crew}</p>
                    <p>{"Passengers : "}{ passengers == 0 ? "None" :passengers}</p>
                                <p>{"Hyperdrive Class :" }
                                <Progress percent={ (hyperdrive_rating/6)* 100 === undefined ? 0 : (hyperdrive_rating/6)* 100} 
                                                                
                                 status ={ ((hyperdrive_rating/6)* 100) > 30 ? "active" : "exception"}  
                                 showInfo={false}  
                                 
                                 /></p>
                                
                           
                            
                        </Card>

                        )

                    }}
                

                </StarShipConsumer>


                </div>
            
                

        
                

            </React.Fragment>
            

        );
    }
}

export default StarShip;