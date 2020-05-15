import React from "react"
//mport {connect} from "react-redux"
class Review extends React.Component {
    state={
        title: "",
        reviewText: "",
        rating: 1
    }
    render(){
        return(
            <div>Review Component</div>
        )
    }
}
export default Review