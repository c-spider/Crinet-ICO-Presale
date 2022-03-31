(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[21],{1753:function(e,t,r){"use strict";var s=r(76).default,a=r(0),n=r(142).default,u=r(84).default,c=r(85).default,i=r(141).default,h=r(143).default;Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppProvider=void 0;var o=r(70),d=r(1754),p=function(e){i(r,e);var t=h(r);function r(e,s){var a;return u(this,r),(a=t.call(this)).submittedTxs=new Map,a.safe=e,a.sdk=s,a}return c(r,[{key:"connect",value:function(){var e=n(a.mark((function e(){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.emit("connect",{chainId:this.chainId}),e.abrupt("return");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=n(a.mark((function e(){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"chainId",get:function(){return this.safe.chainId}},{key:"request",value:function(){var e=n(a.mark((function e(t){var r,n,u,c,i,h,o,p,f,l,g,b,k,v,x,m;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.method,n=t.params,u=void 0===n?[]:n,e.t0=r,e.next="eth_accounts"===e.t0?4:"net_version"===e.t0||"eth_chainId"===e.t0?5:"personal_sign"===e.t0?6:"eth_sign"===e.t0?12:"eth_sendTransaction"===e.t0?18:"eth_blockNumber"===e.t0?24:"eth_getBalance"===e.t0?28:"eth_getCode"===e.t0?29:"eth_getTransactionCount"===e.t0?30:"eth_getStorageAt"===e.t0?31:"eth_getBlockByNumber"===e.t0?32:"eth_getBlockByHash"===e.t0?33:"eth_getTransactionByHash"===e.t0?34:"eth_getTransactionReceipt"===e.t0?47:"eth_estimateGas"===e.t0?58:"eth_call"===e.t0?59:"eth_getLogs"===e.t0?60:"eth_gasPrice"===e.t0?61:62;break;case 4:return e.abrupt("return",[this.safe.safeAddress]);case 5:return e.abrupt("return","0x".concat(this.chainId.toString(16)));case 6:if(c=s(u,2),i=c[0],h=c[1],this.safe.safeAddress.toLowerCase()===h.toLowerCase()){e.next=9;break}throw new Error("The address or message hash is invalid");case 9:return e.next=11,this.sdk.txs.signMessage(i);case 11:return e.abrupt("return","0x");case 12:if(o=s(u,2),p=o[0],f=o[1],this.safe.safeAddress.toLowerCase()===p.toLowerCase()&&f.startsWith("0x")){e.next=15;break}throw new Error("The address or message hash is invalid");case 15:return e.next=17,this.sdk.txs.signMessage(f);case 17:return e.abrupt("return","0x");case 18:return l=Object.assign({value:"0",data:"0x"},u[0]),e.next=21,this.sdk.txs.send({txs:[l]});case 21:return g=e.sent,this.submittedTxs.set(g.safeTxHash,{from:this.safe.safeAddress,hash:g.safeTxHash,gas:0,gasPrice:"0x00",nonce:0,input:l.data,value:l.value,to:l.to,blockHash:null,blockNumber:null,transactionIndex:null}),e.abrupt("return",g.safeTxHash);case 24:return e.next=26,this.sdk.eth.getBlockByNumber(["latest"]);case 26:return b=e.sent,e.abrupt("return",b.number);case 28:return e.abrupt("return",this.sdk.eth.getBalance([(0,d.getLowerCase)(u[0]),u[1]]));case 29:return e.abrupt("return",this.sdk.eth.getCode([(0,d.getLowerCase)(u[0]),u[1]]));case 30:return e.abrupt("return",this.sdk.eth.getTransactionCount([(0,d.getLowerCase)(u[0]),u[1]]));case 31:return e.abrupt("return",this.sdk.eth.getStorageAt([(0,d.getLowerCase)(u[0]),u[1],u[2]]));case 32:return e.abrupt("return",this.sdk.eth.getBlockByNumber([u[0],u[1]]));case 33:return e.abrupt("return",this.sdk.eth.getBlockByHash([u[0],u[1]]));case 34:return k=u[0],e.prev=35,e.next=38,this.sdk.txs.getBySafeTxHash(k);case 38:v=e.sent,k=v.txHash||k,e.next=44;break;case 42:e.prev=42,e.t1=e.catch(35);case 44:if(!this.submittedTxs.has(k)){e.next=46;break}return e.abrupt("return",this.submittedTxs.get(k));case 46:return e.abrupt("return",this.sdk.eth.getTransactionByHash([k]).then((function(e){return e&&(e.hash=u[0]),e})));case 47:return x=u[0],e.prev=48,e.next=51,this.sdk.txs.getBySafeTxHash(x);case 51:m=e.sent,x=m.txHash||x,e.next=57;break;case 55:e.prev=55,e.t2=e.catch(48);case 57:return e.abrupt("return",this.sdk.eth.getTransactionReceipt([x]).then((function(e){return e&&(e.transactionHash=u[0]),e})));case 58:return e.abrupt("return",this.sdk.eth.getEstimateGas(u[0]));case 59:return e.abrupt("return",this.sdk.eth.call([u[0],u[1]]));case 60:return e.abrupt("return",this.sdk.eth.getPastLogs([u[0]]));case 61:return e.abrupt("return",this.sdk.eth.getGasPrice());case 62:throw Error('"'.concat(t.method,'" not implemented'));case 63:case"end":return e.stop()}}),e,this,[[35,42],[48,55]])})));return function(t){return e.apply(this,arguments)}}()},{key:"send",value:function(e,t){e||t("Undefined request"),this.request(e).then((function(r){return t(null,{jsonrpc:"2.0",id:e.id,result:r})})).catch((function(e){return t(e,null)}))}}]),r}(o.EventEmitter);t.SafeAppProvider=p},1754:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLowerCase=void 0,t.getLowerCase=function(e){return e?e.toLowerCase():e}},714:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppProvider=void 0;var s=r(1753);Object.defineProperty(t,"SafeAppProvider",{enumerable:!0,get:function(){return s.SafeAppProvider}})}}]);
//# sourceMappingURL=21.b8f142f4.chunk.js.map