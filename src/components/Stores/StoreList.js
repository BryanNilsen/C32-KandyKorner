import React, { Component } from "react";

export default class StoreList extends Component {
  render() {
    return (
      <article className="stores">
        <h1>Store List</h1>
        {this.props.stores.map(store => (
          <p key={store.id}>{store.name}</p>
        ))}
      </article>
    );
  }
}
