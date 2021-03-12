import React, { Component } from 'react'
import Intro from '../../components/Intro/intro'
import ReactJS from '../../components/ReactJS/reactJS'
import NodeJS from '../../components/NodeJS/node'
import Git from '../../components/Git/git'

class page extends Component {
    displayPage = (no) => {
        switch(no) {
            case 0:
                return <Intro />;
            case 1:
                return <ReactJS />;
            case 2:
                return <NodeJS />;
            case 3:
                return <Git />;
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