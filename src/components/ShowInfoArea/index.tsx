/*
 * @Author: your name
 * @Date: 2021-05-11 15:15:42
 * @LastEditTime: 2021-05-13 21:31:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume/src/components/ShowInfoArea/index.tsx
 */

import React from "react";
import { connect } from "dva";
import Avatar from "../Avatar";
import "./index.less";

function Index(props: any) {
  console.log(props);

  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="show-info-area-root">
          <div className="root-left">
            <div className="root-left-avatar">
              <Avatar />
            </div>
            <div className="self-info">
              <div className="self-info-name">
                {props.resume.basicInfo.name}
              </div>
              <div className="self-info-job">{props.resume.basicInfo.job}</div>
            </div>
          </div>
          <div className="root-right">right</div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    resume: state.resume,
  };
};

export default connect(mapStateToProps)(Index);
