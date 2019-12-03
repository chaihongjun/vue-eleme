/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-03 09:40:13
 * @LastEditTime: 2019-12-03 16:13:46
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import axios from "ts-axios-new";

const urlMap = {
  development: "/",
  production: "http://ustbhuangyi.com/sell/"
};
const baseUrl = urlMap[process.env.NODE_ENV];
const ERR_OK = 0;

// 封装get请求

export function get(url) {
  return function(params = {}) {
    return axios
      .get(baseUrl + url, {
        params
      })
      .then(res => {
        const { errno, data } = res.data;
        if (errno === ERR_OK) {
          return data;
        }
      })
      .catch(e => {});
  };
}
