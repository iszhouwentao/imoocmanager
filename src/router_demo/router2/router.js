import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Topic from "../router1/Topic";
import About from "../router1/About";
import Main from "../router1/Main";
import Home from './Home'

export default class IRouter extends React.Component{

    render(){
        return(
            <HashRouter>
                <Home>
                    <Route path="/topic" component={Topic}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" component={Main}/>
                </Home>
            </HashRouter>
        )
    }
}