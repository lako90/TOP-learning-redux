import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { addTodo, removeTodo } from './actions';

class Todo extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.textAddTodo = createRef();
  }

  handleClick = () => {
    this.props.addTodo(this.textAddTodo.current.value);
  }

  removeTodo = todoId => () => this.props.removeTodo(todoId)

  renderRemove = todoId => (
    <Button
      color={'danger'}
      size={'sm'}
      style={{ float: 'right' }}
      onClick={this.removeTodo(todoId)}
    >
      {'x'}
    </Button>
  )

  renderTodo = todo => <ListGroupItem>{todo.title}{this.renderRemove(todo.id)}</ListGroupItem>

  render() {
    return (
      <div>
        {/* <input
          type="text"
          ref={this.textAddTodo}
        />

        <button
          onClick={this.handleClick}
        >
          {'Add todo'}
        </button> */}

        <ListGroup>
          {this.props.todos.map(this.renderTodo)}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = ({ todo: { data: todos } }, { selectedUserId }) => ({
  todos: selectedUserId ? todos.filter(todo => todo.userId === selectedUserId) : [],
});

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  removeTodo: bindActionCreators(removeTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
