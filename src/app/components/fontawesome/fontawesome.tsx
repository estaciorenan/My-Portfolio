import React, { Component } from 'react' 
import '@fortawesome/fontawesome-free/js/all.js'; 

export interface ClasseFontawesome {
    classe:string
}

const Fontawesome = ({classe}:ClasseFontawesome) => { 
    return <i className={classe|| ''} style={{ width: "20px" }}></i> 
} 
export default Fontawesome;