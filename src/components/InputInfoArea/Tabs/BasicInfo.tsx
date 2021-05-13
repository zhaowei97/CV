/*
 * @Author: your name
 * @Date: 2021-05-12 15:05:41
 * @LastEditTime: 2021-05-13 21:31:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/components/InputInfoArea/Tabs/BasicInfo.tsx
 */
import React from "react";
import { connect } from "dva";
import { Form, Input } from "antd";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};
function BasicInfo(props: any) {
  const handleFiledChange = (changedFields: any, allFields: any): void => {
    const { dispatch, resume } = props;
    const { name, value } = changedFields[0];
    resume.basicInfo[name[0]] = value;
    dispatch({
      type: "resume/changeBasicInfo",
      payload: resume,
    });
  };
  return (
    <Form {...formItemLayout} onFieldsChange={handleFiledChange}>
      <FormItem
        label="姓名"
        name="name"
        rules={[{ required: true, message: "请填写姓名" }]}
      >
        <Input placeholder="请输入姓名" />
      </FormItem>
      <FormItem
        label="求职岗位"
        name="job"
        rules={[{ required: true, message: "请填写求职岗位" }]}
      >
        <Input placeholder="请输入求职岗位" />
      </FormItem>
      <FormItem
        label="个人介绍1"
        name="introduction1"
        rules={[{ required: true, message: "请填写姓名" }]}
      >
        <Input placeholder="请输入个人介绍" />
      </FormItem>
      <FormItem label="个人介绍2" name="introduction2">
        <Input placeholder="选填" />
      </FormItem>
      <FormItem label="个人介绍3" name="introduction3">
        <Input placeholder="选填" />
      </FormItem>
      <FormItem
        label="电话"
        name="tel"
        rules={[{ required: true, message: "请填写电话" }]}
      >
        <Input placeholder="请输入电话号码" />
      </FormItem>
      <FormItem
        label="邮箱"
        name="mail"
        rules={[{ required: true, message: "请填写邮箱" }]}
      >
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem label="github" name="github">
        <Input placeholder="选填" />
      </FormItem>
      <FormItem label="个人博客" name="blog">
        <Input placeholder="选填" />
      </FormItem>
    </Form>
  );
}

const mapStateToProps = (state: any) => {
  return {
    resume: state.resume,
  };
};

export default connect(mapStateToProps)(BasicInfo);
