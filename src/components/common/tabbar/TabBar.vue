<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex; /* 弹性布局 */
  background-color: #f2f2f2;
  position: fixed; /* 位置固定 */
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1 rgba(100, 100, 100, 0.8); /* 用来设置阴影 */
}
</style>