import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  // Link,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import store from "./store/index";
// 组件页面导入
import Main from "./view/Main";
import Random from './view/Random'
import Result from './view/Result'
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/random" component={Random}></Route>
    </Switch>
  </Router>,
  document.querySelector("#root")
);
store.subscribe(() => {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/random" component={Random}></Route>
        <Route exact path="/result" component={Result}></Route>
      </Switch>
    </Router>,
    document.querySelector("#root")
  );
});
