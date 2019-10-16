import React, { Component } from 'react';
import './App.css';
import TPSTester from './test/demo/TPSTester'
import TPSUnitTests from './test/jsunit_test_beds/TPSUnitTests';

class App extends Component {

  state = {
    initial: true,
    TPSTester: false,
    UnitTests: false
  }

  quit = () => {
    this.setState({UnitTests: false});
    this.setState({TPSTester: false});
    this.setState({initial: true});
  }

  TPSTesterButton = () => {
    this.setState({TPSTester: true});
    this.setState({initial: false});
  }

  UnitTestsButton = () => {
    this.setState({UnitTests: true});
    this.setState({initial: false});
  }

  render () {
    if (this.state.initial){
      return (
        <div>
          <h1>Which would you like to access?</h1>
          <button onClick={this.TPSTesterButton}>jsTPS_Tester</button>
          <button onClick={this.UnitTestsButton}>jsTPS_Unit_Tests</button>
        </div>
      )
    }
    else if (this.state.TPSTester)
      return <TPSTester 
            quit={this.quit}/>;
    else if (this.state.UnitTests)
      return <TPSUnitTests
            quit={this.quit}/>;
  }
}

export default App;
