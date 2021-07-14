import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState({
          todos: todos
        });
      })
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(todo => this.setState({ todos: [...this.state.todos, todo] }))
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    const indexOfTodo = this.state.todos.findIndex(todo => todo.todoId === todoId);
    const toggledCompleted = !this.state.todos[indexOfTodo].isCompleted;

    const toggledTodo = this.state.todos[indexOfTodo];
    toggledTodo.isCompleted = toggledCompleted;

    const newTodosArr = this.state.todos.map(todo => {
      if (todo.todoId === todoId) return toggledTodo;
      return todo;
    });

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompleted: toggledCompleted })
    })
      .then(res => res.json())
      .then(todo => this.setState({
        todos: newTodosArr
      }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
