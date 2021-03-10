import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Welcome(props){
    return(
        <header className = "display-3 bg-info rounded m-2">Welcome {props.name}</header>
    );
}

export default Welcome;