import practiceRoot from "@/views/practice/practiceRoot";
import practiceHome from "@/views/practice/practiceHome"; //首页
export default [
  {
    path: "/practice/",
    components: {
      default: practiceRoot,
      meta: {
        index: "practice"
      }
    },
    children: [
      {
        path: "/practice/practiceHome",
        components: {
          default: practiceHome
        },
        name: "practice"
      }
    ]
  }
];
