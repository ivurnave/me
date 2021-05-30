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
                <div className="d-flex">
                    <span className="cursor-p yellow" onClick={() => this.navigate('/')}>home</span> //
                    <span className="cursor-p green" onClick={() => this.navigate('/games')}>games</span> //
                    <span className="cursor-p coral" onClick={() => this.navigate('art')}>art</span> // 
                    <span className="cursor-p blue" onClick={() => this.navigate('/code')}>code</span> 
                </div>
            </div>
        );
    }
}

export default Sidebar;