<template>
  <div class="header-container">
        <div class="title">
          {{title}}
          <span style="font-size: 12px;" >{{smallTitle}}</span>
        </div>
    <div class="right-text">
      <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b"
        background-color="#3C3C3C"
        text-color="#FFFFFF"
        v-show="isShow"
        @select="select"
      >
        <el-sub-menu index="1" >
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ rightText }}</span>
          </template>
          <el-menu-item index="1-1">系统设置</el-menu-item>
          <el-menu-item index="1-2">我的资料</el-menu-item>
          <el-menu-item index="1-3">修改密码</el-menu-item>
          <el-menu-item index="1-4">退出</el-menu-item>
        </el-sub-menu>

      </el-menu>
    </div>
    <slot/>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    smallTitle: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    select (val) {
      this.$emit('select', val)
    }
  }
}
</script>

<style lang="less" scoped>
  .header-container {
    position: relative;
    height: 56px;
    background-color: #3C3C3C;
    z-index: 99;
  }
  .title {
    position: absolute;
    top: 5px;
    left: 0px;
    font-size: 30px;
    font-weight: 400;
    color: white;
  }
  .right-text {
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    width: 150px;
  }

</style>
