/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: "/",
    component: () => import("../components/layouts/index"),
    redirect: "/home",
    meta: {
      title: "首页",
      keepAlive: false
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/index"),
        meta: { title: "首页", keepAlive: false }
      },
      {
        path: "/robotpage",
        name: "RobotTestBtn",
        component: () => import("@/views/Robotpage/RobotTestBtn"),
        meta: { keepAlive: false }
      },
      {
        path: '/result',
        name: 'Result',
        component: () => import('@/views/Result/Result'),
        meta: { keepAlive: false }
      }
    ]
  }
]
