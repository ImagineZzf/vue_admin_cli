import { loadView } from '@utils/index'
import Auth from '@middlewares/auth'
export default [
  {
    path: 'list',
    name: 'list',
    meta: {
      title: '菜单列表',
      middleware: Auth
    },
    component: loadView('list/Index')
  },
  {
    path: 'bookList',
    name: 'bookList',
    meta: {
      title: '图书管理 / 图书列表',
      middleware: Auth
    },
    component: loadView('book/Index')
  }
]
