import React, { Component } from 'react';
import axios from 'axios';
import ListEntry from './ListEntry';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputField: ''
    };
    this.getTodos = this.getTodos.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() { //when everything is done loading
    // grab all the todos
    this.getTodos();
  }

  getTodos() {
    //send GET request to our server
    axios
      .get('/api') //an async func so
      .then(todos => {
        console.log(todos)
        this.setState({
          todos: todos.data
        }, () => console.log('retrieved todos'))
      })
      .catch(err => console.log(err))
  }

  postTodo(todo) {
    //add todo to our 'database array
    axios
      .post('/api', { todo })
      .then((data) => {
        console.log(data.data) //axios is in data.data or todos.data
        this.getTodos(); //to show new todos
      })
      .catch(err => console.log(err))
  }

  deleteTodo(index) {
    console.log(index)
    axios
      // .delete('/api', { params: { index } }) //grab info from url with params : or ? query
      .delete(`/api/${index}`) //this would be using params, have to clairfy now endpoint in router!!!
      .then(response => {
        console.log(response);
        this.getTodos();
      })
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault(); //prevents page from refreshing after submit
    this.postTodo(this.state.inputField)
    event.target.reset(); //clears form field
  }

  render() {
    return (
      <div>
        <h1>List of things to do</h1>
        <form onSubmit={this.handleSubmit}>
          <h4>New todo:</h4>
          <input onChange={this.handleChange} />
        </form>
        <h4>Current todos</h4>
        <div>
          {this.state.todos.map((todo, i) => <ListEntry todo={todo} index={i} deleteTodo={this.deleteTodo} />)}
        </div>
      </div>
    );
  }
}

export default List;
