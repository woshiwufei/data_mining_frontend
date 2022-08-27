// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = () => import("@/components/home/main.vue");
const RegisterLogin = () =>
  import("@/components/register-login/RegisterLogin.vue");
const Editor = () => import("@/components/editor/Editor.vue");
const Info = () => import("@/components/info/Info.vue");
const Detail = () => import("@/components/info/Detail.vue");
// const Edit = () => import("@/components/editor/Editor.vue");
const Card = () => import("@/components/info/Card.vue");

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/register&login",
    component: RegisterLogin,
  },
  {
    path: "/editor",
    component: Editor,
  },
  {
    path: "/info",
    component: Info,
    redirect: "/info/notice",
    children: [
      {
        path: "study",
        component: Card,
      },
      {
        path: "notice",
        component: Card,
      },
      {
        path: "weekly",
        component: Card,
      },
      {
        path: "detail/:id",
        component: Detail,
        children: [
          // {
          //   path: "detail",
          //   component: Detail,
          // },
          // {
          //   path: "edit",
          //   component: Edit,
          // },
        ],
      },
    ],
  },
];

export default routes;
