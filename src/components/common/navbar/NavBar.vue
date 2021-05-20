<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="conter">
      <slot name="conter"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.left,
.right {
  width: 60px;
}

.conter {
  /* 占据中间所有部分  同一个大盒子里面 其余的小盒子都有具体的大小 这里用flex：1 就会让他占据其余的剩余部分 */
  flex: 1;
}
</style>