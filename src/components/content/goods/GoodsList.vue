<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  /* flex-wrap:nowrap  默认是nowrap 意思是不包裹  会把所有的数据挤到一起  wrap 包裹 会根据他的宽度来显示一行有多少个 */
  flex-wrap: wrap;
  /* 均等分    中间是均等分    但是中间的空白为左右两边的空白的和 */
  justify-content: space-around;
  background-color: var(--color-background);

  padding: 2px;
}
</style>