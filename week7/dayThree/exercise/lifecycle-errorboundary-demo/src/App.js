import React from 'react';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

class Child extends React.Component {
  componentWillUnmount() {
    alert('Component is about to be unmounted!');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      favoriteColor: 'red',
      show: true 
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  }

  deleteComponent = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="App">
        <h2>Simulation 1:</h2>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <h2>Simulation 2:</h2>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <h2>Simulation 3:</h2>
        <BuggyCounter />

        <div style={{ marginTop: '50px' }}>
          {this.state.show ? <Child /> : null}
          <h1>My favorite color is {this.state.favoriteColor}</h1>
          <button onClick={this.changeColor}>Change color</button>
          <button onClick={this.deleteComponent}>Delete</button>
        </div>
      </div>
    );
  }
}

export default App;
