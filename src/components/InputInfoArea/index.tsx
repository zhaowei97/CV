/*
 * @Author: your name
 * @Date: 2021-05-11 15:14:58
 * @LastEditTime: 2021-05-12 15:09:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume/src/components/InputInfoArea/index.js
 */
import React from "react";
import { Tabs } from "antd";
import BasicInfo from "./Tabs/BasicInfo";

import "./index.less";

const { TabPane } = Tabs;
export default function Index() {
  return (
    <div className="input-info-root">
      <Tabs tabPosition="top">
        <TabPane tab="个人基本信息" key="1">
          <BasicInfo />
        </TabPane>
        <TabPane tab="项目与工作经历" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="技能清单" key="3">
          Content of Tab 3
        </TabPane>
        <TabPane tab="其他设置" key="4">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
