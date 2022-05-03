<template>
  <Header
    title="CRM"
    small-title="只要学不死，就往死里学"
    :isShow="true"
    :rightText="rightText"
    @select="selectHeader"
  />
  <OneTabbar :label="label"/>

  <div class="home-text">
    <router-view></router-view>
  </div>
</template>

<script>
import OneTabbar from '@/components/component/OneTabbar/OneTabbar'
import Header from '@/components/component/Header/Header'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  components: { Header, OneTabbar },
  data () {
    return {
      rightText: '刘涛',
      label: ['市场活动', '交易', '客户']
    }
  },
  methods: {
    selectHeader (val) {
      switch (val) {
        case '1-1':
          alert(val)
          break
        case '1-2':
          alert(val)
          break
        case '1-3':
          alert(val)
          break
        case '1-4':
          localStorage.removeItem('token')
          this.$router.replace('login')
          break
      }
    }

  }
}
</script>

<style scoped>
.home-text {
  margin-left: 200px;

}
</style>
