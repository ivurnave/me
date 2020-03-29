import React from 'react';
import PopUp from './Popup';
import hungary from '../images/hungary3.JPG';
import shapes from '../images/shapes.jpeg';
import selfie from '../images/SelfieCIS2.jpg';
import clutter from '../images/clutterDesk.jpeg';



class Art extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        seen: false,
        showPopup: false,
        selectedImage: null
      }
  }

  imageSize = 350;

  switchRoutes(route) {
    this.props.history.push(route);
  }

  togglePop = (image) => {
    // debugger;
    this.setState({
    //  seen: !this.state.seen
      showPopup: !this.state.showPopup,
      selectedImage: image
    });
  }

  render() {
    return (
      <div className="main">
        <PopUp image={this.state.selectedImage} show={this.state.showPopup} toggle={this.togglePop} />
        <div className="header">
          <h1>art</h1>
        </div>
        <div className="content">
          <div className="row">
            <div className="content-column-single">
              <h2><em>why art?</em></h2>
              Learning to draw taught me a lot about myself. I saw that the more I repeatedly attempted to draw faces,
              I would slowly improve my technique. Eventually I saw progress, which emboldened me to keep trying
              new techinques and mediums. When I reflect back on where I started, I find it reassuring that I was able to improve.
              I find that this strategy has helped me learned many new things, and I can thank art for that.
              <br></br>
              Art is also fun. Making things with my hands is satisfying and therapeutic. Seeing, holding, and giving my creations
              to others makes me feel grounded.
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="content-column">
              <div className="gallery-image-container">
                <img className="gallery-image" src={hungary} onClick={() => this.togglePop(hungary)}/>
              </div>
            </div>
            <div className="content-column">
              <div className="gallery-image-container">
                <img className="gallery-image" src={shapes} onClick={() => this.togglePop(shapes)}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content-column">
              <div className="gallery-image-container">
                <img className="gallery-image" src={selfie} onClick={() => this.togglePop(selfie)}/>
              </div>
            </div>
            <div className="content-column">
              <div className="gallery-image-container">
                <img className="gallery-image" src={clutter} onClick={() => this.togglePop(clutter)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Art;