import managingTimeRoot from "@/views/managingTime/managingTimeRoot";
import managingTimeHome from "@/views/managingTime/managingTimeHome"; //首页
export default [
  {
    path: "/managingTime/",
    components: {
      default: managingTimeRoot,
      meta: {
        index: "managingTime"
      }
    },
    children: [
      {
        path: "/managingTime/managingTimeHome",
        components: {
          default: managingTimeHome
        },
        name: "managingTimeHome"
      }
    ]
  }
];
