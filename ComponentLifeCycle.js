import React, {Component} from 'react';
class App extends Component{
    constructor(){
        super();
        this.state={
            data:0
        }
        this.setNewNumber=this.setNewNumber.bind(this);
    };
    setNewNumber(){
        this.setState({data:this.state.data+1});
    }
    render(){
        return(
            <div>
            <button onClick={this.setNewNumber}>Set State</button>
            <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}
class Content extends Component{
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillReceiveProps(newProps) {    
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(newProps, newState){
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
     }
     componentWillUnmount() {
        console.log('componentWillUnmount')
     }
    
    render(){
        return (
            <div>
               <h3>{this.props.myNumber}</h3>
            </div>
         );
    }
}
export default App;