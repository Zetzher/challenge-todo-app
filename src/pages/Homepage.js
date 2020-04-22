import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import todoapp from '../lib/todoservice';

class Homepage extends Component {
    constructor() {
      super();
      this.state = {
        id: "",
        title: "",
        body: "",
        titleedit: "",
        bodyedit: ""
      };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        todoapp.postTareas({ title, body });
      };

    getTareas = () =>{
    todoapp
    .getTareas()
    .then((data) => 
    
        this.setState({
            id: data._id,
            nombre: data.title,
            body: data.body
        })
        )
    }

    deleteElement(id){
        todoapp.deleteTareas(id)
    }




render(){
    const { title, body } = this.state
    const { id } = this.state
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

        <div className="display-tareas">
            <h1>Tareas traidas de la API:</h1>
            <h4>{this.state.titleedit}</h4>
            <h4>{this.state.bodyedit}</h4>
            <Link to={`/edit/${id}`}>
                <button>Edita esta tarea</button>
            </Link>
            <button className="estilo-botones-evento" onClick={(e) => this.deleteElement(this.state._id)}>
            Borrar evento
          </button>
        </div>
    </>
    )}
}

export default Homepage