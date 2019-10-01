<template>
  <div :class="['sidebar',collapse?'sidebar__collapse':'']">
    <div class="logo">
      <i class="el-icon-monitor"></i>
      <span v-show="!collapse">后台管理系统</span>
    </div>
    <el-menu :default-active="onRoutes"
             class="sidebar-menu"
             :collapse="collapse"
             unique-opened
             router>
      <template v-for="item in menu">
        <el-submenu v-if="item.children && item.children.length"
                    :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item v-for="subItem in item.children"
                        :key="subItem.index"
                        :index="subItem.index">{{subItem.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else
                      :index="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      menu: [
        {
          index: 'home',
          icon: 'el-icon-s-operation',
          title: '系统首页'
        },
        {
          index: 'list',
          icon: 'el-icon-document',
          title: '菜单列表'
        },
        {
          index: 'book',
          icon: 'el-icon-reading',
          title: '图书管理',
          children: [
            {
              index: 'bookList',
              title: '图书列表',
            }
          ]
        },
        {
          index: 'ceshi',
          icon: 'el-icon-warning-outline',
          title: '测试权限'
        }
      ]
    }
  },
  computed: {
    ...mapState(['collapse']),
    onRoutes() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: $--sidebar-default-width;
  height: 100vh;
  background: $--color-default;
  transition: all 0.3s linear;
  &__collapse {
    width: $--sidebar-collapse-width;
  }
  .logo {
    overflow: hidden;
    height: 72px;
    line-height: 72px;
    background: $--color-primary;
    white-space: nowrap;
    text-align: center;
    i {
      vertical-align: middle;
      font-size: 30px;
      color: $--color-text-white;
    }
    span {
      margin-left: 10px;
      font-size: 18px;
      color: $--color-text-white;
      vertical-align: middle;
    }
  }
  &-menu {
    background: none;
    border-right: none;
    width: $--sidebar-collapse-width;
    &:not(.el-menu--collapse) {
      width: $--sidebar-default-width;
    }
    /deep/.el-menu-item {
      color: $--color-text-white;
      i {
        color: $--color-text-white;
      }
      &:hover,
      &:focus,
      &.is-active {
        background: $--color-primary;
      }
    }
    /deep/.el-submenu {
      &__title {
        color: $--color-text-white;
        i {
          color: $--color-text-white;
        }
        &:hover {
          background: $--color-primary;
        }
      }
      .el-menu {
        background: none;
      }
    }
  }
}
</style>
