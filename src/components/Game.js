import React from 'react';
import floatman from '../images/float-man.png'
import faces from '../images/faces.png';
import thisIsBig from '../images/this-is-big.png';
import smileSim from '../images/smile-sim.png';
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
        <div className="header">
          <h1>games</h1>
        </div>
        <div className="content">
          <div className="row">
            <div className="content-column-single">
              <h2><em>why games?</em></h2>
              I've always been fascinated with how games can be designed to make us feel stronger, faster, weaker, fearful, exhilerated, etc.
              I make games for fun to explore how different mechanincs can elicit specific experiences for the user.
              Many of my games crowd two or more players around a single keyboard to bring players close physically while they engage digitally.
            </div>
          </div>
          <div className="row">
            <div className="content-column">
              <a href="https://ivurnave.itch.io/this-is-big" target="_blank">
                <img src={snail} width={this.imageSize}/>
              </a>
            </div>
            <div className="content-column">
              <h2><em>this is big</em></h2>
              A game about snail jousting. Grab a friend and play it
              by clicking the image above. This game was created using 
              the <a className="clickableText" href="https://phaser.io/">Phaser.js library</a>. 
              There is also a desktop port for arcade machines,
              written using <a className="clickableText" href="https://electronjs.org/">Electron.js</a>. The source code is available 
              on <a className="clickableText" href="https://github.com/ivurnave">my Github</a>.
            </div>
          </div>
          <div className="row">
                <div className="content-column">

                {/* <br/><br/> */}
                {/* <a href="https://anyanwu.itch.io/smile-simulator" target="_blank" >
                  <img src = {smileSim} alt="smile simulator game" width={900} />
                </a> */}
                <h2><em>smile simulator</em></h2>
                Control different areas of the face and give 'em your best smile! This game was developed in 24 hours alongside my cohort for the final
                project of the Glitch.MN immersion program in 2016, a crash-course on how to make games and survive in the industry. Created in Unity.
                
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;