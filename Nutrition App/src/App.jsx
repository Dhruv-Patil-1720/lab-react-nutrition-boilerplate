import React, { Component } from 'react';
import './App.css';
import Foodbox from './Component/Foodbox';
import FoodData from './resources/FoodData';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      val: "",
      newArr: FoodData
    };
  }

  handleInputChange = (event) => {
    let filteredData = FoodData.filter((el) => el.name.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({ newArr: filteredData });
  };

  render() {
    return (
      
      <div>
        <h2>Search</h2>
        <div><input type="text" placeholder='Search Your Meal' onChange={this.handleInputChange} /></div>
        {this.state.newArr.map((el, i) => (
          <Foodbox key={i} {...el} />
        ))}
      </div>
    );
  }
}
