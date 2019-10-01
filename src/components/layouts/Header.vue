<template>
  <div :class="['header',collapse?'header__collapse':'']">
    <div class="header-left">
      <i v-if="!collapse"
         class="el-icon-s-fold"
         @click="setCollapse(true)"></i>
      <i v-else
         class="el-icon-s-unfold"
         @click="setCollapse(false)"></i>
      <span class="header-cur">{{cur}}</span>
    </div>
    <div class="header-right">
      <div class="header-userbox">
        <div class="header-userbox__avator">
          <img src="@assets/images/user_avator.jpg"
               alt="">
        </div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{userName}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="signout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { SET_COLLAPSE } from '@store/contants'
import { removeStorage } from '@utils/index'
export default {
  data() {
    return {
      userName: '超级管理员'
    }
  },
  computed: {
    ...mapState(['collapse']),
    cur() {
      return this.$route.meta.title
    }
  },
  methods: {
    setCollapse(collapse) {
      // 设置左侧栏展开关闭
      this.$store.commit(SET_COLLAPSE, collapse)
    },
    handleCommand(command) {
      // 退出登录
      if (command === 'signout') {
        removeStorage();
        this.$message.success('退出登录成功')
        this.$router.replace('/login');
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: $--sidebar-default-width;
  z-index: 9;
  padding: 0 20px;
  height: $--header-height;
  background: #eef4f9;
  transition: all 0.3s linear;
  &__collapse {
    left: $--sidebar-collapse-width;
  }
  &-left {
    float: left;
    line-height: $--header-height;
    i {
      cursor: pointer;
      vertical-align: middle;
      font-size: 18px;
    }
  }
  &-cur {
    margin-left: 20px;
    vertical-align: middle;
  }
  &-right {
    float: right;
  }
  &-userbox {
    &__avator {
      display: inline-block;
      vertical-align: middle;
      line-height: $--header-height;
      img {
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .el-dropdown-link {
      cursor: pointer;
      vertical-align: middle;
    }
  }
}
</style>
