import React, { Component } from 'react';
import './Foodbox.css';

export default class Foodbox extends Component {
  constructor() {
    super();
    this.state = {
      countNo: 0,
      countCal: 0,
      inputValue: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = () => {
    const { inputValue } = this.state;

      this.setState({
        countNo: inputValue,
        countCal: inputValue * this.props.cal,
      });

  }; 
  handleResetClick = () => {
    this.setState({
      countNo: 0,
      countCal: 0,
      inputValue: 0,
    });
  };

  render() {
    const { countNo, countCal } = this.state;

    return (
      <>
      
      <div className='main'>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.img} alt={this.props.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.cal}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    placeholder='Enter the number'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="control">
                  <button className="button-is-info" onClick={this.handleButtonClick}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
          
        </div>
        <div className='side'>
          <h2>
            {countNo} {this.props.name} = {countCal} Calories
          </h2>
        </div>
        <div className='Reset'>
        <button className="reset" onClick={this.handleResetClick}>
                  Reset
                </button>
                </div>
       </div>
      </>
    );
  }
}
