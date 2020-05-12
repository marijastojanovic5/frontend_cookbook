import React from "react"
import {Link} from 'react-router-dom'
class Login extends React.Component {
    state={
        username: "",
        password: ""
    }
    render(){
        return(
            <div className="bg-img">
            <div className="container-fluid login-container">
            <div className="row login-container">
            <div className ="col-lg-4 offset-lg-4">
        <form action="/action_page.php" className="container" onSubmit={this.handleSignUpSubmit}>
        <div className="form-group">
        <h3>Please log in </h3><hr/>
       <label htmlFor="username">Username:</label>
        <input type="text" className="form-control" name = "username"    placeholder="Your username here..."  value={this.state.username} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" name = "password"    placeholder="Your password here..."  value={this.state.password} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block" id="login-btn">SignUp</button>
        <label> Don't have an account? <Link to="/signup">Sign up here</Link></label>

        </form>
         </div>
        </div>
        </div>
        </div>
        )
    }
}
export default Login