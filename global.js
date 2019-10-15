//返回基本api路径
export const BASE_URL = process.env.VUE_APP_API_URL;

//返回上传api路径
export const UPLOAD_URL = process.env.VUE_APP_API_UPLOAD_URL;

//返回api路径的接口名
export const api = {
    //登录
    login: 'love/api/user/login',
    //获取短信验证码
    getVerifyCode:'love/api/user/getVerifyCode',
    //获取基本信息
    basicData:'love/api/oneself/basicData',

    //爱自己首页获取图标信息
    oneSelfApp: 'love/api/oneself/appFunction',
    //爱自己首页更改图标选中状态
    updateApp: 'love/api/oneself/updateAppFunction',

    //添加幸福日记
    addDiary:'love/api/happyDiary/addDiary',


    //愿望清单获取列表
    getWishList: 'love/api/wishList/getWishList',
    //愿望清单删除
    wishDelete:'love/api/wishList/deleteWishList',
    //愿望清单置顶
    wishUp:'love/api/wishList/editIsUpWishList',
    //愿望清单添加
    wishAdd:'love/api/wishList/addWishList',
    //愿望清单编辑列表
    wishEdit:'love/api/wishList/editWishList',
    //愿望清单点击完成
    wishEditFinish:'love/api/wishList/editFinishWishList',

    //有感笔记头部标题修改
    editWishListTitle:'love/api/wishList/editWishListTitle',
    //有感笔记添加
    addNote:'love/api/note/addNote',
    //查询有感笔记
    getNoteList:'love/api/note/getNoteList',
    //查询有感笔记类型
    getNoteType:'love/api/note/getNoteType',
    //添加有感笔记类型
    addNoteType:'love/api/note/addNoteType',
    //编辑有感笔记
    editNote:'love/api/note/editNote',
    //删除有感笔记类型
    deleteNoteType:'love/api/note/deleteNoteType',
    //删除已选有感笔记
    deleteNote:'love/api/note/deleteNoteBatch',
    //删除单挑有感笔记
    deleteNoteItem: 'love/api/note/deleteNote',

    //获取个人信息
    getUserInfo: 'love/api/user/getPersonalData',
    //修改个人信息
    changeUserInfo:'love/api/user/changeUserInfo',
    //获取身体数据信息
    bodyData:'love/api/oneself/bodyData',
    //修改身体数据
    changeBodyData:'love/api/user/changeBodyData',
    //获取地址列表
    personalList:'love/api/address/personalList',
    //查询私密信息
    getPersonInfo:'love/api/privateInfo/getPersonInfo',
    //编辑私密信息
    addPersonInfo:'love/api/privateInfo/addPersonInfo',

    //上传文件
    upload: 'love/file/file/upload',
    //base64上传
    base: 'file/upload/base64',
    //检查版本更新
    versionCheck: 'love/api/sys/versionCheck',

    //帮助与反馈
    addQuestion: 'love/api/questionFeedback/addQuestion',

    //查询修行标签
    getXiuXingList:'love/api/xiuXing/getXiuXingList',
    //编辑修行标签
    editXiuXing:'love/api/xiuXing/editXiuXing',

    //查询奋斗起来
    getStiveList:'love/api/strive/getStiveList',
    //编辑奋斗起来
    editStive:'love/api/strive/editStive',

    //新增事项提醒
    addMatterRemind:'love/api/matter/addMatterRemind',
    //事项提醒列表
    queryMatterRemindList:'love/api/matter/queryMatterRemindList',
    //修改事项提醒
    updateMatterRemind:'love/api/matter/updateMatterRemind',
    //删除事项提醒
    deleteMatterRemind: 'love/api/matter/deleteMatterRemind',
    //商城
    queryList:'/love/api/shopping/softWen/queryList',
    titleList:'/love/api/shopping/label/list',
    queryOne:'/love/api/shopping/softWen/queryOne',
    details:'/love/api/shopping/goods/details',

    //收藏
    queryCollectPicture:'love/api/collect/queryCollectPicture',
    //退出登录
    logout:'love/api/user/logout'
    
}

export default {api,BASE_URL};