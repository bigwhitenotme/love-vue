import setUpRoot from "@/views/setUp/setUpRoot";
import setUp from "@/views/setUp/setUp"; //首页
import managmentPswd from "@/views/setUp/managmentPswd";//登录密码
import addBackups from "@/views/setUp/addBackups";//上传重要资料备份
import about from "@/views/setUp/about";//关于
import loginPswd from "@/views/setUp/loginPswd";//登录密码
import changePswd from "@/views/setUp/changePswd";//修改密码
import forgetPswd from "@/views/setUp/forgetPswd";//忘记密码 
import certification from "@/views/setUp/certification";//实名认证 
import bindingIphone from "@/views/setUp/bindingIphone";//手机号绑定
import relativesPswd from "@/views/setUp/relativesPswd";//设置至亲密码
import weChat from "@/views/setUp/weChat";//解绑微信号
import switchingAccounts from "@/views/setUp/switchingAccounts";//切换账号
export default [
  {
    path: "/setUp/",
    components: {
      default: setUpRoot,
      meta: {
        index: "setUp"
      }
    },
    children: [
      {
        path: "/setUp/setUp",
        components: {
          default: setUp
        },
        name: "setUp"
      },
      {
        path: "/setUp/managmentPswd",
        components: {
          default:managmentPswd
        },
        name: "managmentPswd"
      },
      {
        path: "/setUp/addBackups",
        components: {
          default:addBackups
        },
        name: "addBackups"
       
      },
      {
        path: "/setUp/about",
        components: {
          default:about
        },
        name: "about"
       
      },{
        path: "/setUp/loginPswd",
        components: {
          default:loginPswd
        },
        name: "loginPswd"
       
      },{
        path: "/setUp/changePswd",
        components: {
          default:changePswd
        },
        name: "changePswd"
       
      },{
        path: "/setUp/forgetPswd",
        components: {
          default:forgetPswd
        },
        name: "forgetPswd"
       
      },{
        path: "/setUp/certification",
        components: {
          default:certification
        },
        name: "certification"
        
      },{
        path: "/setUp/bindingIphone",
        components: {
          default:bindingIphone
        },
        name: "bindingIphone"
      },{
        path: "/setUp/relativesPswd",
        components: {
          default:relativesPswd
        },
        name: "relativesPswd"
      },{
        path: "/setUp/weChat",
        components: {
          default: weChat
        },
        name: "weChat"
      },{
        path: "/setUp/switchingAccounts",
        components: {
          default:switchingAccounts
        },
        name: "switchingAccounts"
      }
    ]
  }
];
