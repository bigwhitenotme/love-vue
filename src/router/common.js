import commonRoot from "@/views/common/commonRoot";
import common from "@/views/common/common"; //首页
import tishi from "@/views/common/tishi"; //404
export default [
  {
    path: "/common/",
    components: {
      default: commonRoot,
      meta: {
        index: "common"
      }
    },
    children: [
      {
        path: "/common/common",
        components: {
          default: common
        },
        name: "common"
      }, {
        path: "/common/tishi",
        components: {
          default: tishi
        },
        name: "tishi"
      }
    ]
  }
];
