/*
 * @Author: your name
 * @Date: 2021-05-12 14:09:03
 * @LastEditTime: 2021-05-13 21:32:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/models/index.tsx
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  namespace: "resume",
  state: {
    basicInfo: {
      name: "xxx",
      job: "xxx岗位",
    }, // 个人基本信息
    workersData: [], // 界面暂存数据
  },
  effects: {
    *changeBasicInfo({ payload }: any, { put }: any) {
      console.log(payload);

      yield put({
        type: "updateData",
        payload,
      });
    },
  },
  reducers: {
    updateData(state: object, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
