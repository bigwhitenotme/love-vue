import beautifulSelfRoot from "@/views/beautifulSelf/beautifulSelfRoot";
import beautifulSelfHome from "@/views/beautifulSelf/beautifulSelfHome"; //首页
export default [
  {
    path: "/beautifulSelf/",
    components: {
      default: beautifulSelfRoot,
      meta: {
        index: "beautifulSelf"
      }
    },
    children: [
      {
        path: "/beautifulSelf/beautifulSelfHome",
        components: {
          default: beautifulSelfHome
        },
        name: "beautifulSelfHome"
      }
    ]
  }
];
