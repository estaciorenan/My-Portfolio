import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/js/all.js';


class Fontawesome extends Component{
    render(){
        return(
            <i className={this.props.classe} style={{width: "20px"}}></i>
        )
    }
}
export default Fontawesome;