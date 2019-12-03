/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-03 09:40:13
 * @LastEditTime: 2019-12-03 16:43:46
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
      this.$emit(EVENT_SHOW);
      console.log("show");
    },
    hide() {
      this.visible = false;
      this.$emit(EVENT_HIDE);
      console.log("hide");
    }
  }
};
