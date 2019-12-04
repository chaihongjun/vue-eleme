<template>
  <!-- 点击显示店铺详细信息 -->
  <div class="header" @click="showDetail">
    <div class="content-wrapper">
      <!-- 店铺头像  -->
      <div class="avatar">
        <!-- 店铺logo -->
        <img width="64" height="64" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <!-- 品牌 -->
          <span class="brand"></span>
          <!-- 店铺名称 -->
          <span class="name">{{seller.name}}</span>
        </div>
        <!-- 配送能力 -->
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>

        <!-- 优惠 -->
        <div v-if="seller.supports" class="support">
          <support-ico :size="1" :type="seller.supports[1].type"></support-ico>
          <span class="text">{{seller.supports[1].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!-- 公告板 -->
    <div class="bulletin-wrapper">
      <!-- 公告板图标 -->
      <span class="bulletin-title"></span>
      <!-- 公告内容 -->
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 头部背景图 -->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import SupportIco from "components/support-ico/support-ico";
export default {
  name: "v-header",
  props: {
    // 父组件App.vue 传递商家信息
    seller: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    showDetail() {
      /*
       *   https://www.kancloud.cn/cooldrw2015/vue_2/1055113#CreateApi__1
       *    调用 组件  headerDetail
       */
      this.headerDetailComp =
        this.headerDetailComp ||
        this.$createHeaderDetail({
          $props: {
            seller: "seller"
          }
        });
      this.headerDetailComp.show();
    }
  },
  components: {
    SupportIco
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.header {
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-background-ss;

  .content-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 12px 18px 24px;

    .avatar {
      flex: 0 0 64px;
      width: 64px;
      margin-right: 16px;

      img {
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: $fontsize-large;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: $fontsize-small;
      }

      .support {
        display: flex;
        align-items: center;

        .support-ico {
          margin-right: 4px;
        }

        .text {
          line-height: 12px;
          font-size: $fontsize-small-s;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 14px;
      background: $color-background-sss;

      .count {
        font-size: $fontsize-small-s;
      }

      .icon-keyboard_arrow_right {
        margin-left: 2px;
        line-height: 24px;
        font-size: $fontsize-small-s;
      }
    }
  }

  .bulletin-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    background: $color-background-sss;

    .bulletin-title {
      flex: 0 0 22px;
      width: 22px;
      height: 12px;
      margin-right: 4px;
      bg-image('bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: $fontsize-small-s;
    }

    .icon-keyboard_arrow_right {
      flex: 0 0 10px;
      width: 10px;
      font-size: $fontsize-small-s;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>
