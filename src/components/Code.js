import React from 'react';
import floatman from '../images/float-man.png'
import faces from '../images/faces.png';
import triangulatorExample from '../images/triangulator-example.png';

class Code extends React.Component {
  constructor(props) {
      super(props);
  }

  switchRoutes(route) {
    this.props.history.push(route);
  }

  imageSize = 600;

  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>code</h1>
        </div>
        <div className="content">
          <div className="row">
            <div className="content-column-single">
                  <h2>triangulate</h2>
                  <p>
                    Triangulate images using the Delauney triangulation of placed vertices. Written with JavaScript using Electron, p5.js, and Delaunator.
                  </p>
                  <p>
                    This app was written for a final project in my computational geometry
                    class. Given a set of points on an image, we use a divide and conquer algorithm to
                    construct Delauney triangulations of subsets, then recursively merge the subsets
                    to form a triangulation of the full set of points. For each triangular region,
                    we color the region based on the average of the colors inside the region.
                    In the end, we get an altered image with some cool abstracted effects!
                  </p>
                  <div className="content">
                    <a href="https://github.com/ivurnave/image-triangulation-js" target="_blank">
                      <img src={triangulatorExample} width={this.imageSize}/>
                    </a>
                  </div>

                  <br/><br/>
                  <h2>react native gesture recognizer</h2>
                  <p>
                    An npm library used to for training and recognizing
                    touch gestures in react native applications. This project made by
                    Bidit Sharma, Bridget Koehler, and for our senior CS capstone class at St. Olaf College.
                  </p>
                  <p>
                    This library a custom implementation of the Rubine algorithm, which classifies
                    gestures using a set of predefined features such as initial
                    angle, angle of bounding box diagonal, and . To classify a new gesture,
                    we plot its features in multidimensional space, then compare to
                    our defined gestures using a metric.
                  </p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Code;
