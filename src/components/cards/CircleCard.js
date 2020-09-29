import React, { Component } from 'react';
class CircleCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="circle-card-container">
                <div className="circle-card-inside">
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default CircleCard;