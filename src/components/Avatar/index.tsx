/*
 * @Author: your name
 * @Date: 2021-05-13 16:14:41
 * @LastEditTime: 2021-05-14 00:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/components/Advatar/index.tsx
 */
import React, { useState } from "react";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function Index() {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const handleChange = ({ file, fileList }: any) => {
    // if (file.status === "error") {
    //   console.log("here");
    // }
    // console.log(fileList, 22);
    fileList[0].status = "success";
    file.status = "success";
    // setFileList({
    //   fileList: fileList,
    //   file: file,
    // });
  };
  return (
    <div className="avatar-wrapper">
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
      >
        {fileList.length <= 0 && (
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
