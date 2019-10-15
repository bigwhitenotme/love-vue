import solutionStoreRoot from "@/views/solutionStore/solutionStoreRoot";
import solutionStoreHome from "@/views/solutionStore/solutionStoreHome"; //首页
import solutionStoreDetail from "@/views/solutionStore/solutionStoreDetail"; //详情
import search from "@/views/solutionStore/search"; //搜索
import searchContent from "@/views/solutionStore/searchContent"; //搜索内容
import add from "@/views/solutionStore/add"; //添加
import detail from "@/views/solutionStore/detail"; //详情
import look from "@/views/solutionStore/look"; //查看回复
export default [
  {
    path: "/solutionStore/",
    components: {
      default: solutionStoreRoot,
      meta: {
        index: "solutionStore"
      }
    },
    children: [
      {
        path: "/solutionStore/solutionStoreHome",
        components: {
          default: solutionStoreHome
        },
        name: "solutionStoreHome"
      },{
        path: "/solutionStore/solutionStoreDetail",
        components: {
          default: solutionStoreDetail
        },
        name: "solutionStoreDetail"
      },{
        path: "/solutionStore/search",
        components: {
          default: search
        },
        name: "search"
        
      },{
        path: "/solutionStore/searchContent",
        components: {
          default: searchContent
        },
        name: "searchContent"
       
      },{
        path: "/solutionStore/add",
        components: {
          default: add
        },
        name: "add"
      },{
        path: "/solutionStore/detail",
        components: {
          default: detail
        },
        name: "detail"
      },{
        path: "/solutionStore/look",
        components: {
          default: look
        },
        name: "look"
      }
    ]
  }
];
