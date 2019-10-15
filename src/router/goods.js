import goodsRoot from "@/views/goods/goodsRoot";
import goodsHome from "@/views/goods/goodsHome"; //首页
import goodsList from "@/views/goods/goodsList"
import goodsDetail from "@/views/goods/goodsDetail"//详情
export default [
  {
    path: "/goods/",
    components: {
      default: goodsRoot,
      meta: {
        index: "goods"
      }
    },
    children: [
      {
        path: "/goods/goodsHome",
        components: {
          default: goodsHome
        },
        name: "goodsHome"
      },{
        path: "/goods/goodsList",
        components: {
          default: goodsList
        },
        name: "goodsList"
      },{
        path: "/goods/goodsDetail",
        components: {
          default:goodsDetail
        },
        name: "goodsDetail"
      }
    ]
  }
];
