import React from 'react';
import Main from './containers/Main';
import {BrowserRouter, Route} from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  )
}

export default App;