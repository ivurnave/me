import React from 'react';
import floatman from '../images/float-man.png'
import faces from '../images/faces.png';
import thisIsBig from '../images/this-is-big.png';
// import smileSim from '../images/smile-sim.png';
import smileSim from '../images/smile-sim-crop.png'
import snail from '../images/snail1.png';


class Game extends React.Component {
  constructor(props) {
      super(props);
  }

  imageSize = 350;

  switchRoutes(route) {
    this.props.history.push(route);
  }

  render() {
    return (
      <div className="main">
        <div className="d-flex mb-4">
          <h1>games</h1>
        </div>
        <div className="content">
          <div className="row mb-4">
            <div className="col-md col-12 text-center">
              <a href="https://ivurnave.itch.io/this-is-big" target="_blank">
                <img src={snail} width={this.imageSize}/>
              </a>
            </div>
            <div className="col-md col-12 text-justify">
              <h2><em>this is big</em></h2>
              A game about snail jousting. Grab a friend and play it
              by clicking the image above. This game was created using 
              the <a href="https://phaser.io/">Phaser.js library</a>. 
              There is also a desktop port for arcade machines,
              written using <a href="https://electronjs.org/">Electron.js</a>. The source code is available 
              on <a href="https://github.com/ivurnave">my Github</a>.
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md d-md-none col-12 text-center">
              <a href="https://anyanwu.itch.io/smile-simulator" className="gallery-image-container" target="_blank">
                <img src={smileSim} width={this.imageSize}/>
              </a>
            </div>
            <div className="col-md col-12 text-justify">
              <h2><em>smile simulator</em></h2>
              Control different areas of the face and give 'em your best smile! This game was developed in 24 hours alongside my cohort for the final
              project of the Glitch.MN immersion program in 2016, a crash-course on how to make games and survive in the industry. Created in Unity.
            </div>
            <div className="col-md d-none d-md-flex col-12 text-center">
              <a href="https://anyanwu.itch.io/smile-simulator" className="gallery-image-container" target="_blank">
                <img src={smileSim} width={this.imageSize}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;