import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import SideBar from "./SideBar";

class Display extends Component{
    constructor() {
        super();
        this.state = {
            CurrentState : "",
        }
    }
    updateState(text) {
        this.setState({CurrentState:text});
    }
    render(){
        return (
            <div className = 'container-fluid h-100'>
                <div class="row m-4">
                
                <div class="col-sm-3">

                    <div className='col'>
                    <button onClick={this.updateState.bind(this,"AddOrder")} className="btn btn-primary btn-lg btn-block text-left w-100 mb-3">AddOrder</button>
                    <button onClick={this.updateState.bind(this,"Orders")} className="btn btn-primary btn-lg btn-block text-left w-100 mb-3">Orders</button>
                    <button onClick={this.updateState.bind(this,"Done")} className="btn btn-success btn-lg btn-block text-left w-100 mb-3">Orders Done</button>
                    <button onClick={this.updateState.bind(this,"Pending")} className="btn btn-danger  btn-lg btn-block text-left w-100 mb-4">Orders Pending</button>
                    </div>

                </div>

                <div class="col-sm-9 bg-light">

                <SideBar selector = {""+this.state.CurrentState}></SideBar>

                </div>

                </div>
            </div>

            )
    }
}
export default Display