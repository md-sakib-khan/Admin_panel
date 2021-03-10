import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Items from './Items'

import fire from '../fire'

function Orders(params) {
    //add Process
    /*let OrderRef = fire.database().ref('Orders').orderByKey().limitToLast(100);
    let OrderDoneRef = fire.database().ref('OrderDone').orderByKey().limitToLast(100);
    let OrderPendingRef = fire.database().ref('OrderPending').orderByKey().limitToLast(100);
    
      function addOrder(counter, product, address, price) {
          fire.database().ref('Orders').child(counter).set(
              { 
                  OrderName: product,
                  FullAddress : address,
                  Price : price

              }   
          )
      }

   
       for(var counter = 0; counter<10; counter++){
          addOrder(counter,('Samsung S' + counter), ("Address"+counter) ,(((counter+1)*10)*1000+50000));
       }
       */
    
    var rows = [];
    rows.push(<h1>Orders</h1>)
    
    var Ref = fire.database().ref('Orders');
    Ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log(childSnapshot.key)
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

export default Orders