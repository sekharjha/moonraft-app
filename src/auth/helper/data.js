import React from 'react'
import { Component } from 'react';
import axios from 'axios'
class Data extends Component{
    state ={
        persons:null
    }
    componentDidMount(){
        axios.get('https://react-sphene-app-80aae.firebaseio.com/.json')
        .then(res=>{
            console.log(res.data);
            this.setState({persons:res.data});
        });
    }
    render(){
        return(
        <ul>{JSON.stringify(this.state.persons)}</ul>
        )
    }
}
export default Data;