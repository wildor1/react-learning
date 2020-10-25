import React from 'react';
import ReactDOM from 'react-dom';

// function App(props) {
//     return <div>{props.date}</div>
// }

// function tick(){
//     ReactDOM.render(
//     <App date={new Date().toLocaleTimeString()}/>,
//   document.getElementById('root'))}

// setInterval(tick,1000)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
}
//State 的更新可能是异步的
ReactDOM.render(
    <App />,
     document.getElementById('root'))
