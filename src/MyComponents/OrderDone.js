import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Items from './Items'
import fire from '../fire'


function getItems(params) {
    var rows = [];
    rows.push(<h1 className="border bg-info m-3 p-3">Orders Done</h1>)

    let Ref = fire.database().ref('Done');
    Ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            //console.log(childSnapshot.key)
            var get_name = childData.OrderName;
            var get_adr = childData.FullAddress;
            var get_pr = childData.Price;
        
            rows.push(
                <Items ItemKey = {childSnapshot.key} pName = {get_name} adr = {get_adr} pr={get_pr}></Items>
            );
            
        });
    });

    return rows
}



function OrderDone(params) {
    return getItems()
}

export default OrderDone