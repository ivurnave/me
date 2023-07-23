import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Art from './components/Art';
import Code from './components/Code';
import Game from './components/Game';
import { MetroRouteChecker } from './pages/MetroRouteChecker';

function App() {
  return (
    <StrictMode>
      <div className="container">
        <Router basename={process.env.PUBLIC_URL}>
          {/* Always render the Sidebar */}
          <Route path="/" component={Sidebar} />

          {/* Other components */}
          <Route path="/" exact component={Main} />
          <Route path="/games/" component={Game} />
          <Route path="/art/" component={Art} />
          <Route path="/code/" component={Code} />
          <Route path="/metro/" component={MetroRouteChecker} />
        </Router>
      </div>
    </StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
