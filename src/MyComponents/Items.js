import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import fire from '../fire'



function deleteItem(Itemkey){
    var n = fire.database().ref('Orders').child(Itemkey+"");
    n.remove();
    var element = document.getElementById(Itemkey);
    element.parentNode.removeChild(element);

}

function Items(props) {
    return(
        <div className="order-list section" id = {props.ItemKey}>
        <div className="card z-depth-0 order-summary">
        <div className = "card-content grey-text text-darken-3">
        <span className="card-title bg-black">Order Name : {props.pName} </span>
        <p>Address : {props.adr} </p>
        <p>Total Bill : {props.pr} </p>
        <button className="btn btn-primary" onClick={deleteItem.bind(this, props.ItemKey)}>Delete</button>
        </div>
        </div>
        </div>
    );
}

export default Items;
