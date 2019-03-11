{/*
Required Dependency : -
1.@fortawesome/react-fontawesome
2.@fortawesome/free-solid-svg-icons

Container Component
1.Can be used inside SignupLogin component and also individually
*/
}


import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser,faMobile,faKey} from '@fortawesome/free-solid-svg-icons';

class Signup extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <form>
                <div className = "form-group">
                    <div className = "border p-2 rounded" style = {{backgroundColor:'#f3f7f7'}}>
                        <div className = "d-inline-block text-center" style = {{width:'10%'}} >
                            <FontAwesomeIcon 
                                icon = {faUser}
                                size = "sm"
                            />
                        </div>
                        <input 
                            type = "text" 
                            name = "fName" 
                            className = "d-inline-block border-0" 
                            style = {{ 
                                width:'90%',
                                fontFamily:'monospace',
                                outline:'none',
                                backgroundColor:'#f3f7f7',
                                color:'#2C0703',
                                lineHeight:'1.5',
                                fontSize:'80%'
                            }}
                            placeholder = "First Name"
                        />
                    </div>
                </div>

                <div className = "form-group">
                    <div className = "border p-2 rounded" style = {{backgroundColor:'#f3f7f7'}}>
                        <div className = "d-inline-block text-center" style = {{width:'10%'}} >
                            <FontAwesomeIcon 
                                icon = {faMobile} 
                                size = "sm"
                            />
                        </div>
                        <input 
                            type = "mobile" 
                            name = "mobile" 
                            className = "d-inline-block border-0" 
                            style = {{ 
                                width:'90%',
                                fontFamily:'monospace',
                                outline:'none',
                                backgroundColor:'#f3f7f7',
                                lineHeight:'1.5',
                                color:'#2C0703',
                                fontSize:'80%'
                            }}
                            placeholder = "Mobile"
                        />
                    </div>
                </div>

                <div className = "form-group">
                    <div className = "border p-2 rounded" style = {{backgroundColor:'#f3f7f7'}}>
                        <div className = "d-inline-block text-center" style = {{width:'10%'}} >
                            <b>@</b>
                        </div>
                        <input 
                            type = "email" 
                            name = "email" 
                            className = "d-inline-block border-0" 
                            style = {{ 
                                width:'90%',
                                fontFamily:'monospace',
                                outline:'none',
                                backgroundColor:'#f3f7f7',
                                color:'#2C0703',
                                lineHeight:'1.5',
                                fontSize:'80%'
                            }}
                            placeholder = "Email"
                        />
                    </div>                        
                </div>

                <div className = "form-group">
                    <div className = "border p-2 rounded" style = {{backgroundColor:'#f3f7f7'}}>
                        <div className = "d-inline-block text-center" style = {{width:'10%'}} >
                            <FontAwesomeIcon 
                                icon = {faKey} 
                                size = "sm"
                            />
                        </div>
                        <input 
                            type = "password" 
                            name = "password" 
                            className = "d-inline-block border-0" 
                            style = {{ 
                                width:'90%',
                                fontFamily:'monospace',
                                outline:'none',
                                backgroundColor:'#f3f7f7',
                                color:'#2C0703',
                                lineHeight:'1.5',
                                fontSize:'80%'
                            }}
                            placeholder = "Password"
                        />
                    </div>                        
                </div>

                <div className = "text-right mt-4">
                    <button type = "submit" className = "btn p-2 rounded-0" 
                        style = {{
                            fontSize:'80%',
                            fontFamily:'monospace',
                            boxShadow: '0 6px 16px 0 rgba(115,143,147,.4)',
                            color:'white',
                            opacity:'0.8',
                            backgroundColor:'#5c8139'
                            }}>
                        <b>Create Account</b>
                    </button>
                </div>
            </form>
        )
    }
}

export default Signup;
