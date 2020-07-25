import React from "react";
import {Button} from 'antd-mobile'
class Result extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h2>得分:{this.props.location.state.score}分</h2>
          <Button onClick={this.backClick}>回到首页</Button>
        </div>
      </div>
    );
  }
  backClick=() => {
    this.props.history.push('/')
  }
}
export default Result;
