/*
 * @Author: your name
 * @Date: 2021-05-12 00:50:04
 * @LastEditTime: 2021-05-13 11:02:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/route/Resume/index.tsx
 */
import { useEffect, useState } from "react";
import InputInfoArea from "../../components/InputInfoArea";
import ShowInfoArea from "../../components/ShowInfoArea";
import ButtonGroup from "../../components/ButtonGroup";

import "./index.less";

function Index() {
  const [data, setData] = useState({});
  const [printFlag, setPrintFlag] = useState(false);

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
      {!printFlag && <InputInfoArea />}
      <ShowInfoArea />
      <ButtonGroup printFlag={printFlag} setPrintFlag={setPrintFlag} />
    </div>
  );
}

export default Index;
