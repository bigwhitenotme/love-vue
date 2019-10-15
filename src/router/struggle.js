import struggleRoot from "@/views/struggle/struggleRoot";
import struggleHome from "@/views/struggle/struggleHome"; //首页
export default [
  {
    path: "/struggle/",
    components: {
      default: struggleRoot,
      meta: {
        index: "struggle"
      }
    },
    children: [
      {
        path: "/struggle/struggleHome",
        components: {
          default: struggleHome
        },
        name: "struggle"
      }
    ]
  }
];
