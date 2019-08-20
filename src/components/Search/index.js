import React from 'react';
import SearchResults from '../Searchresults/index'
import PropTypes from 'prop-types';

class Search extends React.Component{

state={
    value:""
}
handleChange= (event)=>{
    let value=event.target.value;
    this.setState({value})
    this.props.performSearch(value)
}
handleSubmit = event => {
    event.preventDefault();
}
render(){
    return(
        <div>
            <h1>
                The Gaurdian Search App
            </h1>
            <form onSubmit={this.handleSubmit}>
           <input type="text" onChange={this.handleChange} value={this.state.value}/>
            </form>
            <SearchResults articles={this.props.articles}/>
        </div>
    )
}

}

Search.propTypes={
  perfromSearch:PropTypes.func,
  articles:PropTypes.array
}

export default Search