import axios from "axios";
import { api as apiMap , BASE_URL, UPLOAD_URL} from "../../global";
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';

axios.defaults.baseURL = BASE_URL;

const httpHelper = {
    //默认参数
    defaultOption: {
        // 'user':{
        //     "userName": '',
        //     "token": '',
        //     "sourceType" : ''
        //   }
          'user':{
            "userName": '13955135080',
            "token": 'd9f66e81aec9dd004b3869a8f63e91a9648653b18652895d1775e6b1339ab73b',
            "sourceType" : 'M'
          }
    },
    //get请求
    get(api, options, callback) {
        if (!options) {
            options = {};
        }
        let obj = {};
        obj.api = api;
        obj.method = "get";
        obj.data = options;
        this.handle(obj, callback);
    },
    //post请求
    post(api, options, callback) {
        if (!options) {
            options = {};
        }
        let obj = {};
        obj.api = api;
        obj.method = "post";
        obj.data = options;
        this.handle(obj, callback);
    },
    //文件上传请求
    upload(api, options, callback){
        if (!options) {
            options = {};
        }
        let obj = {};
        obj.api = api;
        obj.method = "post";
        obj.data = options;
        this.uploadhandle(obj, callback);
    },
    //从global.js中获取url地址
    getUrlWithApi(api) {
        return apiMap[api] ? apiMap[api] : api;
    },
    /**
   * 处理请求参数
   * @param  {object} options
   * {
   *   api 请求的api名称或者url地址
   *   method  发起请求动作
   *   data  发起请求附带的参数data
   * }
   * @return {}         [description]
   */
    handle(obj, callback) {
        Indicator.open({
            text: '正在加载...',
            spinnerType: 'fading-circle'
        });
        //options = Object.assign({}, this.defaultOptions, options);
        let httpOptions = {
            url: this.getUrlWithApi(obj.api),
            method: obj.method,
            data: obj.data,
            headers:{
                'Content-Type': 'application/json',
                'userName': this.defaultOption.user.userName,
                'sourceType': this.defaultOption.user.sourceType,
                'token': this.defaultOption.user.token
            }
        };
        axios(httpOptions)
            .then(response => {
                Indicator.close();
                let data = response.data;
                if(data.code != 1000){
                    Toast({
                        message: data.msg,
                        duration: 3000
                    });
                    return;
                }
                callback(data)
            })
            .catch(error => {
                Indicator.close();
                callback(error)
            });
    },
    uploadhandle(obj, callback){
        Indicator.open({
            text: '正在加载...',
            spinnerType: 'fading-circle'
        });
        //options = Object.assign({}, this.defaultOptions, options);
        let httpOptions = {
            url: UPLOAD_URL + this.getUrlWithApi(obj.api),
            method: obj.method,
            data: obj.data,
            headers:{
                'Content-Type': 'application/json',
                'userName': this.defaultOption.user.userName,
                'sourceType': this.defaultOption.user.sourceType,
                'token': this.defaultOption.user.token
            }
        };
        axios(httpOptions)
            .then(response => {
                Indicator.close();
                let data = response.data;
                if(data.code != 1000){
                    Toast({
                        message: data.msg,
                        duration: 3000
                    });
                    return;
                }
                callback(data)
            })
            .catch(error => {
                Indicator.close();
                callback(error)
            });
    }
}

export default httpHelper;