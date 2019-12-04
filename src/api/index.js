/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-03 09:40:13
 * @LastEditTime: 2019-12-04 09:52:31
 * @LastEditors: ChaiHongJun
 * @Description: 封装API请求
 */

import { get } from "./helpers";

//获取商家信息
const getSeller = get("api/seller");
//获取商家商品信息
const getGoods = get("api/goods");
//获取商家点评信息
const getRatings = get("api/ratings");

export { getSeller, getGoods, getRatings };
