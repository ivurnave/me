import React from 'react';
import faces from '../images/faces.png';
import wiggle from '../images/wiggle.png';
import cube from '../images/cube.png';
import mail from '../svgs/mail.svg';
import linkedin from '../svgs/linkedin.svg';
import github from '../svgs/github.svg';
import itch from '../svgs/itch.svg';



class Main extends React.Component {

    navigate(route) {
        this.props.history.push(route);
    }

    render () {
        let imageSize = 350;
        let iconSize = 20;
        return (
            <div className="main">
              <div className="header">
                  <h1 className="dark-blue">evan holmes</h1>
              </div>
              <div className="content">
                <div className="row">
                    <div className="content-column">
                        <img src={cube} height={imageSize} width={imageSize}/>
                    </div>
                    <div className="content-column">
                        <b className="yellow-bg white">hey!</b>
                        <br/><br/>
                        Software Developer @ Epic Systems
                        <br/>
                        Madison, WI
                        <br/><br/>
                        I make games, art, and code.
                        <br/><br/>
                        You can find/contact me in the following places:
                        <br/><br/>
                        <div className="logo-row">
                            <a href="mailto:ivur.nave@gmail.com" target="_blank">
                                <img className="logo" src={mail} height={iconSize} width={iconSize}/>
                            </a>
                            <a href="https://www.linkedin.com/in/evan-holmes-4b108760/" target="_blankb1cycl3=
                            ">
                                <img className="logo" src={linkedin} height={iconSize} width={iconSize}/>
                            </a>
                            <a href="https://github.com/ivurnave" target="_blankb1cycl3=
                            ">
                                <img className="logo" src={github} height={iconSize} width={iconSize}/>
                            </a>
                            <a href="https://ivurnave.itch.io/" target="_blankb1cycl3=
                            ">
                                <img className="logo" src={itch} height={iconSize} width={iconSize}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="content-column">
                        <b className="green-bg white">I make games:</b>
                        <br/><br/>
                        I've always seen making games as the natural intersection of everything I enjoy:
                        <br/><br/>
                        <em>drawing, programming, collaborating, having fun.</em>
                        <br/><br/>
                        I've made games about snail jousting, dorm-room jam sessions, and face-contorting 
                        simulations. <a className="clickableText green" onClick={() => this.navigate('/games')}>Take a look!</a> 
                    </div>
                    <div className="content-column">
                        <img src={faces} height={imageSize} width={imageSize}/>
                    </div>
                </div>
                <div className="row">
                    <div className="content-column">
                        <img src={wiggle} height={imageSize} width={imageSize}/>
                    </div>
                    <div className="content-column">
                    <b className="coral-bg white">I make art:</b>
                    </div>
                </div>
                <div className="row">
                    <div className="content-column">

                    </div>
                    <div className="content-column">

                    </div>
                </div>
              </div>
            </div>
          );
    }
}

export default Main;