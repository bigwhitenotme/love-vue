import Vue from "vue";
import Router from "vue-router";

// 入口文件
import main from "./views/main";
//首页
import home from "./views/home/index";
//各个模块
import commonRouter from "./router/common";
import managingTimeRouter from "./router/managingTime";
import feelNoteRouter from "./router/feelNote";
import wishListRouter from "./router/wishList";
import userRouter from "./router/user";
import practiceRouter from "./router/practice";
import goodsRouter from "./router/goods";
//奋斗起来
import struggleRouter from "./router/struggle";
import setUpRouter from "./router/setUp";
import solutionStore from "./router/solutionStore";
//美美的自己
import beautifulSelfRouter from './router/beautifulSelf';

//
import downApp from './views/downApp/downApp'

Vue.use(Router);

let routes = [
  {
  path: "/",
  components: {
    default: main
  },
  children: [
    {
      meta: {
        index: "home"
      },
      path: "/",
      name: "home",
      component: home,
    },
    {
      meta: {
        index: "downApp"
      },
      path: "/downApp",
      name: "downApp",
      component: downApp,
    }
  ].concat(managingTimeRouter, feelNoteRouter, wishListRouter,goodsRouter, userRouter, practiceRouter,struggleRouter, setUpRouter, solutionStore,beautifulSelfRouter,commonRouter)
  },
  {
    path: '*', // 页面不存在的情况下会跳到404页面
    redirect: '/common/tishi',
    name: 'notFound',
    hidden: true
  }
]

const AppRouter = new Router({
  mode: "history",
  routes
});

export {
  Router,
  AppRouter
};