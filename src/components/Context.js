import React, { Component } from 'react';
import axios from 'axios' //--for perforning http requests

import Data from './Data'





//----Creating a starShip Context
const StarShipContext = React.createContext();

/*
1.We shall be using the StarShipContext context API to pass data across all the components using th StarShip Provider
2. We shall wrap the StarShip provider on top of our application

*/ 


//----> Creating the StartShipProvider

class StarShipProvider extends Component{

//----Creating/declaring the state
constructor (props){
    super(props)
    this.state ={
        starShips : [],
        err_msg : "",
        //----pagination variables
        pageNumbers: [],
        currentPage: 1,
        itemsPerPage: 3,
        totalItems : 0,
        totalPages : 0,
        hasLogedIn : false,
        currentUser: {},
        nextPage_Url: "",
        prevPage_Url: ""
        
    }
}
//----End of state declaration

componentDidMount(){
    /* */

    //----> Getting thr starShips on Component Mounting
    this.getStarShips()
    //this.initialiseStarShips()

    //IntialiseStarShips
}


componentDidUpdate(){
    /* */
}


componentWillUnmount(){
/* */
}


//  >>>>>>>>>>>>>>>>>>>   Implementing Functions to be used
initialiseStarShips = () =>{
    this.setState(() =>{
        return {
            starShips : Data.response,
            totalItems: Data.response.length,
            totalPages : Math.floor(Data.response.length / this.state.itemsPerPage)
            
        }
    })
    
  }


   
    
    

//-------> Get StarShips function
getStarShips = () =>{
    //----> we shall use axios to perform a get request and it will the return a promise
    axios.get("https://swapi.co/api/starships/")
    .then(res => {
        console.log(res.data.results)
        //----> Setting the starShip property of the starte
        this.setState(() =>{
            return {
                starShips: res.data.results,
                nextPage_Url: res.data.next,
                prevPage_Url:res.data.previous,
                totalItems: res.data.results.length,
                itemsPerPage: res.data.results.length,
                totalPages : Math.floor(res.data.results.length / this.state.itemsPerPage)
            }
        })

    })
}

    
//---------Function to navigate to the next webpage
    
    nextPage_link = () => {

        if (this.state.nextPage_Url !== null) {
            axios.get(this.state.nextPage_Url)
            .then(res => {
                console.log(res.data.results)
                //----> Setting the starShip property of the starte
                this.setState(() =>{
                    return {
                        starShips: res.data.results,
                        nextPage_Url: res.data.next,
                        prevPage_Url: res.data.previous,
                        itemsPerPage: res.data.results.length,
                        totalItems: res.data.results.length,
                        totalPages : Math.floor(res.data.results.length / this.state.itemsPerPage)
                    }
                })
        
            })

        }
    
}

    
//-------------------End of Next webpage

    
//-----------------Navigating to the previous page
    prevPage_link = () => {
        if (this.state.prevPage_Url !== null) {
            axios.get(this.state.prevPage_Url)
            .then(res => {
                console.log(res.data.results)
                //----> Setting the starShip property of the starte
                this.setState(() =>{
                    return {
                        starShips: res.data.results,
                        nextPage_Url: res.data.next,
                        prevPage_Url:res.data.previous,
                        totalItems: res.data.results.length,
                        itemsPerPage: res.data.results.length,
                        totalPages : Math.floor(res.data.results.length / this.state.itemsPerPage)
                    }
                })
        
            })

        }
        
    }
//--------------------End of Previous Page
showMessage =() =>{
    console.log("someone clicked changePage")

}

//------> Handle Social Login Success
handleSocialLogin =(user) => {

    console.log(user.profile)

    this.setState(()=>{
        return{
            hasLogedIn: true,
            user : user.profile,
            currentUser : user.profile

        }

    })

}


//--------



//---------> Handle Social Login Failure
handleSocialLoginFailure =(err) =>{
    this.setState(()=>{
        return{
            hasLogedIn: false,
            user : []

        }

    })

}



//--------


//-------->  Changing a page-----
changePage =(page) =>{       
    this.setState( () =>{
        return {
            currentPage: parseInt(page),
            err_msg : "sdsdsd",
        }
    }
   
    )
  }
//------- End of Changing page

//------> NextPage 
nextPage = () =>{
       this.state.currentPage !== this.state.totalPages + 1?
       this.setState( () =>{      
        return {
           currentPage : Number(this.state.currentPage) + 1,          
            err_msg : "sdsdsd",
        }
    })
        : 
        this.setState( () =>{      
            return {
               currentPage : Number(this.state.currentPage) ,              
                err_msg : "sdsdsd",
            }
        })
 }



//------> Previous Page
prevPage = () =>{
    this.state.currentPage !== 1?
    this.setState( () =>{   
     return {
        currentPage : Number(this.state.currentPage) - 1,       
         err_msg : "sdsdsd",
     }
 })
     : 
     this.setState( () =>{   
         return {
            currentPage : Number(this.state.currentPage) ,           
             err_msg : "sdsdsd",
         }
     })

}


//-----> Go to Home Page -----
homePage = () =>{
    this.setState( () =>{   
        return {
           currentPage : 1 ,           
            err_msg : "sdsdsd",
        }
    })

}
// >>>>>>>>> End of Functions

render(){

    return(
        <StarShipContext.Provider value={{...this.state, 
        getStarShips : this.getStarShips,
        changePage :this.changePage,
        showMessage :this.showMessage,
        nextPage : this.nextPage,
        prevPage : this.prevPage,
        homePage : this.homePage,    
        handleSocialLogin : this.handleSocialLogin,
            handleSocialLoginFailure: this.handleSocialLoginFailure,
            prevPage_link: this.prevPage_link,
            nextPage_link : this.nextPage_link
        
        }}>
             {this.props.children}
        </StarShipContext.Provider>
    )
}




}



//----->  Creating the Startship Consumer
const StarShipConsumer = StarShipContext.Consumer;


//------> So we shall export both the starship Provider and Consumer
export {StarShipProvider,StarShipConsumer}