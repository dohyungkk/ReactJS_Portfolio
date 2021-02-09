import React, {Component} from 'react';

class menu extends Component{
    state = {
        text: "asdadsad"
    };

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ text: "Button1"})}>button1</button>
                <button onClick={() => this.setState({ text: "Button2"})}>button2</button>
                <br />
                {this.state.text}
            </div>
        );
    }
}

export default menu;