<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="conter">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
  </div>
</template>

<script>
//导入文件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

//导入数据
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  //在组件创建完成后发送网络请求 所以用生命周期函数 created
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* 给顶部的购物街定位 让他不会随着滚动而被遮蔽  永远在最上面 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>