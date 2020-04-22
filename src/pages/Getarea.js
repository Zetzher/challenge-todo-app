import React, { Component } from 'react';
import todoapp from '../lib/todoservice';
import { Link } from 'react-router-dom';

class Getarea extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        body: ""
      };
}

    getTarea(){
        todoapp.getThatTarea(this.props.match.params.id)
        .then((data) =>
        this.setState({
            title: data.data.title,
            body: data.data.body
        })
        )
    }


componentDidMount(){
    this.getTarea()
}


    render(){
        const { title, body } = this.state
        return (
            <>
                <div className="display-tareas">
                    <h1>Tareas traidas de la API:</h1>
                    <h4>Titulo: {title}</h4>
                    <h4>Descripción: {body}</h4> 
                    <Link to="/">
                        <button>Back to home</button>
                    </Link>
                </div>
            </>
    )}
}

export default Getarea
