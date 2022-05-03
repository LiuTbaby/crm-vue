<template>
    <div class="tabbar-container">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#3C3C3C"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @select="select"
        :router="true"
      >
        <el-menu-item index="/home/activity">
          <el-icon><location /></el-icon>
            <span>市场活动</span>
        </el-menu-item>
        <el-menu-item index="/home/clue">
          <el-icon><location /></el-icon>
          <span>线索(潜在客户)</span>
        </el-menu-item>
        <el-menu-item index="/home/contacts">
          <el-icon><location /></el-icon>
          <span>客户</span>
        </el-menu-item>
        <el-menu-item index="/home/customer">
          <el-icon><location /></el-icon>
          <span>联系人</span>
        </el-menu-item>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><location /></el-icon>
            统计图表
          </template>
          <el-menu-item index="/home/activityView">市场活动统计图表</el-menu-item>
          <el-menu-item index="/home/clueView">线索统计图表</el-menu-item>
          <el-menu-item index="/home/contactsView">客户和联系人统计图表</el-menu-item>
          <el-menu-item index="/home/customerView">交易统计图表</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'OneTabbar',
  props: {
    tabPosition: {
      type: String,
      default: 'left'
    },
    label: {
      type: Array,
      default: null
    }
  },
  methods: {
    select (val) {
      console.log(val)
      this.$emit('selectOneTabbar', val)
    }
  }

}
</script>

<style lang="less" scoped>

.tabbar-container {
  position: fixed;
  height: 100%;
  width: 200px;
  text-align: center;
  background-color: #3C3C3C;

}
.el-tabs {
  height: 100%;
  width: 100%;
}

</style>
