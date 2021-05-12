/*
 * @Author: your name
 * @Date: 2021-05-12 13:25:38
 * @LastEditTime: 2021-05-12 14:12:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/route/System/404.tsx
 */
import { connect } from "dva";
import { Result, Button } from "antd";
import { routerRedux } from "dva/router";

const NotFund = (props: any) => {
  const handleBack = () => {
    const { dispatch } = props;
    dispatch(
        routerRedux.push({
          pathname: `index`,
        })
      );
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleBack}>
          Back Home
        </Button>
      }
    />
  );
};

export default connect()(NotFund);
