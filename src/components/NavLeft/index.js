import React from 'react'
import './index.less'
import menuList from './../../config/menuConfig'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode = this.rendertMenu(menuList);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    rendertMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.rendertMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render(){
        return(
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}