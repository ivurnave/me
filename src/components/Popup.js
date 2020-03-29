import React, { Component } from "react";
export default class PopUp extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     showModal: "modal"
        // }
    }

    // handleClick = () => {
    //     debugger;
    //     // this.setState({showModal: "modal"});
    //     // this.props
    //     // if (this.props.show) {
    //     //     this.setState({
    //     //         showModal: "modal show"
    //     //     });
    //     // }
    //     // else {
    //     //     this.setState({
    //     //         showModal: "modal"
    //     //     })
    // }


    render() {
        // debugger;
        // let classString = "modal";
        // if (this.props.show) { this.props.show ? 'modal show' : 'modal hide' }
        return (
            <div className={this.props.show ? 'modal show' : 'modal'}>
                <div className={this.props.show ? 'modal_content show' : 'modal_content'}>
                    <div className="modal_row">
                        <p>I'm A Pop Up!!!</p> 
                        <span className="close" onClick={this.props.toggle}>&times;</span>
                    </div>
                    <img className="modal_image" src={this.props.image}  />
                </div>
            </div>
        );
    }
}