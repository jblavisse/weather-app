import React, { Component } from 'react';

class Period extends Component {
    state = {  }
    render() { 
        let period = this.props.period;
        return ( 
        <div className="period">
            {period.main.temp}<br/>
            {period.dt_txt}
        </div>
        );
    }
}
 
export default Period;