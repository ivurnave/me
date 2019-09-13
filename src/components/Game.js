import React from 'react';
import floatman from '../images/float-man.png'
import faces from '../images/faces.png';
import thisIsBig from '../images/this-is-big.png';
import smileSim from '../images/smile-sim.png';


class Game extends React.Component {
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
          <h1>games</h1>
        </div>
        <div className="content">
          <div className="row">
            <div className="content-column-single">
                hello this is the games page
                <br/><br/>
                <a href="https://ivurnave.itch.io/this-is-big" target="_blank">
                    <img src={thisIsBig} alt="this is big game" width={900}/>
                </a>
                <br/><br/>
                This is a game about snail jousting. Grab a friend and play it
                by clicking the image above. This game was created using 
                the <a className="clickableText" href="https://phaser.io/">Phaser.js library</a>. 
                There is also a desktop port for arcade machines,
                written using <a className="clickableText" href="https://electronjs.org/">Electron.js</a>. The source code is available 
                on <a className="clickableText" href="https://github.com/ivurnave">my Github</a>.
                <br/><br/>
                <a href="https://anyanwu.itch.io/smile-simulator" target="_blank" >
                  <img src = {smileSim} alt="smile simulator game" width={900} />
                </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;