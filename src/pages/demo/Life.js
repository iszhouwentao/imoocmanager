import React from 'react'

import {Button} from 'antd'
import 'antd/dist/antd.css'

export default class Life extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        return <div>
            <p>React生命周期介绍</p>
            <Button onClick={this.handleAdd}>点击一下</Button>
            <button onClick={this.handleAdd}>点击一下</button>
            <p>{this.state.count}</p>
        </div>
    }
}