/*
 * @Author: your name
 * @Date: 2021-05-12 00:50:04
 * @LastEditTime: 2021-05-12 14:29:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/route/Resume/index.tsx
 */
import { useEffect, useState } from "react";
import InputInfoArea from "../../components/InputInfoArea";
import "./index.less";

function Index() {
  const [data, setData] = useState({});

  const getData = async () => {
    const res = await fetch("./datas.json", {
      method: "GET",
    }).then((res) => {
      return res.json();
    });
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="layout">
      <InputInfoArea />
      <div className="site-layout-content">Content</div>
    </div>
  );
}

export default Index;