(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx = global.wx;

  var NxWxDebug = nx.declare('nx.WxDebug', {
    statics: {
      checkJsApi: function(inOptions){
        return new Promise(function(resove, reject){
          wx.checkJsApi(
            nx.mix( inOptions, {
              success: function( data ){
                resove( { status:'success', data: data} );
              },
              fail: function( data ){
                reject( { status:'fail', data: data} );
              },
              complete: function( data ){
                resolve( { status:'complete', data: data } )
              }
            })
          )
        });
        wx.checkJsApi({
          jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function(res) {
          // 以键值对的形式返回，可用的api值true，不可用为false
          // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
          }
      });
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxDebug;
  }

}());