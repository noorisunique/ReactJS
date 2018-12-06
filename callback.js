import React, {Component} from 'react';
class App extends Component{
   

     ask(question, yes, no) {
        if (confirm(question)) 
        yes()
        else 
        no();
        
      }
      
       showOk() {
        alert( "You agreed." );
      }
      
       showCancel() {
        alert( "You canceled the execution." );
      }
      
      // usage: functions showOk, showCancel are passed as arguments to ask
      
    render(){
        this.ask("Do you agree?", this.showOk, this.showCancel);
        
        return(
            <div>
            <h1>jjjj</h1>
            </div>

        );
    }
}


export default App;