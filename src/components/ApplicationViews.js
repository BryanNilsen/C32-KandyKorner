import { Route } from "react-router-dom";
import React, { Component } from "react";
import StoreList from "./Stores/StoreList";
import EmployeeList from "./Employees/EmployeeList";
import CandyList from "./Candies/CandyList";

export default class ApplicationViews extends Component {
  // Store locations
  storeLocations = [
    { id: 1, name: "Kandy Korner Downtown", address: "123 Location 1 Avenue" },
    { id: 2, name: "Kandy Korner Brentwood", address: "456 Location 2 Avenue" }
  ];
  // Employees
  employees = [
    { id: 1, name: "Phillip Maglass" },
    { id: 2, name: "Kate Honeydew" },
    { id: 3, name: "Marky Mark" }
  ];
  // Candy types
  candyTypes = [
    { id: 1, name: "gum" },
    { id: 2, name: "suckers" },
    { id: 3, name: "candy bars" },
    { id: 4, name: "chewies" }
  ];
  // Individual candies
  individualCandies = [
    { id: 1, candyTypeId: 1, name: "Big League Chew" },
    { id: 2, candyTypeId: 2, name: "Cherry Dum Dum" },
    { id: 3, candyTypeId: 3, name: "Almond Joy" },
    { id: 4, candyTypeId: 4, name: "Skittles" }
  ];

  state = {
    stores: this.storeLocations,
    employees: this.employees,
    candyTypes: this.candyTypes,
    candies: this.individualCandies
  };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/stores"
          render={props => {
            return <StoreList stores={this.state.stores} />;
          }}
        />
        <Route
          path="/candies"
          render={props => {
            return (
              <CandyList
                candies={this.state.candies}
                candyTypes={this.state.candyTypes}
              />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />
      </React.Fragment>
    );
  }
}
