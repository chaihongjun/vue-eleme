/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-03 09:40:13
 * @LastEditTime: 2019-12-03 17:42:50
 * @LastEditors: ChaiHongJun
 * @Description: localStorage
 */
import storage from "good-storage";

const SELLER_KEY = "__seller__";

//  save to localStorage

export function saveToLocal(id, key, val) {
  const seller = storage.get(SELLER_KEY, {});
  if (!seller[id]) {
    seller[id] = {};
  }
  seller[id][key] = val;
  storage.set(SELLER_KEY, seller);
}

//  load from  localStorage
export function loadFromLocal(id, key, def) {
  const seller = storage.get(SELLER_KEY, {});
  if (!seller[id]) {
    return def;
  }
  return seller[id][key] || def;
}
