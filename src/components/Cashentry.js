import React from 'react';
import ReactDOM from 'react-dom';

class Cashentry extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.type} : {item.text}</li>
                ))}
            </ul>
        )
    }
}

export default Cashentry;