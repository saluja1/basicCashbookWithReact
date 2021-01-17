import React, { Component } from 'react';
import './App.css';
import Popup from './components/Popup';
import Cashentry from './components/Cashentry';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalAmount: 0,
      showPopup: false,
      currentPopup: "",
      items: []

    };
  }
  handleSubmit = (value, id) => {
      const newItem = {
          type: id,
          id: Date.now(),
          text: value,
      }


    if (id == 'cashIn') {
      this.setState((prevState, props) => ({totalAmount: Number(value) + prevState.totalAmount, items: prevState.items.concat(newItem)}));
    } else {
      this.setState((prevState, props) => ({totalAmount:  prevState.totalAmount - Number(value), items: prevState.items.concat(newItem)}));
    }
  }

  togglePopup = (event) => {
   const id = event.target.id;
    this.setState({
      showPopup: !this.state.showPopup,
      currentPopup: id
    });
  }
  render() {
    return (
      <div className='app'>
        <h1>CashBook</h1>
        <p>Total Amount : {this.state.totalAmount} </p>
        <Cashentry items={this.state.items}/>
        <button id="cashIn" onClick={this.togglePopup}>cashIn</button>
        <button id="cashOut" onClick={this.togglePopup.bind(this)}>cashOut</button>

        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
            currentPopup={this.state.currentPopup}
            handleSubmit={this.handleSubmit}
          />
          : null
        }
      </div>
    );
  }
};


export default App;
