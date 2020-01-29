import React, { Component } from 'react';
import SocialLogin from 'react-social-login';
import { Avatar, Icon } from 'antd';

class SocialButton extends Component {
    render() {
        return (
            <Avatar icon="user"  onClick={this.props.triggerLogin} {...this.props}>
                { this.props.children }
            </Avatar>
           
        );
    }
}

export default SocialLogin(SocialButton);

