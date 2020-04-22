import axios from "axios";

class Todoapp {
    constructor() {
        this.todoapp = axios.create({
            baseURL: "http://localhost:4000/api/v1",
            withCredentials: true,
        });
    }

    getThatTarea(id) {
        return this.todoapp
        .get(`/todos/${id}`)
        .then((data) => (data))
    }

    getTareas() {
        return this.todoapp
        .get(`/todos`)
        .then((res) => res.data)
        .catch ((err) =>console.log("error from edit evento:", err) )
    }

    postTareas( {title, body} ) {
        return this.todoapp
        .post(`/todos`, {title, body})
        .then((data) =>(data))
        .catch ((err) =>console.log("error from edit evento:", err) )
    }

    editTareas = ({id, title, body}) => {
        return this.todoapp
            .put(`/todos/${id}`, {title, body})
            .then((data) => (data))
            .catch((err) => console.log("error from evento:", err));
    }

    deleteTareas = (id) => {
        return this.todoapp
        .delete(`/todos/${id}`)
            .then((data) => (data))
            .catch((err) => console.log("error from evento:", err));
    }
}

const todoservice = new Todoapp();
export default todoservice;