import React, { Component } from 'react';

class CapitalizedText extends Component {
  
    render() {
        const jsUcfirst = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
             
         }
    
        return (
            jsUcfirst(this.props.text)
            
        );
    }
}

export default CapitalizedText;