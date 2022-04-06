<template>
  <div ref="nav">
    <el-menu :default-active="activeIndex" class="el-menu-out" mode="horizontal" @select="handleSelect" text-color="#fff" :background-color="navColor" :active-text-color="navTextColor" unique-opened router>
      <img src="../assets/logo.png" alt="" id="logo">

      <el-menu-item index="Home" route="/home">首页</el-menu-item>

      <el-submenu index="Prodcuts">
        <template slot="title">产品</template>
        <el-menu-item index="Product" route="/products/product">产品</el-menu-item>
        <el-menu-item index="Matsutake" route="/products/matsutake">松茸</el-menu-item>
        <el-menu-item index="Redrice" route="/products/redrice">红米</el-menu-item>
        <el-menu-item index="Facemask" route="/products/facemask">面膜</el-menu-item>
        <el-submenu index="2-5">
          <template slot="title">其他产品</template>
          <el-menu-item index="Redricewine" route="/other/redricewine">红米酒</el-menu-item>
          <el-menu-item index="Snacks" route="/other/snacks">零食</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="About" route="/about">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.name,
      navColor: '#545c64',
      navTextColor: '#d01010'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key)
    }
  },
  mounted() {
    let nav = this.$refs.nav
    // console.log(nav);
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > nav.offsetHeight + 300) {
        this.navColor = 'rgba(221, 203, 203, 0.61)'
        this.navTextColor = 'rgb(155, 31, 31)'
      } else {
        this.navColor = '#545c64'
        this.navTextColor = '#d01010'
      }
    })
  }
}
</script>

<style lang="less">
.el-menu-out.el-menu {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  border-bottom: none;
  height: 60px;
  // transition: all 0.5s;
  z-index: 20;
  &.afternav {
    color: rgb(155, 31, 31);
  }
  #logo {
    position: absolute;
    top: 4px;
    left: 5vw;
    width: 55px;
    border: 5px;
    vertical-align: middle;
  }
  li[class^='el'],
  div[class^='el'] {
    display: block;
    margin: 0 20px;
    // transition: all 0.5s;
    background-color: transparent !important;
  }
}
</style>