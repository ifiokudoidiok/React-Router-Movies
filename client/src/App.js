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
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />

      
      {/* <Route path='/movies/:id' render={props => {
        // 1- find out what this ":id" actually is in the browser location
        const currentAppParameter = props.match.params.id;
        // 2- knowing which app, pull the right component from the apps array
        const theRightAppObject = id.find(appObject => {
          return appObject.url === currentAppParameter;
        });
        const Component = theRightAppObject.id;
        // 3- return the <Component />
        return <Component {...props} name='gabe' />;
      }} /> */}
    </div>
  );
};

export default App;
