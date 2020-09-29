import React, { Component } from 'react';
class AniText extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="text">
                {this.props.text && <span>{this.props.text}</span>}
            </div>
         );
    }
}
 
export default AniText;