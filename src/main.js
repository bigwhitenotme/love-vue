import Vue from 'vue'; 
import App from './App.vue'; 
import { AppRouter } from "./router"; 
import 'lib-flexible' 
import fastclick from 'fastclick';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import fun from './helper/fun'
import http from './helper/http'
import info from './helper/info'
import { Toast } from 'mint-ui';
import imageClipper from './components/clipper/index'
import Vant from 'vant';
import 'vant/lib/index.css';

fastclick.attach(document.body);
Vue.config.productionTip = false;

Vue.use(MintUI);
Vue.use(Vant)
Vue.use(imageClipper)
Vue.prototype.$fun = fun;
Vue.prototype.$http = http;
Vue.prototype.$toast = Toast;
Vue.prototype.$user = info.user;
Vue.prototype.$info = info;

new Vue({ 
    router: AppRouter, 
    render: h => h(App), 
}).$mount('#app')