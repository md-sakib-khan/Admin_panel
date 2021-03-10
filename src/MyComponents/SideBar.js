import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Orders from './Orders';
import OrderDone from './OrderDone'
import OrderPending from './OrderPending'
import AddForm from './AddForm'

import Display from './Display'



class SideBar extends Component{


    download(params) {

        var domToPdf = require('dom-to-pdf');
        var element =document.getElementById(params)
        var options = {
        filename: 'test.pdf'
        };
        domToPdf(element, options, function() {
        console.log('done');
        });
    }

    render(){
        if (this.props.selector == "AddOrder") {
            return(
                <div id='addform'>
                <AddForm ></AddForm>
                </div>
                )
        }
        if (this.props.selector  == "Orders"){
            return(
                <div id='Orders'>
                <Orders PassedData1 = {this.props.data1}></Orders>
                <button className="btn btn-danger  btn-lg text-left mb-4" onClick={this.download.bind(this,'Orders')}>Download</button>
                </div>
                )
        }
        if (this.props.selector  == "Done"){
            return (
                <div id = 'OrderDone'>
                <OrderDone PassedData3 = {this.props.data3}></OrderDone>
                <button className="btn btn-danger  btn-lg  text-left  mb-4" onClick={this.download.bind(this,'OrderDone')}>Download</button>
                </div>
                )
        }
        if (this.props.selector == "Pending"){
            return (
                <div id = 'OrderPending'>
                <OrderPending PassedData2 = {this.props.data2}></OrderPending>
                <button className="btn btn-danger  btn-lg  text-left mb-4" onClick={this.download.bind(this,'OrderPending')}>Download</button>
                </div>
                )
        }
        else return <h1>Choose from menu</h1>
    }
}
export default SideBar