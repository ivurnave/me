import React from 'react';
import HeaderDecoration from './HeaderDecoration';


class Sidebar extends React.Component {

    navigate(route) {
        this.props.history.push(route);
    }

    render() {
        return (
            <div className="sidebar">
                <HeaderDecoration />
                <a className="clickableText yellow" onClick={() => this.navigate('/')}>home</a> //
                <a className="clickableText green" onClick={() => this.navigate('/games')}>games</a> //
                <a className="clickableText coral" onClick={() => this.navigate('art')}>art</a> // 
                <a className="clickableText blue" onClick={() => this.navigate('/code')}>code</a> 
            </div>
        );
    }
}

export default Sidebar;