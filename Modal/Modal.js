/*
props:
1. functions : closeModal- sets the state of the modal as false in the parent component

components:
1. Add any component inside the modal at the specified place 

Required Library:-
1. @fortawesome/react-fontawesome
2. @fortawesome/free-solid-svg-icons
*/



import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';

class Modal extends Component{
    constructor(){
        super();
        this.handleModalClose = this.handleModalClose.bind(this);
    }
    
    handleModalClose(){
        this.props.closeModal();
	/* this function is passed by the parent component to set the state of modal as false*/
    }

    render(){
        return(
            <div className = "container-fluid fixed-top" 
                style = {{
                            zIndex:'3',
                            opacity:'1.0',
                            height:'100vh',
                            backgroundColor:'#f3f7f7'
                        }}
            >
                <div className = "row no-gutters align-items-center justify-content-center">
                    <div className = "col text-right">
                        <FontAwesomeIcon
                            className = "m-3"
                            style = {{cursor:'pointer'}}
                            icon = {faWindowClose} 
                            onClick = {this.handleModalClose}
                            size = '3x'
                            />
                    </div>
                </div>
                <div className = "row no-gutters align-items-center justify-content-center">
                    <div className = "col-lg-4 col-12">
			{/*
				Add the component to be displayed inside modal here!!!				
				*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
