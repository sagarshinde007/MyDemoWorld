import React from "react";
import { Component } from "react";

class FormJs extends Component{
constructor(props){
    super(props);

    this.state={
        UserName:' ',
        Email:' '
    }
}

handleEventChanges = (e) =>{
    debugger;
    console.log(e);
    this.setState({
        [e.target.name]:e.target.value,
        [e.target.name]:e.target.value
    });
}
    render(){
       return(<div className="row">
        Form Component
           <div className="mt-1"> 
            <label>UserName</label>
    <input type="text" name="UserName" value={this.state.UserName} onChange={this.handleEventChanges}></input>
           </div>
           <div className="mt-1"> 
            <label>Email</label>
    <input type="text" name="Email" value={this.state.Email} onChange={this.handleEventChanges}></input>
           </div>
       </div>)
    }
}
export default FormJs;