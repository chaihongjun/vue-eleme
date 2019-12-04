/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-03 09:40:13
 * @LastEditTime: 2019-12-04 11:43:13
 * @LastEditors: ChaiHongJun
 * @Description: 弹窗组件的 显示和隐藏功能 抽离成 minxins
 */
const EVENT_SHOW = "show";
const EVENT_HIDE = "hide";

export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    show() {
      this.visible = true;
      console.log(EVENT_SHOW);
      /*
       * 下面的代码没实际用途
       */
      //向父组件 v-header 发送自定义事件"show"
      this.$emit(EVENT_SHOW);
    },
    hide() {
      this.visible = false;
      console.log(EVENT_HIDE);
      /*
       * 下面的代码没实际用途
       */
      //向父组件 v-header 发送自定义事件"hide"
      this.$emit(EVENT_HIDE);
    }
  }
};
