import React, { Component } from 'react';


class Getarea extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.match.params.id,
        title: "",
        body: ""
      };
}

    render(){
        return (
            <>
                <div className="display-tareas">
                    <h1>Tareas traidas de la API:</h1>
                    <h4></h4>
                    <h4></h4> 
                </div>
            </>
    )}
}

export default Getarea
