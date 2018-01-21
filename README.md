# next-wx-debug
> Wechat api for debug part.


## usage:
```js
// install: npm install -S afeiship/next-wx-debug --registry=https://registry.npm.taobao.org

import NxWxDebug from 'next-wx-debug';
NxWxDebug.checkJsApi(['showOptionMenu']).then(({ status, data})=>{
  // you codes goes here!
});
```
