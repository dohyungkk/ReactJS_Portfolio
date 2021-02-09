import React, { Component } from 'react';
import Menubar from "./hoc/Menu/menubar";
import Page from './hoc/Page/page'

class App extends Component {
  state = {
    page: 0
  };

  showPage = (no) => {
    //alert(no);
    this.setState({ page: no });
  };

  render() {
    return (
      <div>
        <Menubar showPage={this.showPage} />
        <Page page={this.state.page} />
      </div>
    )
  }
}

export default App;
