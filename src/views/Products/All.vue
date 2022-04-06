<template>
  <div>
    <keep-alive>
      <router-view v-if="isRouterAlive"> </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'All',
  data() {
    return {
      // 控制视图是否显示的变量
      isRouterAlive: true
    }
  },
  // 父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
  provide() {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      //先关闭，再打开
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
</style>
