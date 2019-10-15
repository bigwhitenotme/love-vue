// const info = {
//   'user':{
//     "userName": '',
//     "token": '',
//     "sourceType" : ''
//   }
// };

const info = {
  'product': true,
  'user':{
    "userName": '13955135080',
    "token": 'd9f66e81aec9dd004b3869a8f63e91a9648653b18652895d1775e6b1339ab73b',
    "sourceType" : 'M'
  }
}

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    window.geturl = function(url){
      window.webkit.messageHandlers.getUrl.postMessage('http://47.96.17.68'+url);
    }
    window.webGoBackTap = function(){
      window.webkit.messageHandlers.webGoBackTap.postMessage(true);
    }
    window.showDatePickerDialog = function(){
      window.webkit.messageHandlers.showDatePickerDialog.postMessage(true);
    }
    window.toShare = function(){
      window.webkit.messageHandlers.toShare.postMessage(true);
    }
    window.judgeShow = function(bool){
      window.webkit.messageHandlers.judgeShow.postMessage(bool);
    }
} else if (/(Android)/i.test(navigator.userAgent)) {
    if(android){
        window.showDatePickerDialog = function(){
          android.showDatePickerDialog();
        }
        window.geturl = function(url){
          android.geturl('http://47.96.17.68'+url);
        }
        window.webGoBackTap = function(){
          android.webGoBackTap(true);
        }
        window.toShare = function(){
          android.toShare();
        }
        window.judgeShow = function(bool){
          android.judgeShow(bool);
        }
    }
}

export default info;