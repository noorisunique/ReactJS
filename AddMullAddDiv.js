import React, {Component} from 'react';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            number1:0,
            number2:0,
            total:0
        }
        this.changeHandle=this.changeHandle.bind(this);
        this.add=this.add.bind(this);
        this.mul =this.mul.bind(this);
        this.sub=this.sub.bind(this);
        this.div=this.div.bind(this);
    };
    changeHandle(e){
        const {name,value}=e.target;
        this.setState({[name]:value});
    }
    add(){
        const {number1,number2}= this.state;
        this.setState({
            total:(parseInt(number1)+parseInt(number2))
        });
    }
    mul(){
        const {number1,number2}= this.state;
        this.setState({
            total:(parseInt(number1)*parseInt(number2))
        });
    }
    sub(){
        const {number1,number2}= this.state;
        this.setState({
            total:(parseInt(number1)-parseInt(number2))
        });
    }
    div(){
        const {number1,number2}= this.state;
        this.setState({
            total:(parseInt(number1)/parseInt(number2))
        });
    }
    
    render(){
        const {total} =this.state;
        return(
                <div>
                    {total}
                    <div>
                    Number 1 
                    <input type="text" name="number1" onChange={this.changeHandle}/>
                    </div>
                    <div>
                    Number 1 
                    <input type="text" name="number2" onChange={this.changeHandle}/>
                    </div>
                    <div>
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.mul}>Mul</button>
                    <button onClick={this.sub}>Sub</button>
                    <button onClick={this.div}>Div</button>                       
                    </div>
                </div>
        );
    }
}

export default App;