import React, {Component} from 'react';
class Header extends Component{
    render(){
        return(
            <div>
                <h2>Header</h2>
            </div>
        );
    }
}

class Content extends Component{
    render(){
        return(
            <div>
                <h2>Content</h2>
            </div>
        );
    }
}
class App extends Component{
    render(){
        var i=1;
        return(
            <div>
            <Header></Header>   
            <Content></Content>
            
            </div>

        );
    }
}

export default App;