/*
 * @Author: your name
 * @Date: 2021-05-11 15:08:27
 * @LastEditTime: 2021-05-12 14:21:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume/src/index.tsx
 */
import dva from "dva";
import { createBrowserHistory as createHistory } from 'history';

import "./index.css";

const app = dva({
  history: createHistory(),
});

app.router(require("./router").default);

app.start("#root");
