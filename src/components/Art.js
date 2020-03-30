import React from 'react';
import PopUp from './Popup';

// here I'm importing all images from the 'images' directory
// I should update this to specify a directory that just holds the gallery images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))



class Art extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        seen: false,
        showPopup: false,
        selectedImage: null,
        galleryGrid: this.createGalleryGrid(images),
      }

      
  }

  imageSize = 350;

  switchRoutes(route) {
    this.props.history.push(route);
  }

  togglePop = (image) => {
    this.setState({
      showPopup: !this.state.showPopup,
      selectedImage: image
    });
  }

  createGalleryRow = (images) => {
    return (<div className="row">
      {images.map((image, index) => (
        <div className="content-column">
          <div className="gallery-image-container">
            <img className="gallery-image" src={image} onClick={() => this.togglePop(image)}/>
          </div>
        </div>
      ))}
    </div>);
  };

  createGalleryGrid = (images) => {
    let rows = [];
    for (let i=0; i<images.length; i+=2) {
      let row = this.createGalleryRow([images[i], images[i+1]]);
      rows.push(row);
    }
    let ret = (<div className="content">
      {rows}
    </div>)
    return ret;
  };

  render() {

    return (
      <div className="main">
        <PopUp image={this.state.selectedImage} show={this.state.showPopup} toggle={this.togglePop} />
        <div className="header">
          <h1>art</h1>
        </div>
        <div className="content">
          <div className="row">
            {/* <div className="content-column-single">
              <h2><em>why art?</em></h2>
              Learning to draw taught me a lot about myself. I saw that the more I repeatedly attempted to draw faces,
              I would slowly improve my technique. Eventually I saw progress, which emboldened me to keep trying
              new techinques and mediums. When I reflect back on where I started, I find it reassuring that I was able to improve.
              I find that this strategy has helped me learned many new things, and I can thank art for that.
              <br></br>
              Art is also fun. Making things with my hands is satisfying and therapeutic. Seeing, holding, and giving my creations
              to others makes me feel grounded.
            </div> */}
          </div>
        </div>
        {this.state.galleryGrid}
      </div>
    )
  }
}

export default Art;