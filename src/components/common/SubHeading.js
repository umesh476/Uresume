import React, { Component } from 'react';
class SubHeading extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sub-heading">
                {this.props.text && <span>{this.props.text}</span>}
            </div>
         );
    }
}
 
export default SubHeading;