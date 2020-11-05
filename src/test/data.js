import React from 'react'
export default class Data extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
       items:''
      };
    }
  
    componentDidMount() {
      fetch("/src/reducers/text.json")
        .then((result)=>{
            console.log(result)
            return result.json();
        }).then((data)=>{
              console.log(data);  
        });
        
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      console.log(this.state.items)
     return <div>Hello</div>;
    }
  }