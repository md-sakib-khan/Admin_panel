import React from 'react'
import fire from '../fire'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


function add() {
    var newOrderName = document.getElementById("NewOrderName").value;
    var newUserAddress = document.getElementById("NewUserAddress").value;
    var newOrderPrice = document.getElementById("NewOrderPrice").value;

    let OrderRef = fire.database().ref('Orders').orderByKey().limitToLast(100);

    fire.database().ref('Orders').push(
        { 
            OrderName: newOrderName,
            FullAddress : newUserAddress,
            Price : newOrderPrice

        }   
    )

    alert("Item has been added")

  }


function AddForm() {

    return(
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className = "m-4">New Order</Form.Label>
          <Form.Control  id= "NewOrderName" type="text" placeholder="Enter Product Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
        <Form.Control  id= "NewUserAddress" type="text" placeholder="Enter Your Address" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
        <Form.Control id= "NewOrderPrice" type="text" placeholder="Enter Product Price" />
        </Form.Group>

        <Button onClick={add} variant="primary">
          Submit
        </Button>
      </Form>
    );
}
export default AddForm