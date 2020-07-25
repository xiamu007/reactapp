// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Link, Route, Redirect, Switch} from "react-router-dom";
import React from "react";
// import store from '../store/index'
// import getMainUrl from '../network/main'
import {Button} from 'antd-mobile'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentWillMount() {
    // console.log(getMainUrl.TouchList());
  }
  render() {
    return (
      <div>
        <div>
          <Button onClick={this.goRandom}>随机答题</Button>
        </div>
      </div>
    );
  }
  goRandom = () => {
    this.props.history.push('/random')
  } 
}
export default App