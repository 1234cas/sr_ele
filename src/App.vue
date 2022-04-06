<template>
  <div id="app">
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  // 使用全局组件时不能有同名局部组件不然会被覆盖
  name: 'App',
  methods: {
    mouserwheel() {
      let start = 0
      document.getElementById('app').addEventListener('mousewheel', function (e) {
        start += e.deltaY
        window.scrollTo(0, start)
      })
    }
  },
  mounted() {}
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  font-family: 'Microsoft YaHei', 'FangSong';
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #e2e2e2;
  border-radius: 2px;
  border: 0px #e2e2e2 solid;
}
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 5px;
}
</style>
