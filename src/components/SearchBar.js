import React from "react"
import {connect} from 'react-redux'
import {onSearch} from '../redux/actionCreators'

const SearchBar =(props)=>{
    console.log("SearchBar props", props)
    return(
        <input
        className="form-control"
        type="text"
        placeholder="Search recipe..."
        aria-label="Search"
        value={props.value}
        onChange={(e)=>props.onSearch(e.target.value)}

      />
    )
}
const mapStateToProps =(store)=>({
    value: store.searchText
})
const mapDispatchToProps=(dispatch)=>{
    return {
        onSearch: (newSearchTerm)=>{dispatch(onSearch(newSearchTerm))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)