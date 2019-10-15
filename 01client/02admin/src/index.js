import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./router/Index";
import reducers from "./redux/reducers";
import * as serviceWorker from "./serviceWorker";
// Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
