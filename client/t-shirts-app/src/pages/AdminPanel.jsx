import React from 'react';
import logo from './logo.svg';
import {
    Typography,
    Avatar,
    Paper,
    Tabs,
    Container,
    Button,
    Title,
    TextField,
  } from "@mui/material";
  const { Header, Footer, Sider, Content } = Layout;
  const MyAccount = () => {
    return(
        <div>
            <Header style={{padding:10}}>
                <Avatar style={{float:'right'}} src='./dp.png'/>
                <Title style={{color:'white'}} level={3}><Title/>
            </Header>
            <Button typr="primary">Button</Button>
        </div>
    )
}

export default App;