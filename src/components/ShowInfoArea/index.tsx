/*
 * @Author: your name
 * @Date: 2021-05-11 15:15:42
 * @LastEditTime: 2021-05-12 16:08:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume/src/components/ShowInfoArea/index.tsx
 */

import React from "react";
import { Button } from "antd";
import "./index.less";

export default function Index() {
  const handleToPrint = () => {
    const printArea: HTMLElement | null = document.getElementById("wrapper");
    // const body : HTMLElement
    const innerH = printArea ? printArea.innerHTML : "test";
    window.document.body.innerHTML = innerH;
    window.print();
  };
  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="show-info-area-root">
          <div className="root-left">left</div>
          <div className="root-right">right</div>
        </div>
      </div>
      <Button type="primary" onClick={handleToPrint}>
        打印
      </Button>
    </React.Fragment>
  );
}
