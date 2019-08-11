import React from 'react';

const ListEntry = props => (
  <li onClick={() => props.deleteTodo(props.index)}>
    {props.todo}
  </li>
);

export default ListEntry;
//has to be anon func onclick