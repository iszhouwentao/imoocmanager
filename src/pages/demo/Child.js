import React from 'react'

export default class Child extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
    }

    componentWillReceiveProps(){

    }

}