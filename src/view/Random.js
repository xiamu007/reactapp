// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Link, Route, Redirect, Switch} from "react-router-dom";
import React from "react";
import store from "../store/index";
import "../assets/css/style.css";
// 获取题目数据
import getMainUrl from "../network/main";
// import {Button} from 'antd-mobile'
class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      // 当前题目
      currentTm: 0,
      optionsItemList: [
        "optionsItem",
        "optionsItem",
        "optionsItem",
        "optionsItem",
      ],
      isChoose: false,
      score: 0,
    };
  }
  async componentWillMount() {
    // 获取题目数据
    let list = await getMainUrl.TouchList();
    // console.log(list);
    // 传到store中
    store.dispatch({ type: "setTimu", content: list });
    // console.log(store.getState());
  }
  render() {
    if (store.getState().list.length > 0 && this.state.currentTm < 10) {
      let currentTm = this.state.currentTm;
      let timuArr = store.getState().list;
      // console.log(timuArr[currentTm]);
      let options = JSON.parse(timuArr[currentTm].options);
      let answer = JSON.parse(timuArr[currentTm].answer);
      // console.log(answer);
      return (
        <div className="datiPage">
          <div>
            <h1>随机答题页面</h1>
            <h2>
              题目: {currentTm + 1}.{timuArr[currentTm].quiz}
            </h2>
            <div className="options">
              {options.map((item, index) => {
                return (
                  <div
                    className={this.state.optionsItemList[index]}
                    key={index}
                    onClick={() => this.answerClick(index + 1, answer)}
                  >
                    {index + 1}:{item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>login</h2>;
    }
  }
  answerClick = (index, answer) => {
    if (this.state.isChoose) {
      return true;
    }
    let optionsItemList = this.state.optionsItemList;
    if (index === Number(answer)) {
      optionsItemList[index - 1] = "optionsItem correct";
      this.setState({
        optionsItemList: optionsItemList,
        isChoose: true,
        score: this.state.score + 10,
      });
    } else {
      optionsItemList[index - 1] = "optionsItem error";
      optionsItemList[Number(answer) - 1] = "optionsItem correct";
      this.setState({
        optionsItemList: optionsItemList,
        isChoose: true,
      });
    }
    setTimeout(() => {
      let current = this.state.currentTm;
      current++;
      if (current === 10) {
        this.props.history.push("/result", { score: this.state.score });
      } else {
        this.setState({
          currentTm: current,
          optionsItemList: [
            "optionsItem",
            "optionsItem",
            "optionsItem",
            "optionsItem",
          ],
          isChoose: false,
        });
      }
    }, 2);
  };
}
export default Random;
