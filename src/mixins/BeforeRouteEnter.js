import { getStorage } from '@/utils'
import { Message } from 'element-ui'
export default {
  // 路由进入
  beforeRouteEnter(to, from, next) {
    if (to.name === 'login' && getStorage()) {
      Message({
        message: '无需重复登录',
        type: 'warning',
        onClose: () => {}
      })
      next(false)
    } else {
      next()
    }
  }
}
