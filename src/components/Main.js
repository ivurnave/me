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

    imageSize = 350;
    iconSize = 20;

    render () {
        return (
            <div className="main">
              <div className="header">
                  <h1 className="dark-blue">evan holmes</h1>
              </div>
              <div className="content">
                <div className="row">
                    <div className="content-column">
                        <img src={cube} height={this.imageSize} width={this.imageSize}/>
                    </div>
                    <div className="content-column">
                        <b className="yellow-bg white">hey!</b>
                        <br/><br/>
                        Frontend Developer @ Cludo
                        <br/>
                        Minneapolis, MN
                        <br/><br/>
                        I make games, art, and code.
                        <br/><br/>
                        You can find/contact me in the following places:
                        <br/><br/>
                        <div className="logo-row">
                            <a href="mailto:ivur.nave@gmail.com" target="_blank">
                                <img className="logo" src={mail} height={this.iconSize} width={this.iconSize}/>
                            </a>
                            <a href="https://www.linkedin.com/in/evan-holmes-4b108760/" target="_blank=">
                                <img className="logo" src={linkedin} height={this.iconSize} width={this.iconSize}/>
                            </a>
                            <a href="https://github.com/ivurnave" target="_blank=">
                                <img className="logo" src={github} height={this.iconSize} width={this.iconSize}/>
                            </a>
                            <a href="https://ivurnave.itch.io/" target="_blank=">
                                <img className="logo" src={itch} height={this.iconSize} width={this.iconSize}/>
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
                        <img src={faces} height={this.imageSize} width={this.imageSize}/>
                    </div>
                </div>
                <div className="row">
                    <div className="content-column">
                        <img src={wiggle} height={this.imageSize} width={this.imageSize}/>
                    </div>
                    <div className="content-column">
                    <b className="coral-bg white">I make art:</b>
                    <br/><br/>
                    Making art is therapy, a skill, and a way to express myself. It's something that helps me
                    see how I have changed over time.
                    <br/><br/>
                    I use a lot of different mediums (pencil, pen, watercolor, acrylic, oil, digital),
                    and I love trying new ones! <a className="clickableText coral" onClick={() => this.navigate('/art')}>Take a look!</a>
                    </div>
                </div>
                <div className="row">
                    <div className="content-column">
                        <b className="blue-bg white">I make code:</b>
                        <br/><br/>
                        I find solving problems satisfying, and coding is problem solving in concentrated form.
                        It also requires a certain amount of creativity and collaboration, leading to moments of teamwork
                        that I find really fulfilling.
                        <br/><br/>
                        In addition to working as a software developer doing projects for employers,
                        I am proud of a few personal/school projects, which you can
                        explore <a className="clickableText blue" onClick={() => this.navigate('/games')}>here!</a>
                    </div>
                    <div className="content-column">
                        <img src={faces} height={this.imageSize} width={this.imageSize}/>
                    </div>
                </div>
              </div>
            </div>
          );
    }
}

export default Main;
