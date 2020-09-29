import React, { Component } from 'react';
class MainHeading extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main-heading">
                {this.props.text && <span>{this.props.text}</span>}
            </div>
         );
    }
}
 
export default MainHeading;