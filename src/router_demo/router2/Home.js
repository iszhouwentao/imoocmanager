import React from 'react'
import {HashRouter ,Route ,Link ,Switch } from 'react-router-dom'
import About from '../router1/About'
import Main from '../router1/Main'
import Topic from '../router1/Topic'


export default class Home extends  React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topic">Topic</Link>
                        </li>
                    </ul>
                    <hr/>
                    {this.props.children}
                </div>


            </HashRouter>
        )
    }
}


