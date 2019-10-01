<template>
  <div class="panel">
    <ul class="panel-list">
      <li class="panel-item"
          v-for="(item,index) in infoList">
        <div class="panel-item__text">
          <h4>{{item.title}}</h4>
          <p>{{item.num}}</p>
        </div>
        <div class="panel-item__img">
          <img src="@assets/images/icon_info.png"
               alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getStorage } from '@utils/index';
export default {
  name: 'home',
  data() {
    return {
      infoList: [
        {
          title: '总访问量',
          num: '654,890'
        },
        {
          title: '总用户数',
          num: '531,745'
        },
        {
          title: '新增访问量 (月)',
          num: '45,432'
        },
        {
          title: '购买量（月）',
          num: '18,260'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.panel {
  overflow: hidden;
  &-list {
    overflow: hidden;
    margin: 0 -1%;
  }
  &-item {
    float: left;
    position: relative;
    margin: 0 1%;
    width: 23%;
    height: 90px;
    background: $--color-bg-white;
    box-shadow: 0 2px 14px 0 #f3f3f3;
    border-radius: 8px;
    &__text {
      margin-right: 90px;
      padding: 12px 0 0 30px;
      h4 {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        &:after {
          content: "";
          display: block;
          width: 46px;
          height: 2px;
          background: $--color-text;
        }
      }
      p {
        margin-top: 7px;
        height: 48px;
        line-height: 38px;
        font-size: 32px;
      }
    }
    &__img {
      position: absolute;
      top: 0;
      right: 0;
      width: 90px;
      height: 90px;
      line-height: 90px;
      background: rgba(69, 119, 255, 0.1);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      text-align: center;
      img {
        vertical-align: middle;
        width: 28px;
        height: 33px;
      }
    }
  }
}
</style>
