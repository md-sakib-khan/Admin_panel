import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Items from './Items'

function OrderDone(params) {
    
    var rows = [];
    rows.push(<h1>Orders Done</h1>)

    var get_name = "";
    var get_adr = "";
    var get_pr = "";
    
    for (var i = 0; i < 15; i++) {
        rows.push(
            <Items ItemKey = {i} pName = {get_name} adr = {get_adr} pr={get_pr}></Items>
        );
    }
    
    return rows
}

export default OrderDone