import React, {Component} from 'react';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            total: 0
        }
        this.handleChange=this.handleChange.bind(this);
        this.add=this.add.bind(this);        
    };
    handleChange(e){
        const {name, value} = e.target;
        this.setState({ [name]:value })
    }
    add(){
        const{number1, number2} = this.state;
        this.setState({
            total: (parseInt(number1)+parseInt(number2))
        });
    }
    render(){
        const {total} = this.state;
        return(
            <div>
            <div>{total}</div>
                 <div>
                     <label>Number 1</label>
                     <input type="text" name="number1" onChange={this.handleChange} />
                </div>
                <div>
                     <label>Number 2</label>
                     <input type="text" name="number2" onChange={this.handleChange}/>
                </div>
                <button onClick={this.add}>Add</button>
            </div>

        );
    }
}


export default App;