import React from 'react'
import {withRouter, Link} from 'react-router-dom'
const NavBar =(props)=>{
    return(
        <div className ="fixed-nav-bar">
            <ul>
            <li><Link to='/about'>About</Link></li>
              <li><Link to='/recipes'>All Recipes</Link></li>
              <li><Link to='/addnewrecipe'>Add new Recipe</Link></li>
              <li><Link to="/usersprofile">Profile</Link></li>
             {/* {props.match.path === '/login' ? 
              <li><Link to="/login">Login</Link></li>
              :
             <li id="login"><Link to="/signup">SignUp</Link></li> } */}
             </ul>

        </div>
    )

}
export default withRouter(NavBar)