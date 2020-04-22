import React, { Component } from 'react';
import todoapp from '../lib/todoservice';


class Editareas extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: props.match.params.id,
        title: "",
        body: ""
      };
}

    handleFormSubmit(){
        const { title, body } = this.state;
        todoapp.editTareas({ title, body });
        this.props.history.push("/")
    }

    handlechange( event ) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


render(){
    const { title, body } = this.state

    return (
        <>
            <form onSubmit={this.handleFormSubmit} className="display">
            <label>Nombre de evento:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />

            <label>Descripción de la tarea:</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />


            <input
              type="submit"
              value="Crear Tarea"
            />
          </form>


        </>
    )
}
}



export default Editareas