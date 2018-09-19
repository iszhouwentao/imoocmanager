import React from 'react'
import {HashRouter ,Route ,Link ,Switch } from 'react-router-dom'
import About from './About'
import Main from './Main'
import Topic from './Topic'


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
                    <Switch>

                        <Route path="/topic" component={Topic}/>
                        <Route path="/about" component={About}/>
                        <Route path="/" component={Main}/>
                    </Switch>
                </div>


            </HashRouter>
        )
    }
}


