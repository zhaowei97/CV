/*
 * @Author: your name
 * @Date: 2021-05-13 10:42:38
 * @LastEditTime: 2021-05-13 11:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/components/ButtonGroup/index.tsx
 */
import { Button } from "antd";

interface ButtonProps {
  printFlag: Boolean;
  setPrintFlag: any;
}

export default function Index(props: ButtonProps) {
  const { printFlag, setPrintFlag } = props;
  console.log(printFlag);
  

  const handleChangePrintFlag = () => {
    setPrintFlag(!printFlag);
  };

  const handleToPrint = (): void => {
    // const printArea: HTMLElement | null = document.getElementById("wrapper");
    // const innerH = printArea ? printArea.innerHTML : "打印出错";
    // setPrintFlag(true);
    // window.document.body.innerHTML = innerH;
    window.print();
  };
  return (
    <div className="print-button">
      {!printFlag && (
        <Button type="primary" onClick={handleChangePrintFlag}>
          打印预览
        </Button>
      )}
      {printFlag && (
        <Button type="primary" onClick={handleToPrint}>
          确认
        </Button>
      )}
      {printFlag && (
        <Button type="primary" onClick={handleChangePrintFlag}>
          取消
        </Button>
      )}
    </div>
  );
}
