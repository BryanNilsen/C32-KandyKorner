import React, { Component } from "react";

export default class EmployeeList extends Component {
  render() {
    return (
      <article className="employees">
        <h1>Employee List</h1>
        {this.props.employees.map(employee => (
          <p key={employee.id}>{employee.name}</p>
        ))}
      </article>
    );
  }
}
