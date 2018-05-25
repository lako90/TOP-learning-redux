import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Users extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectUser: PropTypes.func.isRequired,
  }

  selectUser = id => () => this.props.selectUser(id)

  renderUser = ({ id, name }) => (
    <ListGroupItem
      key={id}
      style={{ cursor: 'pointer' }}
      onClick={this.selectUser(id)}
      action
    >
      {name}
    </ListGroupItem>
  )

  render() {
    return <ListGroup>{this.props.users.map(this.renderUser)}</ListGroup>;
  }
}

const mapStateToProps = state => ({ users: state.user.data });

export default connect(mapStateToProps)(Users);
