import React, {Component} from 'react';
const API="http://localhost:8080/get";

class App extends Component{
    constructor(){
        super();
        this.state={
            hits:[]
        }
    };

    componentDidMount(){
        fetch(API)
        .then((res)=>res.json())
        .then(data=>this.setState({data:data.hits}))
    }

    render(){
        return(
            <div>
            <input type="text" value={this.state.data} onChange={this.updateState}/>
            <h1>{this.state.data}</h1>
            </div>

        );
    }
}


export default App;