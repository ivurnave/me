import React, { Component } from "react";
export default class PopUp extends Component {

    constructor(props) {
        super(props);
    }

    escFunction = () => {
        if (this.props.image != null) {
            this.props.toggle();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
      }

    render() {
        return (
            <div className={this.props.show ? 'modal show' : 'modal'}>
                <div className={this.props.show ? 'modal_content show' : 'modal_content'}>
                    <div className="modal_row">
                        <p> </p> 
                        <span className="close" onClick={this.props.toggle}>&times;</span>
                    </div>
                    <img className="modal_image" src={this.props.image}  />
                </div>
            </div>
        );
    }
}