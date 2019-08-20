import React from 'react'
import Search from '../../components/Search/index'
import fetchArticles from '../../api/api'

export default class SearchContainer extends React.Component{
    state={
        articles:[]
    }
   
    performSearch = (event)=>{
     return fetchArticles(event).then(data=>
        this.setState({articles:data.response.results})
        )
    }

render(){
    return(
    <Search articles={this.state.articles} performSearch={this.performSearch}/>
    )
}



}