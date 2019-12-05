<template>
  <div class="tab">
    <!-- tab选项卡 -->
    <!-- 
        line  tabbar上面的文字和icon是否在一行
        useTransition 表示下划线是否使用transition过渡
        showSlider 表示十分开启下划线跟随
        data 表示需要渲染的数据，数组类型，每个数组项是一个对象
    -->
    <cube-tab-bar
      inline
      :useTransition="true"
      :showSlider="true"
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px"
    ></cube-tab-bar>
    <div class="slide-wrapper">
      <!-- 轮播 -->

      <!-- 
        autoPlay  是否自动轮播
        loop 是否循环
        showDots 是否显示轮播指示点
        initialIndex 初始索引值
        options best-scroll 控制选项
      -->
      <cube-slide
        :autoPlay="false"
        :loop="false"
        :show-dots="true"
        :initial-index="index"
        ref="slide"
        :options="slideOptions"
        @scroll="onScroll"
        @change="onChange"
      >
        <cube-slide-item v-for="(tab,index) in tabs" :key="index">
          <!-- 商品 评价  商家 三个组件互相切换 -->
          <component ref="component" :is="tab.component" :data="tab.data"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script>
export default {
  name: "tab",
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initialIndex,
      slideOptions: {
        momentum: false,
        listenScroll: false,
        probeType: 3,
        directionLockThreshold: 0
      }
    };
  },
  computed: {
    selectedLabel: {
      // 返回激活的tab label
      get() {
        return this.tabs[this.index].label;
      },
      set(newVal) {
        //  查找tabs 里面的 tab项,当某个tab项的label和当前点击的label一致的时候
        //  返回 这个tab的 索引值
        this.index = this.tabs.findIndex(value => {
          return value.label === newVal;
        });
      }
    }
  },
  mounted() {
    this.onChange(this.index);
  },
  methods: {
    onScroll(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth;
      const slideWidth = this.$refs.slide.slide.scrollerWidth;

      console.log("tabBarWidth" + tabBarWidth);
      console.log("slideWidth" + slideWidth);

      const transform = (-pos.x / slideWidth) * tabBarWidth;
      this.$refs.tabBar.setSliderTransform(transform);
    },
    onChange(current) {
      this.index = current;
      const instance = this.$refs.component[current];
      if (instance && instance.fetch) {
        instance.fetch();
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable';

.tab {
  display: flex;
  flex-direction: column;
  height: 100%;

  >>> .cube-tab {
    padding: 10px 0;
  }

  .slide-wrapper {
    flex: 1;
    overflow: hidden;
  }
}
</style>
