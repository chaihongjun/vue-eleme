/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-03 09:40:13
 * @LastEditTime: 2019-12-03 17:35:09
 * @LastEditors: ChaiHongJun
 * @Description: 封装API请求
 */

import { get } from "./helpers";

const getSeller = get("api/seller");
const getGoods = get("api/goods");
const getRatings = get("api/ratings");

export { getSeller, getGoods, getRatings };
