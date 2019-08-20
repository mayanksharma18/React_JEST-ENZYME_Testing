import React from 'react'
import PropTypes from 'prop-types';

const SearchResults = ({articles=[]}) => (
    <div>
  <ul>
   {articles.map(({webUrl,webTitle})=> (
       <li key={webUrl}><a href={webUrl}>{webTitle}</a></li>
   ))}
  </ul>
 
  </div>
)

SearchResults.propTypes={
    articles:PropTypes.array
}

export default SearchResults