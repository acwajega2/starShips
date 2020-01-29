
import React from 'react'
import { Layout, Menu,PageHeader,Button  } from 'antd';
import { StarShipConsumer } from '../components/Context';
import SocialButton from '../components/SocialButton';

const { Header, Content, Footer } = Layout;
const CustomLayout = (props) =>{
    return(
      <StarShipConsumer>
      {value =>{
        const {nextPage,prevPage,homePage} = value
        const handleSocialLogin = (user) => {
          console.log(user)
        }
         
        const handleSocialLoginFailure = (err) => {
          console.error(err)
        }

        return(
          <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        
        <Menu.Item key="1" onClick={homePage}>Home </Menu.Item>
        <Menu.Item key="2" onClick={prevPage}>Previous Page</Menu.Item>
        <Menu.Item key="3" onClick={nextPage}>Next Page</Menu.Item>
        <Menu.Item ><SocialButton
      provider='facebook'
      appId='692907114576533'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Facebook
    </SocialButton></Menu.Item>
      </Menu>
    </Header>
    <PageHeader
    style={{
      border: '1px solid rgb(235, 237, 240)',
    }}
    onBack={() => null}
    title="Titleggggggggg"
    subTitle="This is a subtitle"
  />
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          {props.children}
     </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>StarShips ©2020 Created by Chris Allan Wajega</Footer>
  </Layout>

        )
      }}


     
        

  </StarShipConsumer>


    );
}
  

export default CustomLayout