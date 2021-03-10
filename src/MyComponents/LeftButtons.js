import React, { Component } from 'react';

class LeftButtons extends Component {
    render() {
        return (
            <div>
            <div className='col'>
            <button onClick={this.props.clickMe} className="btn btn-primary btn-lg btn-block text-left w-100 mb-3" value = "Connect">Connect Firebase</button>
            <button onClick={this.props.clickMe} className="btn btn-primary btn-lg btn-block text-left w-100 mb-3" value = "AddOrder">AddOrder</button>
            <button onClick={this.props.clickMe} className="btn btn-primary btn-lg btn-block text-left w-100 mb-3" value = "Orders" id = "b1">Orders</button>
            <button onClick={this.props.clickMe} className="btn btn-success btn-lg btn-block text-left w-100 mb-3" value = "OrderDone" id = "b2">Orders Done</button>
            <button onClick={this.props.clickMe} className="btn btn-danger  btn-lg btn-block text-left w-100 mb-4" value="OrderPending" id = "b3">Orders Pending</button>
            </div>
            </div>
        );
    }
}

export default LeftButtons;