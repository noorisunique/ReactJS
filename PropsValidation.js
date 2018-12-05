import React, {Component} from 'react';
import PropTypes from 'prop-types'
class App extends Component{
    
    render(){
        return(
            <div>
            <h1>Arrays:{this.props.propArray}</h1>
            <h1>Bool:{this.props.propBool ?"True":"False"}</h1>
            <h1>Func:{this.props.propFunc(3)}</h1>
            <h1>Number:{this.props.propNumber}</h1>
            <h1>String:{this.props.propString}</h1>
            <h1>Object:{this.props.propObject.objectName1}</h1>
            <h1>Object:{this.props.propObject.objectName2}</h1>
            <h1>Object:{this.props.propObject.objectName3}</h1>
            </div>
        );
    }
}
App.propsTypes={
    propArray:PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString:PropTypes.string,
    propObject:PropTypes.object
}
App.defaultProps={
    propArray:[1,2,3,4],
    propBool: true,
    propFunc: function(e){return e},
    propNumber: 1,
    propString:"String Value...",
    propObject:{
        objectName1:"objectName1",
        objectName2:"objectName2",
        objectName3:"objectName3",
        
    }


}

export default App;