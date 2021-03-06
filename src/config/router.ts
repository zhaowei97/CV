/*
 * @Author: your name
 * @Date: 2021-05-11 21:32:58
 * @LastEditTime: 2021-05-13 16:54:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/config/routers.ts
 */

import React from "react";

export const allRoutes = [
  {
    path: "/index",
    model: () => [import("../models/index")],
    component: React.lazy(() => import("../routes/Resume/index")),
  },
  {
    path: "/404",
    component: React.lazy(() => import("../routes/System/404")),
  },
];
