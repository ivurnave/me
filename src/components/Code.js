import React from 'react';
import floatman from '../images/float-man.png'
import faces from '../images/faces.png';


class Code extends React.Component {
  constructor(props) {
      super(props);
  }

  switchRoutes(route) {
    this.props.history.push(route);
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>code</h1>
        </div>
        <div className="content">
          <div className="row">
          <div className="content-column-single">
                hello this is the code page
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Code;