import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {logOutUser} from '../redux/actionCreators'
import {connect} from "react-redux"
const NavBar =(props)=>{
    return(
        <div className ="fixed-nav-bar">
            <ul>
            <li><Link to='/about'>About</Link></li>
              <li><Link to='/recipes'>All Recipes</Link></li>
              <li><Link to='/addnewrecipe'>Add new Recipe</Link></li>
              <li><Link to="/usersprofile">Profile</Link></li>
              {props.user ? <li><Link to="/login" onClick={props.logOutUser}>Log out</Link></li>: null }
            </ul>

        </div>
    )

}
const mapStateToProps=store=>{
    return {
        user: store.user
    }
}
const mapDispatchToProps= dispatch=>({
 
      logOutUser: ()=>{dispatch(logOutUser())}
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar))