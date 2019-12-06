import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

export default class facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '', 
        email: '',
        picture: ''
    };

responseFacebook = response => {
        console.log(response);
    }


    componentClicked = () => console.log("clicked")
    
    render() {
        
            return (    
            
                <FacebookLogin
                    appId="510863782846510"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
                    )
                        
        
    }
}

