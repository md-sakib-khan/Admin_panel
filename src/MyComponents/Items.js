import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import fire from '../fire'
import OrderPending from './OrderPending';
import logo from './logo.png';



function deleteItem(Itemkey){
    fire.database().ref('Orders').child(Itemkey+"").remove();
    var element = document.getElementById(Itemkey);
    element.parentNode.removeChild(element)
    alert("Item Has been Removed")
}

function  proceedToPending(Itemkey) {
    let PendingRef = fire.database().ref('Pending').orderByKey().limitToLast(100);
    
    fire.database().ref('Orders').child(Itemkey+"").on('value', function(dataSnapshot) {
        var values = dataSnapshot.val();
        var k = dataSnapshot.ItemKey;
    
        fire.database().ref('Pending').push(
            {
                OrderName: values.OrderName,
                FullAddress : values.FullAddress,
                Price : values.Price
            }
        );
    })
    alert("Order added to Pending Order List.")
}

function  DoneOrder(Itemkey) {
    let DoneRef = fire.database().ref('Done').orderByKey().limitToLast(100);
    
    fire.database().ref('Pending').child(Itemkey+"").on('value', function(dataSnapshot) {
        var values = dataSnapshot.val();
    
        fire.database().ref('Done').push(
            { 
                OrderName: values.OrderName,
                FullAddress : values.FullAddress,
                Price : values.Price

            }   
        );
    })
    alert("Order added to Order Done List.")
}

function Items(props) {
    return(
         <div className="order-list section" id = {props.ItemKey}>
         <div className="card z-depth-0 order-summary m-3">
        
        

        <div className = 'grid-container m-3 '>

        <div className = 'row'>

        <div class="col-sm-3">
        <img src={logo} class="img-thumbnail  bg-info"></img>
        </div>

        <div class="col-sm-6">

        <div class="container border">

        <div class="row">
        <div class="col m-3 border-bottom"><span className="card-title bg-black text-primary">Order Name : </span></div>
        <div class="col m-3 border-bottom"><span className="card-title bg-black">{props.pName} </span></div>
        <div class="w-100"></div>

        <div class="col m-3 border-bottom"><span className="card-title bg-black text-primary">Address : </span></div>
        <div class="col m-3 border-bottom"><p>{props.adr} </p></div>
        <div class="w-100"></div>

        <div class="col m-3 border-bottom"><span className="card-title bg-black text-primary">Total Bill : </span></div>
        <div class="col m-3 border-bottom"><p>{props.pr}</p></div>
        </div>
        </div>
        </div>

        <div class="col-sm-3">
        <div className='row'><button className="btn btn-primary m-2 w-100 mt-4" onClick={deleteItem.bind(this,props.ItemKey)}>Delete</button></div>
        <div className='row'><button className="btn btn-success m-2 w-100 mt-3" onClick={proceedToPending.bind(this,props.ItemKey)}>Proceed</button></div>
        <div className='row'><button className="btn btn-danger m-2 w-100 mt-3"  onClick={DoneOrder.bind(this,props.ItemKey)}>Done</button></div>
        </div>
        
        </div>
        
        </div>        
         </div>
         </div>
    );
}

export default Items;
