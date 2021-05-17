/*
 * @Author: your name
 * @Date: 2021-05-13 16:14:41
 * @LastEditTime: 2021-05-14 16:13:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/components/Advatar/index.tsx
 */
import React, { useState } from "react";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./index.less";
export default function Index() {
  const [fileList, setFileList] = useState({
    fileList: [],
    file: -1,
  });
  const handleChange = ({ file, fileList }: any) => {
    fileList[0].status = "done";
    file.status = "done";
    setFileList({
      fileList: fileList,
      file: file,
    });
  };
  return (
    <div className="avatar-wrapper">
      <Upload
        className="test"
        listType="picture-card"
        fileList={fileList.fileList} // question  如果在useState中定义默认fileList，就算status为interface文件中对应的状态也会提示类型错误
        onChange={handleChange}
      >
        {fileList.fileList.length <= 0 && (
          <div
            style={{
              color: "black",
              fontWeight: 400,
              marginTop: "10px",
            }}
          >
            <PlusOutlined />
            <div className="ant-upload-text">Upload</div>
          </div>
        )}
      </Upload>
    </div>
  );
}
