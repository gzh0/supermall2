<template>
  <!-- ref如果是绑定在组件中的，那么通过  this.$refs.refname  获取到的是一个组件对象 -->
  <!-- ref如果是绑定在普通的元素中的，那么通过  this.$refs.refname  获取到的是一个元素对象 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    //2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    //解决首页中Better-Scroll可滚动区域的问题
    //Better-Scroll在决定有多少区域可以滚动时  是根据scrollerHeight属性决定
    //scrollerHeight属性是根据放在Better-Scroll的content的子组件的高度
    //但是我们的首页中， 在刚开始计算scrollerHeight属性时  是没有将图片计算在内的
    //所以  计算处理的高度是错误的
    //后来图片加载进来了之后有了新的高度 但是scrollerHeight属性并没有进行更新
    //所以滚动出现了问题

    //如何解决这个问题？
    //监听每一张图片是否加载完成  只要有一张图片加载完成了 执行一次 refresh（）
    //如何监听图片加载完成了？
    //原生的监听图片方法    img.onload=function{}
    //但是在vue里面没有必要 他为我们封装了一个事件 @load可以监听图片加载完了  所以去图片所在的地方components/content/goods/GoodsListItem.vue
    //Vue中监听  @load='方法'

    //3.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped>
</style>

