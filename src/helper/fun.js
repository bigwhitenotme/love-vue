const fun = {
    //生成随机数
    random(m,n){
        return Math.floor(Math.random()*(m - n) + n);
    },
    //获取当前时间
    getNowDate(obj){
        let options = {
            y: obj ? obj.y == false ? obj.y : true : true,
            d: obj ? obj.d == false ? obj.d : true : true,
            w: obj ? obj.w == false ? obj.w : true : true,
            h: obj ? obj.h == false ? obj.h : true : true,
            s: obj ? obj.s ? obj.s : false : false
        }
        let myDate = new Date();
        let year = myDate.getYear() + 1900;
        let mouth = myDate.getMonth() + 1;
        let day = myDate.getDate();
        let week = myDate.getDay();
        let hour = myDate.getHours();
        let minute = myDate.getMinutes();
        let second = myDate.getSeconds();
        let str = '';
        let timing = myDate.getTime();
        if(options.y){
            str += year; 
        }
        if(options.d){
            mouth < 10 ? mouth = '0' + mouth : '';
            day < 10 ? day = '0' + day : '';
            if(str){
                str += '-' + mouth + '-' + day
            }else{
                str += mouth + '-' + day
            }
        }
        if(options.w){
            let weekStr = '';
            week == 0 ? weekStr = '周日' :
            week == 1 ? weekStr = '周一' :
            week == 2 ? weekStr = '周二' :
            week == 3 ? weekStr = '周三' :
            week == 4 ? weekStr = '周四' :
            week == 5 ? weekStr = '周五' :
            week == 6 ? weekStr = '周六' : '';
            if(str){
                str += ' ' + weekStr;
            }else{
                str += weekStr;
            }
        }
        if(options.h){
            hour < 10 ? hour = '0' + hour : '';
            minute < 10 ? minute = '0' + minute : '';
            if(str){
                str += ' ' + hour + ':' + minute;
            }else{
                str += hour + ':' + minute
            }
        }
        if(options.s){
            second < 10 ? second = '0' + second : '';
            str += ':' + second;
        }
        return {str,timing};
    },
    //获取指定时间
    getSomeDate(time,obj){
        let options = {
            y: obj ? obj.y == false ? obj.y : true : true,
            d: obj ? obj.d == false ? obj.d : true : true,
            w: obj ? obj.w == false ? obj.w : true : true,
            h: obj ? obj.h == false ? obj.h : true : true,
            s: obj ? obj.s ? obj.s : false : false
        }
        let myDate = new Date(time);
        let year = myDate.getYear() + 1900;
        let mouth = myDate.getMonth() + 1;
        let day = myDate.getDate();
        let week = myDate.getDay();
        let hour = myDate.getHours();
        let minute = myDate.getMinutes();
        let second = myDate.getSeconds();
        let str = '';
        let timing = myDate.getTime();
        if(options.y){
            str += year; 
        }
        if(options.d){
            mouth < 10 ? mouth = '0' + mouth : '';
            day < 10 ? day = '0' + day : '';
            if(str){
                str += '-' + mouth + '-' + day
            }else{
                str += mouth + '-' + day
            }
        }
        if(options.w){
            let weekStr = '';
            week == 0 ? weekStr = '周日' :
            week == 1 ? weekStr = '周一' :
            week == 2 ? weekStr = '周二' :
            week == 3 ? weekStr = '周三' :
            week == 4 ? weekStr = '周四' :
            week == 5 ? weekStr = '周五' :
            week == 6 ? weekStr = '周六' : '';
            if(str){
                str += ' ' + weekStr;
            }else{
                str += weekStr;
            }
        }
        if(options.h){
            hour < 10 ? hour = '0' + hour : '';
            minute < 10 ? minute = '0' + minute : '';
            if(str){
                str += ' ' + hour + ':' + minute;
            }else{
                str += hour + ':' + minute
            }
        }
        if(options.s){
            second < 10 ? second = '0' + second : '';
            str += ':' + second;
        }
        return {str,timing};
    },
    //时间戳转换
    getDate(time){
        let  myDate = new Date(time);
        let year = myDate.getYear() + 1900;
        let mouth = myDate.getMonth() + 1;
        let day = myDate.getDate();
        let str = '';
        str += year;
        mouth < 10 ? mouth = '0' + mouth : '';
        day < 10 ? day = '0' + day : '';
        str += '-' + mouth + '-' + day
        return str;
    },
    //根据宽度自动添加省略
    addEllipsis(width,fontSize,str){
        let length = Math.floor(width/fontSize);
        let reg = new RegExp("[a-zA-Z0-9,.!?`@#$%^&*()_+|{}:<>;/]")
        let num = 0;
        let newStr = '';
        for(let i = 0; i < str.length; i ++){
            if(reg.test(str[i])){
                num += 0.5;
            }else{
                num += 1;
            }
            newStr += str[i];
            if(num>=length){
                newStr += '...'
                return newStr;
            }
        }
        return str;
    },
    //根据宽度自动分散分布
    addClipper(width,height,arr){
        let html = document.getElementsByTagName("html");
        let dpr = html[0].getAttribute("data-dpr");
        let w = Math.floor(width/150);
        let h = Math.floor(height/150);
        let random = [];
        function ran(arr){
            arr.forEach(val=>{
                if(!val.random){
                    let ranNum = Math.floor(Math.random()*(w*h - 1) + 1) - 1;
                    if(random.indexOf(ranNum) == -1){
                        val.random = ranNum;
                        random.push(ranNum);
                        val.fontSize = (15 + Math.floor(Math.random()*(5 - 1) + 1)) * dpr;
                        val.x = (Math.floor(Math.random()*(35 - 5) + 5)) * dpr;
                        val.y = (Math.floor(Math.random()*5)) * dpr;
                    }else{
                        ran(arr);
                    }
                }
            })
        }
        ran(arr);
        return arr;
    },
    //追加自动分散分布
    toAddClipper(width,height,arr,val){
        let w = Math.floor(width/150);
        let h = Math.floor(height/150);
        let random = [];
        arr.forEach(val=>{
            random.push(val.random);
        })
        if(val.isAdd){
            function ran(){
                let ranNum = Math.floor(Math.random()*(w*h - 1) + 1) - 1;
                if(random.indexOf(ranNum) == -1){
                    val.random = ranNum;
                    val.fontSize = (15 + Math.floor(Math.random()*(5 - 1) + 1)) * dpr;
                    val.x = (Math.floor(Math.random()*(35 - 5) + 5)) * dpr;
                    val.y = (Math.floor(Math.random()*5)) * dpr;
                }else{
                    ran();
                }
            }
            ran();
            arr.push(val);
        }else{
            arr.forEach((item,index) => {
                item.id == val.id ? arr.splice(index,1) : '';
            });
        }
        return arr;
    }
}

export default fun;