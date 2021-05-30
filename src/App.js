import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter , Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Art from './components/Art';
import Code from './components/Code';
import Game from './components/Game';

function App() {
  return (
    <div className="container">
      <HashRouter basename={process.env.PUBLIC_URL}>
        {/* Always render the Sidebar */}
        <Route path="/" component={Sidebar} />

        {/* Other components */}
        <Route path="/" exact component={Main} />
        <Route path="/games/" component={Game} />
        <Route path="/art/" component={Art} />
        <Route path="/code/" component={Code} />
      </HashRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
