import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PictureLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let picture = this.props.picture;
        return (
            <image src={picture} alt="text" />
        );
    }
}

export default PictureLink;