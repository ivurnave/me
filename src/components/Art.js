import React from 'react';
import PopUp from './Popup';

// here I'm importing all images from the 'images' directory
// I should update this to specify a directory that just holds the gallery images
function importAll(r) {
  return r.keys().map(r);
}
const traditionalImages = importAll(require.context('../images/gallery/traditional', false, /\.(png|jpe?g|svg)$/))
const designImages = importAll(require.context('../images/gallery/design', false, /\.(png|jpe?g|svg)$/))
const digitalImages = importAll(require.context('../images/gallery/digital', false, /\.(png|jpe?g|svg)$/))

class Art extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        seen: false,
        showPopup: false,
        selectedImage: null,
        traditionalImagesGrid: this.createGalleryGrid(traditionalImages),
        designImagesGrid: this.createGalleryGrid(designImages),
        digitalImagesGrid: this.createGalleryGrid(digitalImages),
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
    return (<div className="row" key={images[0]}>
      {images.map((image, index) => (
        <div className="gallery-image-container">
            <img className="gallery-image" src={image} onClick={() => this.togglePop(image)}/>
        </div>
      ))}
    </div>);
  };

  createGalleryGrid = (images) => {
    let rows = [];
    for (let i=0; i<images.length; i+=2) {
      let rowImgs = [];
      if (images[i]) {rowImgs.push(images[i])}
      if (images[i+1]) {rowImgs.push(images[i+1])}
      let row = this.createGalleryRow(rowImgs);
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
        <h2>traditional</h2>
        {this.state.traditionalImagesGrid}

        <h2>design</h2>
        {this.state.designImagesGrid}

        <h2>digital</h2>
        {this.state.digitalImagesGrid}
      </div>
    )
  }
}

export default Art;