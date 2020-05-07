import React from 'react'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
const UsersProfile=(props)=>{
    return(
        <div>User</div>

    )
}
const mapStateToProps=(store)=>({
    user: store.user
})

export default withRouter(connect(mapStateToProps)(UsersProfile))