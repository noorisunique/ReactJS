import React, {Component} from 'react';
class App extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
        this.setHandler=this.setHandler.bind(this);
    };
    setHandler(){
        var item=[1,2,3,4];
        var myArray=this.state.data.slice();
        myArray.push(item);
        this.setState({data:myArray});
    }
    render(){
        return(
            <div>
            <button onClick={this.setHandler}>Set State</button>
            <h1>State Array:{this.state.data}</h1>
            </div>

        );
    }
}
export default App;