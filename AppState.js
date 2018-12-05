import React, {Component} from 'react';
class App extends Component{
    constructor(){
        super();
        this.state={
           header:'Header',
           content:'Content'
        }
    }
    render(){
        return(
            <div>
            <h1>{this.state.header}</h1>
            <h1>{this.state.content}</h1>
            
            </div>

        );
    }
}

export default App;