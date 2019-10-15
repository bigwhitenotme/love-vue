import wishListRoot from "@/views/wishList/wishListRoot";
import wishListHome from "@/views/wishList/wishListHome"; //首页
export default [
  {
    path: "/wishList/",
    components: {
      default: wishListRoot,
      meta: {
        index: "wishList"
      }
    },
    children: [
      {
        path: "/wishList/wishList",
        components: {
          default: wishListHome
        },
        name: "wishList"
      }
    ]
  }
];
