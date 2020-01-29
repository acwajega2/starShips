import React, { Component } from 'react';
import SocialLogin from 'react-social-login';
import { Menu  } from 'antd';

class SocialLabel extends Component {
    render() {
        return (
           <Menu.Item onClick={this.props.triggerLogin} {...this.props}>
               { this.props.children }
           </Menu.Item>
        );
    }
}

export default SocialLogin(SocialLabel);