// 咩Auth独立小程序 b站郑羊羊 zyyme.com 20220613 v6.0
try {
    (() => {
      var e = __$$hmAppManager$$__.currentApp;
      var a = e.current, { px: _ } = (new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(e, a)), e.app.__globals__);
      try {
        (() => {
          // auth totp 配置
          const totpM = {
            "1请编辑": "HGDVKOITLQM2S2CA",
            "2page": "VKAORW4J6YJSU473",
            "3index.js": "HL6TWMW4CKVRLGUG",
            "4添加key": "5TDI7EQMRXQBTBDQ",
            "5": "HGDVKOITLQM2S2CA",
            "6": "VKAORW4J6YJSU473",
            "7": "HL6TWMW4CKVRLGUG",
            "8": "5TDI7EQMRXQBTBDQ",
            "9": "HGDVKOITLQM2S2CA",
            "10": "VKAORW4J6YJSU473",
            "11": "HL6TWMW4CKVRLGUG",
            "12": "5TDI7EQMRXQBTBDQ",
            "13": "HGDVKOITLQM2S2CA",
            "14": "VKAORW4J6YJSU473",
            "15": "HL6TWMW4CKVRLGUG",
          }

  
          var e = __$$hmAppManager$$__.currentApp, a = e.current;
          new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(e, a), "drink");
          console.log("-----\x3e>>current"), console.log(__$$hmAppManager$$__.currentApp.pid), console.log(__$$hmAppManager$$__.currentApp.current);
          const time = hmSensor.createSensor(hmSensor.id.TIME);
          
          DeviceRuntimeCore.HmLogger.getLogger("sparkle");
          a.module = DeviceRuntimeCore.WatchFace({
            init_view() {
            try {
              hmUI.createWidget(hmUI.widget.IMG, { x: 0, y: 0, src: "bg.png"});
              hmUI.createWidget(hmUI.widget.CIRCLE, {
                center_x: 96,
                center_y: 245,
                radius: 255,
                color: 0x000000,
                alpha: 50,
                show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD
              });
  
              // totp 部分
              var totpT = null,
              authPage = 0,
              authBtm = [],
              totpTimeout = 0,
              totpFoceUpdate = false;
              const totpKeys = Object.keys(totpM);
  
              // 显示验证码ui
              const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
                resume_call: (function () {
                  totpFoceUpdate = true;
                  console.log('ui resume');
                }),
                pause_call: (function () {
                  console.log('ui pause');
                }),
              })
              let meTotp = hmUI.createWidget(hmUI.widget.GROUP, { x: 0, y: 0, w: 192, h: 490 });
              let meAuth = hmUI.createWidget(hmUI.widget.GROUP, { x: 0, y: 0, w: 192, h: 490 });
              let tName = meTotp.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 120,
                w: 192,
                h: 50,
                text: "key",
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                color: "0xFFFFFF",
                text_size: 40
              }),
                tNum = meTotp.createWidget(hmUI.widget.TEXT, {
                  x: 0,
                  y: 145,
                  w: 192,
                  h: 200,
                  text: "000000",
                  align_h: hmUI.align.CENTER_H,
                  align_v: hmUI.align.CENTER_V,
                  color: "0xFFFFFF",
                  text_size: 50
                }),
                tSec = meTotp.createWidget(hmUI.widget.TEXT, {
                  x: 0,
                  y: 320,
                  w: 192,
                  h: 50,
                  text: "30 s",
                  align_h: hmUI.align.CENTER_H,
                  align_v: hmUI.align.CENTER_V,
                  color: "0xFFFFFF",
                  text_size: 40
                });
                meTotp.createWidget(hmUI.widget.BUTTON, {
                  x: 46,
                  y: 401,
                  w: 100,
                  h: 72,
                  press_color: 2697513,
                  normal_color: 1381653,
                  radius: 30,
                  text: "返回",
                  text_size: 30,
                  color: 16777215,
                  click_func: function () {
                    meAuth.setProperty(hmUI.prop.VISIBLE, true);
                    meTotp.setProperty(hmUI.prop.VISIBLE, false);
                    totpT && timer.stopTimer(totpT);
                    totpT = undefined;
                  }
                });
  
              // 显示auth列表ui
              const authBack = meAuth.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 8,
                w: 192,
                h: 50,
                text: "咩 Auth",
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                color: "0xFFFFFF",
                text_size: 20
              });
              authBack.addEventListener(hmUI.event.CLICK_UP, function (info) {
                authSwitch(false);
              });
  
              // 某个totp库
              function totpRun(n){function F(c,a,e){var d=0,b=[],f=0,g=!1,h=[],m=[],q=!1;e=e||{};var x=e.encoding||"UTF8";var w=e.numRounds||1;var A=S(a,x);if(w!==parseInt(w,10)||1>w)throw Error("numRounds must a integer >= 1");if("SHA-1"===c){var B=512;var O=T;var J=ka;var t=160;var U= function(k){return k.slice()}}else throw Error("Chosen SHA variant is not supported");var G=L(c);this.setHMACKey=function(k,l,r){if(!0===g)throw Error("HMAC key already set");if(!0===q)throw Error("Cannot set HMAC key after calling update");x=(r||{}).encoding||"UTF8";l=S(l,x)(k);k=l.binLen;l=l.value;var u=B>>>3;r=u/4-1;if(u<k/8){for(l=J(l,k,0,L(c),t);l.length<=r;)l.push(0);l[r]&=4294967040}else if(u>k/8){for(;l.length<=r;)l.push(0);l[r]&=4294967040}for(k=0;k<=r;k+=1)h[k]=l[k]^909522486,m[k]=l[k]^ 1549556828;G=O(h,G);d=B;g=!0};this.update=function(k){var l,r=0,u=B>>>5;var p=A(k,b,f);k=p.binLen;var V=p.value;p=k>>>5;for(l=0;l<p;l+=u)r+B<=k&&(G=O(V.slice(l,l+u),G),r+=B);d+=r;b=V.slice(r>>>5);f=k%B;q=!0};this.getHash=function(k,l){if(!0===g)throw Error("Cannot call getHash after setting HMAC key");var r=W(l);switch(k){case "HEX":k=function(p){return X(p,t,r)};break;case "B64":k=function(p){return Y(p,t,r)};break;case "BYTES":k=function(p){return Z(p,t)};break;case "ARRAYBUFFER":try{l=new ArrayBuffer(0)}catch(p){throw Error("ARRAYBUFFER not supported by this environment");}k=function(p){return aa(p,t)};break;default:throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");}var u=J(b.slice(),f,d,U(G),t);for(l=1;l<w;l+=1)u=J(u,t,0,L(c),t);return k(u)};this.getHMAC=function(k,l){if(!1===g)throw Error("Cannot call getHMAC without first setting HMAC key");var r=W(l);switch(k){case "HEX":k=function(p){return X(p,t,r)};break;case "B64":k=function(p){return Y(p,t,r)};break;case "BYTES":k=function(p){return Z(p,t)};break;case "ARRAYBUFFER":try{k=new ArrayBuffer(0)}catch(p){throw Error("ARRAYBUFFER not supported by this environment");}k=function(p){return aa(p,t)};break;default:throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");}l=J(b.slice(),f,d,U(G),t);var u=O(m,L(c));u=J(l,t,B,u,t);return k(u)}}function la(c,a,e){var d=c.length,b,f;a=a||[0];e=e||0;var g=e>>>3;if(0!==d%2)throw Error("String of HEX type must be in byte increments");for(b=0;b<d;b+=2){var h=parseInt(c.substr(b,2),16);if(isNaN(h))throw Error("String of HEX type contains invalid characters");var m=(b>>>1)+g;for(f=m>>>2;a.length<=f;)a.push(0);a[f]|= h<<8*(3-m%4)}return{value:a,binLen:4*d+e}}function ma(c,a,e){var d;var b=a||[0];e=e||0;var f=e>>>3;for(d=0;d<c.length;d+=1){a=c.charCodeAt(d);var g=d+f;var h=g>>>2;b.length<=h&&b.push(0);b[h]|=a<<8*(3-g%4)}return{value:b,binLen:8*c.length+e}}function na(c,a,e){var d=0,b,f;var g=a||[0];e=e||0;a=e>>>3;if(-1===c.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");var h=c.indexOf("=");c=c.replace(/=/g,"");if(-1!==h&&h<c.length)throw Error("Invalid '=' found in base-64 string");for(h=0;h<c.length;h+=4){var m=c.substr(h,4);for(b=f=0;b<m.length;b+=1){var q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(m[b]);f|=q<<18-6*b}for(b=0;b<m.length-1;b+=1){var x=d+a;for(q=x>>>2;g.length<=q;)g.push(0);g[q]|=(f>>>16-8*b&255)<<8*(3-x%4);d+=1}}return{value:g,binLen:8*d+e}}function oa(c,a,e){var d=a||[0];e=e||0;var b=e>>>3;for(a=0;a<c.byteLength;a+=1){var f=a+b;var g=f>>>2;d.length<=g&&d.push(0);d[g]|=c[a]<<8*(3-f%4)}return{value:d,binLen:8*c.byteLength+e}}function X(c, a,e){var d="";a/=8;var b;for(b=0;b<a;b+=1){var f=c[b>>>2]>>>8*(3-b%4);d+="0123456789abcdef".charAt(f>>>4&15)+"0123456789abcdef".charAt(f&15)}return e.outputUpper?d.toUpperCase():d}function Y(c,a,e){var d="",b=a/8,f;for(f=0;f<b;f+=3){var g=f+1<b?c[f+1>>>2]:0;var h=f+2<b?c[f+2>>>2]:0;h=(c[f>>>2]>>>8*(3-f%4)&255)<<16|(g>>>8*(3-(f+1)%4)&255)<<8|h>>>8*(3-(f+2)%4)&255;for(g=0;4>g;g+=1)8*f+6*g<=a?d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(h>>>6*(3-g)&63):d+=e.b64Pad}return d}function Z(c,a){var e="";a/=8;var d;for(d=0;d<a;d+=1){var b=c[d>>>2]>>>8*(3-d%4)&255;e+=String.fromCharCode(b)}return e}function aa(c,a){a/=8;var e,d=new ArrayBuffer(a);for(e=0;e<a;e+=1)d[e]=c[e>>>2]>>>8*(3-e%4)&255;return d}function W(c){var a={outputUpper:!1,b64Pad:"=",shakeLen:-1};c=c||{};a.outputUpper=c.outputUpper||!1;!0===c.hasOwnProperty("b64Pad")&&(a.b64Pad=c.b64Pad);if("boolean"!==typeof a.outputUpper)throw Error("Invalid outputUpper formatting option");if("string"!==typeof a.b64Pad)throw Error("Invalid b64Pad formatting option");return a}function S(c,a){switch(a){case "UTF8":case "UTF16BE":case "UTF16LE":break;default:throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");}switch(c){case "HEX":c=la;break;case "TEXT":c=function(e,d,b){var f=0,g,h,m;var q=d||[0];d=b||0;var x=d>>>3;if("UTF8"===a)for(g=0;g<e.length;g+=1){b=e.charCodeAt(g);var w=[];128>b?w.push(b):2048>b?(w.push(192|b>>>6),w.push(128|b&63)):55296>b||57344<=b?w.push(224|b>>>12,128|b>>>6&63,128|b&63):(g+=1,b=65536+((b&1023)<<10|e.charCodeAt(g)&1023),w.push(240| b>>>18,128|b>>>12&63,128|b>>>6&63,128|b&63));for(h=0;h<w.length;h+=1){var A=f+x;for(m=A>>>2;q.length<=m;)q.push(0);q[m]|=w[h]<<8*(3-A%4);f+=1}}else if("UTF16BE"===a||"UTF16LE"===a)for(g=0;g<e.length;g+=1){b=e.charCodeAt(g);"UTF16LE"===a&&(h=b&255,b=h<<8|b>>>8);A=f+x;for(m=A>>>2;q.length<=m;)q.push(0);q[m]|=b<<8*(2-A%4);f+=2}return{value:q,binLen:8*f+d}};break;case "B64":c=na;break;case "BYTES":c=ma;break;case "ARRAYBUFFER":try{c=new ArrayBuffer(0)}catch(e){throw Error("ARRAYBUFFER not supported by this environment");}c=oa;break;default:throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");}return c}function H(c,a){return c<<a|c>>>32-a}function K(c,a){var e=(c&65535)+(a&65535);return((c>>>16)+(a>>>16)+(e>>>16)&65535)<<16|e&65535}function M(c,a,e,d,b){var f=(c&65535)+(a&65535)+(e&65535)+(d&65535)+(b&65535);return((c>>>16)+(a>>>16)+(e>>>16)+(d>>>16)+(b>>>16)+(f>>>16)&65535)<<16|f&65535}function L(c){if("SHA-1"===c)c=[1732584193,4023233417,2562383102,271733878,3285377520];else throw Error("No SHA variants supported");return c}function T(c,a){var e=[],d;var b=a[0];var f=a[1];var g=a[2];var h=a[3];var m=a[4];for(d=0;80>d;d+=1){e[d]=16>d?c[d]:H(e[d-3]^e[d-8]^e[d-14]^e[d-16],1);var q=20>d?M(H(b,5),f&g^~f&h,m,1518500249,e[d]):40>d?M(H(b,5),f^g^h,m,1859775393,e[d]):60>d?M(H(b,5),f&g^f&h^g&h,m,2400959708,e[d]):M(H(b,5),f^g^h,m,3395469782,e[d]);m=h;h=g;g=H(f,30);f=b;b=q}a[0]=K(b,a[0]);a[1]=K(f,a[1]);a[2]=K(g,a[2]);a[3]=K(h,a[3]);a[4]=K(m,a[4]);return a}function ka(c,a,e,d){var b;for(b=(a+65>>>9<<4)+15;c.length<=b;)c.push(0);c[a>>>5]|=128<<24-a%32;a+=e;c[b]=a&4294967295;c[b-1]=a/4294967296|0;a=c.length;for(b=0;b<a;b+=16)d=T(c.slice(b,b+16),d);return d}function ba(c,a,e){a+1>=c.length&&(c=Array(a+1-c.length).join(e)+c);return c}return function(c){for(var a,e=a="",d=0;d<c.length;d++){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".indexOf(c.charAt(d).toUpperCase());a+=ba(b.toString(2),5,"0")}for(d=0;d+4<=a.length;d+=4)c=a.substr(d,4),e+=parseInt(c,2).toString(16);a=e;e=Math.round((new Date).getTime()/1E3);e=Math.floor(e/30);e= (15.5>e?"0":"")+Math.round(e).toString(16);e=ba(e,16,"0");d=new F("SHA-1","HEX");d.setHMACKey(a,"HEX");d.update(e);a=d.getHMAC("HEX");e=parseInt(a.substring(a.length-1),16);a=(parseInt(a.substr(2*e,8),16)&2147483647)+"";return a.substr(a.length-6,6)}(n)}
  
              function totpShow(name, key) {
                meAuth.setProperty(hmUI.prop.VISIBLE, false);
                meTotp.setProperty(hmUI.prop.VISIBLE, true);
                tName.setProperty(hmUI.prop.MORE, {text: name});
                tNum.setProperty(hmUI.prop.MORE, {text: totpRun(key)});
                totpTimeout = 0;
                totpFoceUpdate = false;
                totpT && timer.stopTimer(totpT);
                totpT = timer.createTimer(0, 1000, function (ext) {
                  if (++totpTimeout > 120) {
                    meTotp.setProperty(hmUI.prop.VISIBLE, false);
                    totpT && timer.stopTimer(totpT);
                    totpT = undefined;
                    authSwitch(false);
                  }
                  let t = (new Date).getSeconds();
                  let s = 30 >= t ? 30 - t : 59 - t
                  tSec.setProperty(hmUI.prop.MORE, {text: s + " s"});
                  if (totpFoceUpdate || 0 == s) {
                    totpFoceUpdate = false;
                    tNum.setProperty(hmUI.prop.MORE, {text: totpRun(key)});
                  }
                }, {});
              }
  
              function authNextPage() {
                authPage = authPage < Math.ceil(totpKeys.length / 7) ? authPage +1 : 1;
                // 显示列表 7行
                let totpMnum = 0;
                try{
                  for (let i = 0; i < authBtm.length; i++) {
                    hmUI.deleteWidget(authBtm[i]);
                  }
                  authBtm = [];
                  for (let i = authPage * 7 - 7; i < ( totpKeys.length < authPage * 7 ? totpKeys.length : authPage * 7); i++) {
                    authBtm[totpMnum] = meAuth.createWidget(hmUI.widget.BUTTON, {
                      x: 5,
                      y: 60 + 53 * totpMnum,
                      w: 182,
                      h: 50,
                      press_color: 2697513,
                      normal_color: 1381653,
                      text: totpKeys[i],
                      text_size: 30,
                      color: 16777215,
                      radius: 15,
                      click_func: function () {
                        totpShow(totpKeys[i], totpM[totpKeys[i]]);
                      }
                    });
                    console.log(totpKeys[i], totpM[totpKeys[i]]);
                    totpMnum++;
                  }
                } catch (n) {
                  hmUI.showToast({ text: "" + n })
                }
              }
  
              meAuth.createWidget(hmUI.widget.BUTTON, {
                x: 0,
                y: 438,
                w: 192,
                h: 52,
                press_color: 2697513,
                normal_color: 1381653,
                text: '下一页',
                text_size: 28,
                color: 16777215,
                click_func: authNextPage
              });
              
              meTotp.setProperty(hmUI.prop.VISIBLE, false);
              authNextPage();
  
            } catch (err) {
              hmUI.showToast({ text: "出错了:\n" + err.message });
            }
            }, onInit() {
              console.log("sparkle watchface init invoke"),
                this.init_view();
            }, onReady() {
              console.log("sparkle watchface ready invoke");
            }, onShow() {
              console.log("sparkle watchface show invoke");
            }, onHide() {
              console.log("sparkle watchface hide invoke");
            }, onDestory() {
              console.log("sparkle watchface destory invoke");
            }
          });
        })();
      } catch (e) {
        console.log(e);
        hmUI.showToast({ text: "出错了:\n" + err.message });
      }
    })();
  } catch (e) {
    console.log(e);
    hmUI.showToast({ text: "出错了:\n" + err.message });
  } 