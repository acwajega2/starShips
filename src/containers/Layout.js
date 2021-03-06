
import React from 'react'
import { Layout, Menu,PageHeader,Button,Icon,Avatar   } from 'antd';
import { StarShipConsumer } from '../components/Context';
import SocialLabel from '../components/SocialLabel'

const { SubMenu } = Menu;

const { Header, Content, Footer } = Layout;
const CustomLayout = (props) =>{
    return(
      <StarShipConsumer>
      {value =>{
        const {nextPage_link,prevPage_link,homePage,currentUser,handleSocialLoginFailure,handleSocialLogin,hasLogedIn} = value
        

        return(
          <Layout>
            
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      
      
      <div className="logo" />  
      
     
      <Menu  theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' , color: "#FFFFFF"}}>
        <Menu.Item key="home" onClick={homePage}>
          <Icon type="home" />
          Home
        </Menu.Item>

        <Menu.Item key="arrow-left" onClick={prevPage_link}>
          <Icon type="arrow-left" />
          Previous Page
        </Menu.Item>

        <Menu.Item key="arrow-right" onClick={nextPage_link}>
          <Icon type="arrow-right" />
          Next Page
        </Menu.Item>
                
        <Menu.Item key="alipay">
        <Icon type="bars" />         
      
        </Menu.Item>
        
       
        { hasLogedIn == false ? 
         <SubMenu
         title={
           <span className="submenu-title-wrapper">
             <Icon type="user" />
             Social Login
           </span>
         }
       >
         <Menu.ItemGroup >
           <Menu.Item>
           <SocialLabel
         provider='facebook'
         appId='692907114576533'
         onLoginSuccess={handleSocialLogin}
         onLoginFailure={handleSocialLoginFailure}>
          <Icon type="facebook" />Facebook
         </SocialLabel>

           </Menu.Item>
         
           
           <Menu.Item key="setting:2" disabled><Icon type="google" />Google</Menu.Item>
           <Menu.Item key="setting:3" disabled><Icon type="github" />GitHub</Menu.Item>
         </Menu.ItemGroup>
        
       </SubMenu>

                      
        
        :
        //------------------> when the user has logged in
        <SubMenu
         title={
           <span className="submenu-title-wrapper">
             <Avatar src={currentUser.profilePicURL} />
             {currentUser.name}
           </span>
         }
       >
         <Menu.ItemGroup >
                 
           <Menu.Item key="setting:2" ><Icon type="setting" />Settings</Menu.Item>
           <Menu.Item key="setting:3" ><Icon type="logout" />Log Out</Menu.Item>
         </Menu.ItemGroup>
        
       </SubMenu>
        
        
        }
      



        
        
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