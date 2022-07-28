import React from "react";
function Login() {
    return (
    <div className="login-holder">
      <form class="ui form">
        <div class="field">
        <label>First Name</label>
        <input 
         placeholder="First Name"
         />
        </div>
        <div class="field">
        <label>Last Name</label>
        <input 
        placeholder="Last Name"/>
        </div>
        <button class="ui button" type="submit">Submit</button>
        </form>
        </div>
    );
}
export default Login;