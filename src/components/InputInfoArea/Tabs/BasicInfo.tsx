/*
 * @Author: your name
 * @Date: 2021-05-12 15:05:41
 * @LastEditTime: 2021-05-12 15:16:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/components/InputInfoArea/Tabs/BasicInfo.tsx
 */
import React from "react";
import { Form, Input } from "antd";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
export default function BasicInfo() {
  return (
    <Form {...formItemLayout}>
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
    </Form>
  );
}
