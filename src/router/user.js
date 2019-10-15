import userRoot from "@/views/user/userRoot";
import user from "@/views/user/user"; //首页
import bodyData from "@/views/user/bodyData"; //身体数据
import collect from "@/views/user/collect"; //收藏
import monthTime from "@/views/user/monthTime";//个人数据
import userInfo from "@/views/user/userInfo";//个人信息
import userName from "@/views/user/userName";//修改姓名
import userSignature from "@/views/user/userSignature";//修改个性签名
import userEnergy from "@/views/user/userEnergy";//修改能量罩
import userAddress from "@/views/user/userAddress";//修改地址
import newAddress from "@/views/user/newAddress";//新增地址
import editAddress from "@/views/user/editAddress";//新增地址
import userPic from "@/views/user/userPic";//修改头像
import userPicClipper from "@/views/user/userPicClipper";//裁剪头像
import userSexual from "@/views/user/userSexual";//修改性别
import grantInstructions from "@/views/user/grantInstructions"//请君赐教
import help from "@/views/user/help";//帮助
import  problem from "@/views/user/problem";//常见问题
import  problemDetail from "@/views/user/problemDetail";//常见问题详情
import  bill from "@/views/user/bill";//订单
import  logistics from "@/views/user/logistics";//物流
import  confirm from "@/views/user/confirm";//订单确认
import  agreement from "@/views/user/agreement";//订单确认
export default [
  {
    path: "/user/",
    components: {
      default:userRoot,
      meta: {
        index: "user"
      }
    },
    children: [
      {
        path: "/user/user",
        components: {
          default:user
        },
        name: "user"
      }, {
        path: "/user/bodyData",
        components: {
          default: bodyData
        },
        name: "bodyData"
      },
      {
        path: "/user/collect",
        components: {
          default:collect
        },
        name: "collect"
       
      }, {
        path: "/user/monthTime",
        components: {
          default:monthTime
        },
        name: "monthTime"
      }, {
        path: "/user/userInfo",
        components: {
          default:userInfo
        },
        name: "userInfo"
      }, {
        path: "/user/userName",
        components: {
          default:userName
        },
        name: "userName"
      }, {
        path: "/user/userSignature",
        components: {
          default:userSignature
        },
        name: "userSignature"
      }, {
        path: "/user/userEnergy",
        components: {
          default:userEnergy
        },
        name: "userEnergy"
      }, {
        path: "/user/userAddress",
        components: {
          default:userAddress
        },
        name: "userAddress"
      },
      {
        path: "/user/newAddress",
        components: {
          default:newAddress
        },
        name: "newAddress"
      },{
        path: "/user/editAddress",
        components: {
          default:editAddress
        },
        name: "editAddress"
      },{
        path: "/user/userPic",
        components: {
          default:userPic
        },
        name: "userPic"
      }, {
        path: "/user/userPicClipper",
        components: {
          default:userPicClipper
        },
        name: "userPicClipper"
      }, {
        path: "/user/userSexual",
        components: {
          default:userSexual
        },
        name: "userSexual"
      },{
        path: "/user/grantInstructions",
        components: {
          default:grantInstructions
        },
        name: "grantInstructions"
      },{
        path: "/user/help",
        components: {
          default:help
        },
        name: "help"
      },{
        path: "/user/problem",
        components: {
          default:problem
        },
        name: "problem"
        
      },{
        path: "/user/problemDetail",
        components: {
          default:problemDetail
        },
        name: "problemDetail"
        
      },{
        path: "/user/bill",
        components: {
          default:bill
        },
        name: "bill"
      },{
        path: "/user/logistics",
        components: {
          default:logistics
        },
        name: "logistics"
      },{
        path: "/user/confirm",
        components: {
          default:confirm
        },
        name: "confirm"
      },{
        path: "/user/agreement",
        components: {
          default:agreement
        },
        name: "agreement"
      }
    ]
  }
];
