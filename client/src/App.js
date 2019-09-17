import React, { useState } from 'react';
import { Route } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );
  
// const id = props;
// debugger
  const addToSavedList = movie => {
    if (!savedList.find(savedMovie => (savedMovie.id === movie.id))){

      setSavedList( [...savedList, movie] );
      console.log("button clicked!");
    } else{console.log("already added!")}
  };



  return (
    <div>
      <SavedList list={savedList} />
      
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id"  render={props => (
        <Movie addToSavedList = {addToSavedList} {...props} />
      )

      } />

      
     
    </div>
  );
};

export default App;
