import React, { Component } from "react";

export default class CandyList extends Component {
  render() {
    return (
      <article className="candies">
        <h1>Candy List</h1>
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            {candy.name} - category:{" "}
            {
              this.props.candyTypes.find(
                candyType => candyType.id === candy.candyTypeId
              ).name
            }
          </div>
        ))}
      </article>
    );
  }
}
