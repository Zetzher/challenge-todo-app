import React, { Component } from 'react';
import todoapp from '../lib/todoservice';


class Editareas extends Component {
    constructor() {
      super();
      this.state = {
        title: "",
        body: ""
      };
  }

    handleFormSubmit = async (event) =>{
        event.preventDefault();
        const { title, body } = this.state;
        const id = this.props.match.params.id;
        todoapp.editTareas({ id, title, body });
        this.props.history.push("/")
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


render(){
    const { title, body } = this.state
    return (
      <>
      <div>
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
      </div>
      </>
    )
}
}



export default Editareas