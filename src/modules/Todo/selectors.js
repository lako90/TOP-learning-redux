import { createSelector } from 'reselect';

const getTodos = ({ todos }) => todos;
const getSelectedUserId = ({ selectedUserId }) => selectedUserId;

const filterByUserId = createSelector(
  [getTodos, getSelectedUserId],
  (todos, selectedUserId) => (
    selectedUserId ? todos.filter(todo => todo.userId === selectedUserId) : []
  ),
);

export default filterByUserId;
