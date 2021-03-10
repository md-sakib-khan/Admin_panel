import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import fire from '../fire';
import SideBar from "./SideBar";
import LeftButtons from "./LeftButtons"

class Display extends Component{
    
        state = {
            stateCurrent : "Dashboard",

        }
    updateStateHandler(event) {
        console.log(event.target.value)
        this.setState({stateCurrent : event.target.value})
    }

    render(){
        return (
            <div className = 'container-fluid h-100 p-0'>
                <div className="row m-4 ">
                
                <div className="col-sm-3 ">
                <LeftButtons clickMe = {this.updateStateHandler}></LeftButtons>
                </div>

                <div className="col-sm-9 bg-light" >
                
                <SideBar selector = {this.state.stateCurrent}></SideBar>

                </div>

                </div>
            </div>

            )
    }
}
export default Display