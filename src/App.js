import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import getUsers from './modules/User/actions';
import getTodos from './modules/Todo/actions';

import UserContainer from './modules/User';
import TodoContainer from './modules/Todo';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = { selectedUserId: null };
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getTodos();
  }

  selectUser = (userId) => {
    this.setState({ selectedUserId: userId });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{'Welcome to React'}</h1>
        </header>

        <Container>
          <Row>
            <Col xs={3}>
              <UserContainer selectUser={this.selectUser} />
            </Col>
            <Col xs={9}>
              <TodoContainer selectedUserId={this.state.selectedUserId} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  getUsers: bindActionCreators(getUsers, dispatch),
  getTodos: bindActionCreators(getTodos, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
