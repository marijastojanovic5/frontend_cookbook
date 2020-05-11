import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {signUp} from "../redux/actionCreators"
class SignUp extends React.Component{
    state ={
        firstName: "",
        lastName: "",
        username: "",
        pasword: ""
        }
        handleChange=(e)=>{
            let copy = {...this.state} 
            copy[e.target.name] = e.target.value
             this.setState(copy)

        }
        handleSignUpSubmit=(e)=>{
            e.preventDefault()
            this.props.onSubmit(this.state)
           
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
            <form action="/action_page.php" className="container" onSubmit={this.handleSignUpSubmit}>
            <div className="form-group">
            <h3>Please sign up </h3><hr/>
            <label htmlFor="name">First Name:</label>
            <input type="text" className="form-control" name = "firstName"    placeholder="Your first name here..."  value={this.state.name} onChange={this.handleChange}/>
            <label htmlFor="name">Last Name:</label>
            <input type="text" className="form-control" name = "lastName"    placeholder="Your last name here..."  value={this.state.name} onChange={this.handleChange}/>
            <label htmlFor="username">Username:</label>
            <input type="text" className="form-control" name = "username"    placeholder="Your username here..."  value={this.state.username} onChange={this.handleChange}/>
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" name = "password"    placeholder="Your password here..."  value={this.state.password} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block" id="login-btn">SignUp</button>
            <label> Already a member? <Link to="/login">Log in here</Link></label>

            </form>
             </div>
            </div>
            </div>
            </div>
        )
    }
    }
 const mapStateToProps = state => ({
        currentUser: state.user,
        redirect: state.redirect
    })

    const mapDispatchToProps=dispatch=> {
        return {
        onSubmit: user=>dispatch(signUp(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)