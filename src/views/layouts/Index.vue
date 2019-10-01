<template>
  <div class="layouts">
    <vHeader></vHeader>
    <vSideBar></vSideBar>
    <div :class="['layouts-content',collapse?'layouts-content__collapse':'']">
      <el-scrollbar class="layouts-scroll">
        <router-view></router-view>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vHeader from '@components/layouts/Header'
import vSideBar from '@components/layouts/Sidebar'
export default {
  components: {
    vHeader,
    vSideBar
  },
  computed: {
    ...mapState(['collapse'])
  },
}
</script>

<style lang="scss" scoped>
.layouts {
  overflow: hidden;
  padding-top: $--header-height;
  height: 100vh;
  background: #f9fafb;
  box-sizing: border-box;
  &-content {
    margin-left: $--sidebar-default-width;
    transition: all 0.3s linear;
    &__collapse {
      margin-left: $--sidebar-collapse-width;
    }
  }
  &-scroll {
    padding: 20px;
    height: calc(100vh - 85px);
    box-sizing: border-box;
  }
}
</style>
