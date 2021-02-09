import React, { Component } from 'react'
import Intro from '../../components/Intro/intro'
import ReactJS from '../../components/ReactJS/reactJS'

class page extends Component {
    displayPage = (no) => {
        switch(no) {
            case 0:
                return <Intro />;
            case 1:
                return <ReactJS />;
            default:
                return <Intro />;
        }
    };

    render() {
        return (
            <div>
                {this.displayPage(this.props.page)}
            </div>
        )
    }
}

export default page;