import React from 'react';
import { Row,Col } from 'antd';
import Header from './components/Header'
//默认会导入Header下面的index.js
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'
import Home from './pages/home'
// import  './components/NavLeft/index.css'
export default class Admin extends React.Component{

    render(){
        return(
          <Row className="container">
              <Col span="3" className="nav-left">
                  <NavLeft/>
              </Col>
              <Col span="21" className="main">
                  <Header/>
                  <Row className="content">
                      <Home></Home>
                  </Row>
                  <Footer/>
              </Col>
          </Row>
        )
    }
}
