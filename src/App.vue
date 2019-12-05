<!--
 * @Author: ChaiHongJun
 * @Date: 2019-12-03 09:40:13
 * @LastEditTime: 2019-12-05 10:42:49
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <!-- tabs传入选项卡数据 -->
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import qs from "query-string";
import { getSeller } from "api";
import VHeader from "components/v-header/v-header";
import Goods from "components/goods/goods";
import Ratings from "components/ratings/ratings";
import Seller from "components/seller/seller";
import Tab from "components/tab/tab";

export default {
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    };
  },
  computed: {
    tabs() {
      return [
        {
          label: "商品",
          component: Goods,
          icon: "cubeic-mall",
          data: {
            seller: this.seller
          }
        },
        {
          label: "评论",
          component: Ratings,
          icon: "cubeic-edit",
          data: {
            seller: this.seller
          }
        },
        {
          label: "商家",
          component: Seller,
          icon: "cubeic-home",
          data: {
            seller: this.seller
          }
        }
      ];
    }
  },
  created() {
    this._getSeller();
  },
  methods: {
    _getSeller() {
      //  发起异步请求  商家信息数据 seller
      getSeller({
        id: this.seller.id
      }).then(seller => {
        this.seller = Object.assign({}, this.seller, seller);
      });
    }
  },
  components: {
    Tab,
    VHeader
  }
};
</script>

<style lang="stylus" scoped>
#app {
  .tab-wrapper {
    position: fixed;
    top: 136px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
