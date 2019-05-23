import React from 'react';

const MovieShow = ({ movies, match }) =>
   <div>
      <h3>{movies[match.params.movieId].title}</h3>
   </div>

export default MovieShow