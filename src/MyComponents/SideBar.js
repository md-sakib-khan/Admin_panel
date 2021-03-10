import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Orders from './Orders';
import OrderDone from './OrderDone'
import OrderPending from './OrderPending'
import AddForm from './AddForm'



class SideBar extends Component{

    render(){
        if (this.props.selector == "AddOrder") {
            return(<AddForm></AddForm>)
        }
        else if (this.props.selector == "Orders"){
            return(<Orders></Orders>)
        }
        else if (this.props.selector == "Done"){
            return (<OrderDone></OrderDone>)
        }
        else if (this.props.selector== "Pending"){
            return (<OrderPending></OrderPending>)
        }
        return (<h1>Dashboard</h1>)
    }
}
export default SideBar