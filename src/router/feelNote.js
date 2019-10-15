import feelNoteRoot from "@/views/feelNote/feelNoteRoot";
import feelNoteHome from "@/views/feelNote/feelNoteHome"; //首页
import addFeelNote from "@/views/feelNote/addFeelNote";
export default [
  {
    path: "/feelNote/",
    components: {
      default: feelNoteRoot,
      meta: {
        index: "feelNote"
      }
    },
    children: [
      {
        path: "/feelNote/feelNoteHome",
        components: {
          default: feelNoteHome
        },
        name: "feelNoteHome"
      }, {
        path: "/feelNote/addFeelNote",
        components: {
          default: addFeelNote
        },
        name: "addFeelNote"
      }
    ]
  }
];
