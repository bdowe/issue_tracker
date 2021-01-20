import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Main = React.lazy(() => import(/* webpackChunkName: "main" */ './components/Main/'));

const App = () => (
  <Suspense fallback={<div />}>
    <Router>
      <div>
        <Route path="/" exact component={Main} />
      </div>
    </Router>
  </Suspense>
);

export default App;
