import React, { Component } from 'react';
import { StarShipConsumer } from './Context';
import { Pagination } from 'antd';



class XPagination extends Component {
    onChange = page =>{
            
        console.log(page)

        

        }
    render() {
        
        return (
            <StarShipConsumer>
                {value =>{

                    const {starShips,pageNumbers,itemsPerPage,changePage,currentPage,totalItems} = value;

                    //Getting PageNumbers
                    for (let i = 1; i <= Math.ceil(starShips.length / itemsPerPage); i++) {
                        pageNumbers.push(i);
                      }
                      

                      

                      
                      //--Rendering the page numbers
                      const renderPageNumbers = (
                          <React.Fragment>
                             <Pagination pageSize ={itemsPerPage}  current={currentPage} onChange={changePage} total={totalItems} />
                        
                          </React.Fragment>
                        
                      )
                       
                        
                      return(
                        <React.Fragment>
                            {renderPageNumbers}
                        </React.Fragment>
                       
                                                
                
                    )


                }}
            </StarShipConsumer>
        );
    }
}

export default XPagination;