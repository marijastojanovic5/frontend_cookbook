import React from "react"
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logginIn} from '../redux/actionCreators'
class Login extends React.Component {
    state={
        username: "",
        password: ""
    }

    handleChange=(e)=>{
    let copyState={...this.state}
    copyState[e.target.name]=e.target.value
    this.setState(copyState)
    }
    
    handleLoginSubmit=(e)=>{
        e.preventDefault()
        this.props.onLogin(this.state)
    }

    render(){
         if (this.props.redirect) {
             return <Redirect to="/usersprofile"/> 
       } 
        return(
            <div className="bg-img">
            <div className="container-fluid login-container">
            <div className="row login-container">
            <div className ="col-lg-4 offset-lg-4">
        <form action="/action_page.php" className="container" onSubmit={this.handleLoginSubmit}>
        <div className="form-group">
        <h3>Please log in </h3><hr/>
       <label htmlFor="username">Username:</label>
        <input type="text" className="form-control" name = "username"    placeholder="Your username"  value={this.state.username} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" name = "password"    placeholder="Your password"  value={this.state.password} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block  login-btn">Log in</button>
        <label className="label"> Don't have an account? <Link to="/">Sign up here</Link></label>

        </form>
         </div>
        </div>
        </div>
        </div>
        )
    }
}
const mapStateToProps=store=>({
    user: store.user,
    redirect: store.redirect,
    favorites: store.favorites
})

const mapDispatchToProps=dispatch=>{
   return{
        onLogin: user=>dispatch(logginIn(user))
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)