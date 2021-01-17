import React from 'react';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

  handleSubmit = (event) => {
  	if (this.state.text > 0) {	
    	this.props.handleSubmit(this.state.text, this.props.currentPopup);
        this.setState({ text: "" });
  	}

  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1> {this.props.currentPopup}</h1>
          <input className="{this.props.currentPopup}" onChange={this.handleChange} value={this.state.text} />
        <button id="submit" onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;
