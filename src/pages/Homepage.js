import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import todoapp from '../lib/todoservice';
import axios from 'axios';

class Homepage extends Component {
    constructor() {
      super();
      this.state = {
        id: "",
        title: "",
        body: "",
        titleedit: "",
        bodyedit: "",
        todo: []
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
        todo: data
      })
      ) 
      }

    deleteElement(id){
        todoapp.deleteTareas(id)
    }

componentDidMount(){
  this.getTareas()
}


render(){
    const { title, body } = this.state
    const { todo } = this.state
    
    return(
      <>
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
    {todo.map((datos) =>{
      return (
         <>
        
          <div className="display-tareas">
              <h1>Tareas traidas de la API:</h1>
              <h4>{datos.title}</h4>
              <h4>{datos.body}</h4>
              <Link to={`/see/${datos._id}`}>
                  <button>Mire esta tarea</button>
              </Link>
              <Link to={`/edit/${datos._id}`}>
                  <button>Edita esta tarea</button>
              </Link>
              <button className="estilo-botones-evento" onClick={(e) => this.deleteElement(datos._id)}>
              Borrar evento
            </button>
          </div>
      </>
      
      )})}</>
    )
   
  
  }
}

export default Homepage

