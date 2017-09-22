/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

fbq.version="2.7.22";
fbq.pendingConfigs=["global_config"];
(function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){var g=a.fbq;g.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var o=a.postMessage||function(){};if(!g){o({action:'FB_LOG',logType:'Facebook Pixel Error',logMessage:'Pixel code is not installed correctly on this page'},'*');if('error' in console)console.error('Facebook Pixel Error: Pixel code is not installed correctly on this page');return false}return true}())return;'use strict';if(!g.__fbeventsModules){g.__fbeventsModules={};g.__fbeventsResolvedModules={};g.getFbeventsModules=function(o){if(!g.__fbeventsResolvedModules[o])g.__fbeventsResolvedModules[o]=g.__fbeventsModules[o]();return g.__fbeventsResolvedModules[o]};g.fbIsModuleLoaded=function(o){return !!g.__fbeventsModules[o]};g.ensureModuleRegistered=function(o,p){if(!g.fbIsModuleLoaded(o))g.__fbeventsModules[o]=p;}}g.ensureModuleRegistered('SignalsFBEventsPlugin',function(){return function(o,p,q,r){var s={exports:{}},t=s.exports;(function(){'use strict';function u(v){this.plugin=v;this.__fbEventsPlugin=1;return this}s.exports=u})();return s.exports}(a,b,c,d)});g.ensureModuleRegistered('undefined',function(){return undefined});'use strict';var h=g.getFbeventsModules('SignalsFBEventsPlugin'),i={AUTO_CONFIG_OPT_OUT:1<<0,AUTO_CONFIG:1<<1,CONFIG_LOADING:1<<2,SUPPORTS_DEFINE_PROPERTY:1<<3,SUPPORTS_SEND_BEACON:1<<4,HAS_INVALIDATED_PII:1<<5},j=false;function k(){try{Object.defineProperty({},'test',{})}catch(o){return false}return true}function l(){return !!(a.navigator&&a.navigator.sendBeacon)}function m(o,p){return o?p:0}var n=new h(function(o,p){if(j)return;var q={};o.on('pii_invalidated',function(r){if(r!=null)q[typeof r==='string'?r:r.id]=true;});o.on('getCustomParameters',function(r){if(r!=null){var s=p.optIns,t=m(s.isOptedOut(r.id,'AutomaticSetup'),i.AUTO_CONFIG_OPT_OUT),u=m(s.isOptedIn(r.id,'AutomaticSetup'),i.AUTO_CONFIG),v=m(o.disableConfigLoading!==true,i.CONFIG_LOADING),w=m(k(),i.SUPPORTS_DEFINE_PROPERTY),x=m(l(),i.SUPPORTS_SEND_BEACON),y=m(r!=null&&q[r.id],i.HAS_INVALIDATED_PII),z=t|u|v|w|x|y;return {o:z}}return {}});j=true});n.OPTIONS=i;e.exports=n;if(g.registerPlugin)g.registerPlugin('fbevents.plugins.opttracking',e.exports);g.ensureModuleRegistered('fbevents.plugins.opttracking',function(){return e.exports})})();return e.exports})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){var g=a.fbq;g.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var pb=a.postMessage||function(){};if(!g){pb({action:'FB_LOG',logType:'Facebook Pixel Error',logMessage:'Pixel code is not installed correctly on this page'},'*');if('error' in console)console.error('Facebook Pixel Error: Pixel code is not installed correctly on this page');return false}return true}())return;'use strict';var h=function(){function pb(qb,rb){var sb=[],tb=true,ub=false,vb=undefined;try{for(var wb=qb[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),xb;!(tb=(xb=wb.next()).done);tb=true){sb.push(xb.value);if(rb&&sb.length===rb)break;}}catch(yb){ub=true;vb=yb}finally{try{if(!tb&&wb["return"])wb["return"]();}finally{if(ub)throw vb;}}return sb}return function(qb,rb){if(Array.isArray(qb)){return qb}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator') in Object(qb)){return pb(qb,rb)}else throw new TypeError("Invalid attempt to destructure non-iterable instance");}}(),i=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(pb){return typeof pb}:function(pb){return pb&&typeof Symbol==="function"&&pb.constructor===Symbol&&pb!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof pb};function j(pb){if(Array.isArray(pb)){for(var qb=0,rb=Array(pb.length);qb<pb.length;qb++)rb[qb]=pb[qb];return rb}else return Array.from(pb);}if(!g.__fbeventsModules){g.__fbeventsModules={};g.__fbeventsResolvedModules={};g.getFbeventsModules=function(pb){if(!g.__fbeventsResolvedModules[pb])g.__fbeventsResolvedModules[pb]=g.__fbeventsModules[pb]();return g.__fbeventsResolvedModules[pb]};g.fbIsModuleLoaded=function(pb){return !!g.__fbeventsModules[pb]};g.ensureModuleRegistered=function(pb,qb){if(!g.fbIsModuleLoaded(pb))g.__fbeventsModules[pb]=qb;}}g.ensureModuleRegistered('SignalsParamList',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb='deep',wb='shallow';function xb(ac){if(typeof JSON==='undefined'||JSON===null||!JSON.stringify){return Object.prototype.toString.call(ac)}else return JSON.stringify(ac);}function yb(ac){if(ac===null||ac===undefined)return true;var bc=typeof ac==='undefined'?'undefined':i(ac);return bc==='number'||bc==='boolean'||bc==='string'}function zb(ac){this._params=[];this._piiTranslator=ac}zb.ERROR_PII_WITH_NO_TRANSLATOR='Provide a PII Translation function in order to append PII data to the '+'ParamList.';zb.prototype.addRange=function(ac){var bc=this;ac.each(function(cc,dc){return bc.append(cc,dc)})};zb.prototype.containsKey=function(ac){for(var bc=0;bc<this._params.length;bc++)if(this._params[bc].name===ac)return true;return false};zb.prototype.get=function(ac){var bc=ac;for(var cc=0;cc<this._params.length;cc++)if(this._params[cc].name===bc)return this._params[cc].value;return null};zb.prototype.append=function(ac,bc,cc){this._append(encodeURIComponent(ac),bc,vb,cc);return this};zb.prototype.appendHash=function(ac,bc){for(var cc in ac)if(Object.prototype.hasOwnProperty.call(ac,cc))this._append(cc,ac[cc],vb,bc);return this};zb.fromHash=function(ac,bc){return new zb(bc).appendHash(ac)};zb.prototype._append=function(ac,bc,cc,dc){if(yb(bc)){this._appendPrimitive(ac,bc,dc)}else if(cc===vb){this._appendObject(ac,bc,dc)}else this._appendPrimitive(ac,xb(bc),dc);};zb.prototype._translateValue=function(ac,bc,cc){if(typeof bc==='boolean')return bc?'true':'false';if(!cc)return ''+bc;if(!this._piiTranslator)throw new Error(zb.ERROR_PII_WITH_NO_TRANSLATOR);return this._piiTranslator(ac,''+bc)};zb.prototype._appendPrimitive=function(ac,bc,cc){if(bc!=null){var dc=this._translateValue(ac,bc,cc);if(dc!=null)this._params.push({name:ac,value:dc});}};zb.prototype._appendObject=function(ac,bc,cc){var dc=null;for(var ec in bc)if(Object.prototype.hasOwnProperty.call(bc,ec)){var fc=ac+'['+encodeURIComponent(ec)+']';try{this._append(fc,bc[ec],wb,cc)}catch(gc){if(dc==null)dc=gc;}}if(dc!=null)throw dc;};zb.prototype.each=function(ac){for(var bc=0;bc<this._params.length;bc++){var cc=this._params[bc],dc=cc.name,ec=cc.value;ac(dc,ec)}};zb.prototype.toQueryString=function(){var ac=[];this.each(function(bc,cc){ac.push(bc+'='+encodeURIComponent(cc))});return ac.join('&')};zb.prototype.toFormData=function(){var ac=new FormData();this.each(function(bc,cc){ac.append(bc,cc)});return ac};tb.exports=zb})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsUtils',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb='console',wb='error',xb='Facebook Pixel Error',yb='Facebook Pixel Warning',zb='warn',ac=g.getFbeventsModules('SignalsParamList'),bc=Object.prototype.toString,cc=!('addEventListener' in qb),dc=function dd(){},ec=pb[vb]||{},fc=pb.postMessage||dc;function gc(dd){return Array.isArray?Array.isArray(dd):bc.call(dd)==='[object Array]'}function hc(dd){return typeof dd==='number'||typeof dd==='string'&&/^\d+$/.test(dd)}var ic={};function jc(dd){if(Object.prototype.hasOwnProperty.call(ic,dd.message)===false){ic[dd.message]=true;kc(dd)}}function kc(dd){try{fc({action:'FB_LOG',logType:xb,logMessage:dd.toString()},'*')}catch(gd){}try{var ed=Math.random();if(ed<.01){var fd=new ac(null);fd.append('p','pixel');fd.append('v',pb.fbq&&pb.fbq.version?pb.fbq.version:'unknown');fd.append('e',dd.toString());if(dd instanceof Error){fd.append('f',dd.fileName);fd.append('s',dd.stackTrace||dd.stack)}ad(fd,'https://connect.facebook.net/log/error')}}catch(gd){}if(wb in ec)ec[wb](xb+': '+dd.toString());}function lc(dd){fc({action:'FB_LOG',logType:yb,logMessage:dd},'*');if(zb in ec)ec[zb](yb+': '+dd);}function mc(dd,ed,fd){ed=cc?'on'+ed:ed;var gd=cc?dd.attachEvent:dd.addEventListener,hd=cc?dd.detachEvent:dd.removeEventListener,id=function jd(){if(hd)hd.call(dd,ed,jd,false);fd()};if(gd)gd.call(dd,ed,id,false);}function nc(dd,ed,fd){var gd=dd[ed],hd=yc(fd);dd[ed]=function(){var id=gd.apply(this,arguments);hd.apply(this,arguments);return id}}var oc=Object.prototype.hasOwnProperty,pc=!{toString:null}.propertyIsEnumerable('toString'),qc=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],rc=qc.length;function sc(dd){if(Object.keys)return Object.keys(dd);if((typeof dd==='undefined'?'undefined':i(dd))!=='object'&&(typeof dd!=='function'||dd===null))throw new TypeError('Object.keys called on non-object');var ed=[];for(var fd in dd)if(oc.call(dd,fd))ed.push(fd);if(pc)for(var gd=0;gd<rc;gd++)if(oc.call(dd,qc[gd]))ed.push(qc[gd]);return ed}function tc(dd,ed){if(Array.prototype.map)return Array.prototype.map.call(dd,ed);var fd=void 0,gd=void 0;if(dd==null)throw new TypeError(' array is null or not defined');var hd=Object(dd),id=hd.length>>>0;if(typeof ed!=='function')throw new TypeError(ed+' is not a function');fd=new Array(id);gd=0;while(gd<id){var jd,kd;if(gd in hd){jd=hd[gd];kd=ed.call(null,jd,gd,hd);fd[gd]=kd}gd++}return fd}function uc(dd){if(this==null)throw new TypeError('Array.prototype.some called on null or undefined');if(typeof dd!=='function')throw new TypeError();var ed=Object(this),fd=ed.length>>>0,gd=arguments.length>=2?arguments[1]:void 0;for(var hd=0;hd<fd;hd++)if(hd in ed&&dd.call(gd,ed[hd],hd,ed))return true;return false}function vc(dd){return sc(dd).length===0}function wc(dd){if(this===void 0||this===null)throw new TypeError();var ed=Object(this),fd=ed.length>>>0;if(typeof dd!=='function')throw new TypeError();var gd=[],hd=arguments.length>=2?arguments[1]:void 0;for(var id=0;id<fd;id++)if(id in ed){var jd=ed[id];if(dd.call(hd,jd,id,ed))gd.push(jd);}return gd}function xc(dd){this.items=dd==null?[]:dd}xc.prototype.has=function(dd){return uc.call(this.items,function(ed){return ed===dd})};xc.prototype.add=function(dd){this.items.push(dd)};function yc(dd){if(typeof dd!=='function')return dd;return function(){try{return dd.apply(this,arguments)}catch(ed){cd.logError(ed)}return undefined}}function zc(dd,ed){var fd=dd.toQueryString(),gd=ed+'?'+fd;if(gd.length<2048){var hd=new Image();hd.src=gd;return true}return false}function ad(dd,ed){var fd='fb'+Math.random().toString().replace('.',''),gd=qb.createElement('form');gd.method='post';gd.action=ed;gd.target=fd;gd.acceptCharset='utf-8';gd.style.display='none';var hd=!!(pb.attachEvent&&!pb.addEventListener),id=hd?'<iframe name="'+fd+'">':'iframe',jd=qb.createElement(id);jd.src='javascript:false';jd.id=fd;jd.name=fd;gd.appendChild(jd);mc(jd,'load',function(){dd.each(function(kd,ld){var md=qb.createElement('input');md.name=kd;md.value=ld;gd.appendChild(md)});mc(jd,'load',function(){if(gd.parentNode)gd.parentNode.removeChild(gd);});gd.submit()});qb.body.appendChild(gd);return true}function bd(dd,ed){if(pb.navigator&&pb.navigator.sendBeacon){pb.navigator.sendBeacon(ed,dd.toFormData());return true}return false}var cd={injectMethod:nc,isArray:gc,isEmptyObject:vc,isNumber:hc,keys:sc,listenOnce:mc,logError:kc,logErrorOnce:jc,logWarning:lc,makeSafe:yc,map:tc,sendGET:zc,sendPOST:ad,sendBeacon:bd,FBSet:xc,each:function dd(ed,fd){tc.call(this,ed,fd)},some:function dd(ed,fd){return uc.call(ed,fd)},filter:function dd(ed,fd){return wc.call(ed,fd)}};tb.exports=cd})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsEvents',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=g.getFbeventsModules('SignalsFBEventsUtils'),wb=vb.logError,xb=vb.keys,yb=0;function zb(){this._listeners={}}zb.prototype.on=function(fc,gc){var hc=this,ic=yb++;if(!this._listeners[fc])this._listeners[fc]={};this._listeners[fc][ic.toString()]=gc;return function(){hc._unsubscribe(fc,ic.toString())}};zb.prototype.once=function(fc,gc){var hc=this,ic=arguments,jc=this.on(fc,function(){jc();return gc.apply(hc,ic)});return jc};zb.prototype.trigger=function(fc){var gc=this;for(var hc=arguments.length,ic=Array(hc>1?hc-1:0),jc=1;jc<hc;jc++)ic[jc-1]=arguments[jc];if(!this._listeners[fc])return [];return xb(this._listeners[fc]).map(function(kc){try{if(!gc._listeners[fc][kc])return [];return gc._listeners[fc][kc].apply(null,ic)}catch(lc){wb(lc)}return null})};zb.prototype._unsubscribe=function(fc,gc){var hc=this._listeners[fc];if(hc&&hc[gc]){delete hc[gc];if(xb(hc).length===0)delete this._listeners[fc];}};function ac(){return new zb()}var bc=new zb(),cc=bc.on.bind(bc),dc=bc.once.bind(bc),ec=bc.trigger.bind(bc);tb.exports={on:cc,once:dc,trigger:ec,instance:bc,spawn:ac,PixelEvents:zb}})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsQE',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=function yb(){return Math.random()};function wb(yb){var zb=vb();for(var ac=0;ac<yb.length;ac++){var bc=yb[ac],cc=bc.passRate,dc=h(bc.range,2),ec=dc[0],fc=dc[1];if(cc<0||cc>1)throw new Error('passRate should be between 0 and 1 in '+bc.name);if(zb>=ec&&zb<fc){var gc=vb()<cc;return {name:bc.name,isInExperimentGroup:gc,code:bc.code+(gc?'1':'0')}}}return null}function xb(yb){this._groups=yb;this._result=null;this._hasRolled=false}xb.prototype={get:function yb(zb){if(!this._hasRolled){var ac=wb(this._groups);if(ac!=null)this._result=ac;this._hasRolled=true}if(!zb)return this._result;if(this._result!=null&&this._result.name===zb)return this._result;return null}};tb.exports=xb})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsExperiments',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=g.getFbeventsModules('SignalsFBEventsQE');function wb(){vb.call(this,[{name:'beacon',range:[0,.02],code:'b',passRate:.5}])}wb.prototype=vb.prototype;wb.instance=new wb();tb.exports=wb})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsPixelEndpoint',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=g.getFbeventsModules('SignalsEvents'),wb=g.getFbeventsModules('SignalsFBEventsExperiments'),xb=g.getFbeventsModules('SignalsFBEventsUtils'),yb=xb.sendGET,zb=xb.sendPOST,ac=xb.sendBeacon,bc=g.getFbeventsModules('SignalsParamList'),cc=vb.trigger,dc={ENDPOINT:'https://www.facebook.com/tr/'},ec=rb.href,fc=pb.top!==pb,gc=qb.referrer;function hc(kc,lc,mc,nc){kc.append('id',lc);kc.append('ev',mc);kc.append('dl',ec);kc.append('rl',gc);kc.append('if',fc);kc.append('ts',new Date().valueOf());kc.append('cd',nc);return kc}function ic(kc,lc,mc,nc,oc){var pc=new bc(oc);hc(pc,kc,lc,mc);if(nc)pc.addRange(nc);if(ac(pc,dc.ENDPOINT)){cc('fired','BEACON',pc);return}if(yb(pc,dc.ENDPOINT)){cc('fired','GET',pc);return}if(zb(pc,dc.ENDPOINT)){cc('fired','POST',pc);return}throw new Error('No working send method found for this fire.')}function jc(kc,lc,mc,nc,oc){if(pb.navigator&&pb.navigator.sendBeacon){var pc=new bc(oc);hc(pc,kc,lc,mc);if(nc)pc.addRange(nc);ac(pc,dc.ENDPOINT)}}tb.exports={CONFIG:dc,sendEvent:ic,sendBeaconPII:jc}})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsEventValidation',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=/^[+-]?\d+(\.\d+)?$/,wb='number',xb='currency_code',yb={AED:1,ARS:1,AUD:1,BOB:1,BRL:1,CAD:1,CHF:1,CLP:1,CNY:1,COP:1,CRC:1,CZK:1,DKK:1,EUR:1,GBP:1,GTQ:1,HKD:1,HNL:1,HUF:1,IDR:1,ILS:1,INR:1,ISK:1,JPY:1,KRW:1,MOP:1,MXN:1,MYR:1,NIO:1,NOK:1,NZD:1,PEN:1,PHP:1,PLN:1,PYG:1,QAR:1,RON:1,RUB:1,SAR:1,SEK:1,SGD:1,THB:1,TRY:1,TWD:1,USD:1,UYU:1,VEF:1,VND:1,ZAR:1},zb={value:{type:wb,isRequired:true},currency:{type:xb,isRequired:true}},ac={PageView:{},ViewContent:{},Search:{},AddToCart:{},AddToWishlist:{},InitiateCheckout:{},PixelInitialized:{},AddPaymentInfo:{},Purchase:{validationSchema:zb},Lead:{},CompleteRegistration:{},CustomEvent:{validationSchema:{event:{isRequired:true}}}},bc={agent:true},cc=Object.prototype.hasOwnProperty;function dc(gc,hc,ic){this.error=null;this.warnings=[];this.eventName=gc;this.params=hc||{};this.metadata=ic}dc.prototype.validateMetadata=function(){if(this.metadata){var gc=this.metadata.toLowerCase(),hc=bc[gc];if(!hc)return this._error('Unsupported metadata argument: '+gc);}return this};dc.prototype.validateEvent=function(){var gc=this.eventName;if(!gc)return this;var hc=ac[gc];if(!hc){this.warnings.push('You are sending a non-standard event \''+gc+'\'. The '+'preferred way to send events is using trackCustom. See '+'https://www.facebookmarketingdevelopers.com/pixels/up#sec-custom '+'for more information');return this}var ic=hc.validationSchema;for(var jc in ic)if(cc.call(ic,jc)){var kc=ic[jc];if(kc){if(kc.isRequired&&!cc.call(this.params,jc))return this._error('Required parameter "'+jc+'" is missing for event "'+gc+'"');if(kc.type&&typeof kc.type==='string')if(!this._validateParam(jc,kc.type))return this._error('Parameter "'+jc+'" is invalid for event "'+gc+'"');}}return this};dc.prototype._validateParam=function(gc,hc){var ic=this.params[gc];switch(hc){case wb:var jc=(typeof ic==='string'||typeof ic==='number')&&vb.test(''+ic);if(jc&&Number(ic)<0)this.warnings.push('Parameter "'+gc+'" is negative for event "'+(this.eventName?this.eventName:'null')+'"');return jc;case xb:return typeof ic==='string'&&!!yb[ic.toUpperCase()];}return true};dc.prototype._error=function(gc){this.error=gc;return this};function ec(gc){return new dc(null,null,gc).validateMetadata()}function fc(gc,hc){return new dc(gc,hc).validateEvent()}tb.exports={validateMetadata:ec,validateEvent:fc,Validator:dc}})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsOptIn',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=g.getFbeventsModules('SignalsFBEventsUtils'),wb=vb.each,xb=vb.filter,yb=vb.keys,zb=vb.some;function ac(cc){wb(yb(cc),function(dc){if(zb(cc[dc],function(ec){return Object.prototype.hasOwnProperty.call(cc,ec)}))throw new Error('Circular subOpts are not allowed. '+dc+' depends on another subOpt');})}function bc(cc){this._opts={};this._subOpts=cc||{};ac(this._subOpts)}bc.prototype._getOpts=function(cc){return [].concat(j(Object.prototype.hasOwnProperty.call(this._subOpts,cc)?this._subOpts[cc]:[]),[cc])};bc.prototype._setOpt=function(cc,dc,ec){if(!this._opts[dc])this._opts[dc]={};this._opts[dc][cc]=ec};bc.prototype.optIn=function(cc,dc){var ec=this,fc=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;wb(this._getOpts(dc),function(gc){var hc=fc==true&&ec.isOptedOut(cc,dc);if(!hc)ec._setOpt(cc,gc,true);});return this};bc.prototype.optOut=function(cc,dc){var ec=this;wb(this._getOpts(dc),function(fc){return ec._setOpt(cc,fc,false)});return this};bc.prototype.isOptedIn=function(cc,dc){return this._opts[dc]&&this._opts[dc][cc]===true};bc.prototype.isOptedOut=function(cc,dc){return this._opts[dc]&&this._opts[dc][cc]===false};bc.prototype.listPixelIds=function(cc){var dc=this;return this._opts[cc]?xb(yb(this._opts[cc]),function(ec){return dc._opts[cc][ec]}):[]};tb.exports=bc})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsPluginPath',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=/([/]en_US)?[/](fbevents|signals)([.]js|[/])/;function wb(){var zb=null,ac=null,bc=qb.getElementsByTagName('script');for(var cc=0;cc<bc.length&&!zb;cc++){var dc=bc[cc].src.split(vb);if(dc.length>1){zb=dc[0];ac=bc[cc]}}return {baseURL:zb,scriptElement:ac}}var xb=null;function yb(){if(!xb)xb=wb();return xb}tb.exports={get:yb}})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsFireLock',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=g.getFbeventsModules('SignalsFBEventsUtils'),wb=vb.each,xb=vb.keys;function yb(){this._locks={};this._callbacks=[]}yb.prototype={lock:function zb(ac){this._locks[ac]=true},release:function zb(ac){if(Object.prototype.hasOwnProperty.call(this._locks,ac)){delete this._locks[ac];if(xb(this._locks).length===0)wb(this._callbacks,function(bc){return bc(ac)});}},onUnlocked:function zb(ac){this._callbacks.push(ac)},isLocked:function zb(){return xb(this._locks).length>0}};yb.global=new yb();yb.global.lockPlugin=function(zb){this.lock('plugin:'+zb)};yb.global.releasePlugin=function(zb){this.release('plugin:'+zb)};yb.global.lockConfig=function(zb){this.lock('config:'+zb)};yb.global.releaseConfig=function(zb){this.release('config:'+zb)};tb.exports=yb})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsConstants',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';tb.exports={ERRORS:{PREFIX:function vb(wb,xb){if(wb!=null){return '[ID:'+(typeof wb==='string'?wb:wb.id)+'] '+xb}else return xb;},PII_INVALID:function vb(wb,xb){return 'An invalid '+wb+' was specified for \''+xb+'\'. This data will not be sent with any events for this Pixel.'}}}})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('SignalsFBEventsFBQ',function(){return function(pb,qb,rb,sb){var tb={exports:{}},ub=tb.exports;(function(){'use strict';var vb=g.getFbeventsModules('SignalsFBEventsOptIn'),wb=g.getFbeventsModules('SignalsParamList'),xb=g.getFbeventsModules('SignalsPixelEndpoint'),yb=g.getFbeventsModules('SignalsFBEventsPluginPath'),zb=g.getFbeventsModules('SignalsFBEventsUtils'),ac=g.getFbeventsModules('SignalsEventValidation'),bc=g.getFbeventsModules('SignalsFBEventsFireLock'),cc=g.getFbeventsModules('SignalsFBEventsConstants'),dc=cc.ERRORS,ec=zb.each,fc=zb.keys,gc=zb.logError,hc=zb.logErrorOnce,ic=zb.map,jc=zb.some,kc={Dwell:true,InferredEvents:true,Microdata:true,FPCookie:true,Sessions:true,TimeSpent:true,Interaction:true},lc=['InferredEvents','Microdata'],mc={AutomaticSetup:lc},nc={Dwell:['dwell'],FPCookie:['fpcookie'],InferredEvents:['inferredevents','identity'],Microdata:['microdata','identity'],Sessions:['sessions'],TimeSpent:['timespent'],Interaction:['interaction','timespent']};function oc(sc){return !!(kc[sc]||mc[sc])}function pc(sc,tc){var uc=yb.get();if(typeof uc.baseURL!='string'||!(uc.scriptElement&&uc.scriptElement.parentNode))throw new Error('fbevents script element not found.');var vc=uc.baseURL+'/signals/config/'+sc+'?v='+tc,wc=qb.createElement('script');wc.src=vc;wc.async=true;if(uc.scriptElement&&uc.scriptElement.parentNode)uc.scriptElement.parentNode.insertBefore(wc,uc.scriptElement);}var qc={VALID_FEATURES:kc,optIn:function sc(tc,uc){var vc=this,wc=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(typeof uc!=='string'||!oc(uc))throw new Error('Invalid Argument: "'+uc+'" is not a valid opt-in feature');if(oc(uc)){this.optIns.optIn(tc,uc,wc);ec([uc].concat(j(mc[uc]||[])),function(xc){if(nc[xc])ec(nc[xc],function(yc){return vc.fbq.loadPlugin(yc)});})}return this},optOut:function sc(tc,uc){this.optIns.optOut(tc,uc);return this},trackSingleCustom:function sc(tc,uc,vc){var wc=typeof tc==='string'?tc:tc.id,xc=this.getDefaultSendData(wc,uc);xc.customData=vc;this.fire(xc,false);return this},enqueue:function sc(){for(var tc=arguments.length,uc=Array(tc),vc=0;vc<tc;vc++)uc[vc]=arguments[vc];this.queue.append(uc);return this},_validateSend:function sc(tc,uc){if(!tc.eventName||!tc.eventName.length)throw new Error('Event name not specified');if(!tc.pixelId||!tc.pixelId.length)throw new Error('PixelId not specified');if(tc.set)ec(ic(fc(tc.set),function(wc){return ac.validateMetadata(wc)}),function(wc){if(wc.error)throw new Error(wc.error);if(wc.warnings.length)ec(wc.warnings,zb.logWarning);});if(uc){var vc=ac.validateEvent(tc.eventName,tc.customData||{});if(vc.error)throw new Error(vc.error);if(vc.warnings&&vc.warnings.length)ec(vc.warnings,zb.logWarning);}return this},fire:function sc(tc){var uc=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;this._validateSend(tc,uc);if(tc.userData&&fc(tc.userData).length>0&&!this.fbq.loadPlugin('identity')){this.enqueue('fire',tc);return this}var vc=new wb(this.fbq.piiTranslator);try{vc.append('ud',tc.userData,true)}catch(xc){this.fbq.trigger('pii_invalidated',tc.pixelId,xc.message);hc(new Error(dc.PREFIX(tc.pixelId,xc.message)))}vc.append('v',this.fbq.version);tc.set&&tc.set.agent&&vc.append('a',tc.set.agent);var wc=this.fbq.trigger('getCustomParameters',{id:tc.pixelId});ec(wc,function(xc){return ec(fc(xc),function(yc){if(vc.containsKey(yc)){gc(new Error('Custom parameter '+yc+' has already been specified.'))}else vc.append(yc,xc[yc]);})});xb.sendEvent(tc.pixelId,tc.eventName,tc.customData,vc);return this},callMethod:function sc(tc){var uc=tc[0],vc=Array.prototype.slice.call(tc,1);if(typeof this[uc]==='function'){try{this[uc].apply(this,vc)}catch(wc){gc(wc)}}else gc(new Error('Invalid FBQ method '+uc));},getDefaultSendData:function sc(tc,uc){var vc=this.getPixel(tc),wc={pixelId:tc,eventName:uc};if(vc){if(vc.userData)wc.userData=vc.userData;if(vc.agent){wc.set={agent:vc.agent}}else if(this.fbq.agent)wc.set={agent:this.fbq.agent};}return wc},getOptedInPixels:function sc(tc){var uc=this;return this.optIns.listPixelIds(tc).map(function(vc){return uc.pixelsByID[vc]})},ensurePixel:function sc(tc){if(!Object.prototype.hasOwnProperty.call(this.pixelsByID,tc))throw new Error('Pixel "'+tc+'" not found');},getPixel:function sc(tc){this.ensurePixel(tc);return this.pixelsByID[tc]},loadConfig:function sc(tc){if(this.fbq.disableConfigLoading||Object.prototype.hasOwnProperty.call(this.configsLoaded,tc))return;this.locks.lockConfig(tc);if(!this.fbq.pendingConfigs||jc(this.fbq.pendingConfigs,function(uc){return uc===tc})==false)pc(tc,this.VERSION);},configLoaded:function sc(tc){this.configsLoaded[tc]=true;this.locks.releaseConfig(tc);this.fbq.trigger('configLoaded',tc)}};function rc(sc,tc){var uc=this;this.VERSION=sc.version;this.pixelsByID=tc;this.fbq=sc;this.optIns=new vb(mc);this.configsLoaded={};this.locks=bc.global;ec(sc.pendingConfigs||[],function(vc){return uc.locks.lockConfig(vc)})}rc.prototype=qc;tb.exports=rc})();return tb.exports}(a,b,c,d)});g.ensureModuleRegistered('undefined',function(){return undefined});'use strict';var g=a.fbq;g.execStart=a.performance&&typeof a.performance.now==='function'?a.performance.now():null;var k=g.getFbeventsModules('SignalsParamList'),l=g.getFbeventsModules('SignalsPixelEndpoint'),m=g.getFbeventsModules('SignalsEvents'),n=g.getFbeventsModules('SignalsFBEventsUtils'),o=g.getFbeventsModules('SignalsEventValidation'),p=g.getFbeventsModules('SignalsFBEventsFBQ'),q=g.getFbeventsModules('SignalsFBEventsPluginPath'),r=g.getFbeventsModules('SignalsFBEventsFireLock'),s=g.getFbeventsModules('SignalsFBEventsConstants'),t=s.ERRORS,u=m.on,v=m.once,w=m.trigger,x=n.each,y=n.FBSet,z=n.isArray,aa=n.isEmptyObject,ba=n.isNumber,ca=n.keys,da=n.logError,ea=n.logErrorOnce,fa=n.makeSafe,ga=r.global;function ha(pb){return g.getFbeventsModules(pb)}function ia(pb){return g.fbIsModuleLoaded(pb)}var ja={},ka=-1,la=Array.prototype.slice,ma=Object.prototype.hasOwnProperty,na=c.href,oa=false,pa=false,qa=[],ra={},sa=b.referrer,ta={PageView:new y(),PixelInitialized:new y()},ua=new p(g,ra);function va(pb){for(var qb in pb)if(ma.call(pb,qb))this[qb]=pb[qb];return this}function wa(pb){try{if(ga.isLocked()){g.queue.push(arguments);return}var qb=la.call(arguments),rb=qb.length===1&&z(qb[0]);if(rb)qb=qb[0];if(typeof qb[0]!=='string')da(new Error('The first argument to fbq must be a method name.'));if(pb.slice(0,6)==='report'){var sb=pb.slice(6);if(sb==='CustomEvent'){sb=(qb[1]||{}).event||sb;qb=['trackCustom',sb].concat(qb.slice(1))}else qb=['track',sb].concat(qb.slice(1));}pb=qb.shift();switch(pb){case 'addPixelId':oa=true;ya.apply(this,qb);break;case 'init':pa=true;ya.apply(this,qb);break;case 'set':xa.apply(this,qb);break;case 'track':if(ba(qb[0])){db.apply(this,qb);break}if(rb){cb.apply(this,qb);break}bb.apply(this,qb);break;case 'trackCustom':cb.apply(this,qb);break;case 'send':eb.apply(this,qb);break;case 'on':u.apply(null,qb);break;case 'loadPlugin':jb(qb[0]);break;default:ua.callMethod(arguments);break;}}catch(tb){da(tb)}}function xa(pb){for(var qb=arguments.length,rb=Array(qb>1?qb-1:0),sb=1;sb<qb;sb++)rb[sb-1]=arguments[sb];switch(pb){case 'endpoint':var tb=rb[0];if(typeof tb!=='string')throw new Error('endpoint value must be a string');l.CONFIG.ENDPOINT=tb;break;case 'autoConfig':{var ub=rb[0],vb=rb[1],wb=ub===true||ub==='true'?'optIn':'optOut';if(typeof vb!=='string')throw new Error('Invalid pixelID supplied to set autoConfig.');ua.callMethod([wb,vb,'AutomaticSetup']);break}default:{var xb=rb[0],yb=rb[1];if(typeof pb!=='string')throw new Error('The metadata setting provided in the \'set\' call is invalid.');if(typeof xb!=='string')throw new Error('The metadata value must be a string.');if(typeof yb!=='string')throw new Error('Invalid pixelID supplied to set call.');ab(pb,xb,yb);break}}}g._initHandlers=[];g._initsDone={};function ya(pb,qb,rb){ka=ka===-1?Date.now():ka;if(ma.call(ra,pb)){if(qb&&aa(ra[pb].userData)){ra[pb].userData=qb;jb('identity')}else n.logError(new Error('Duplicate Pixel ID: '+pb));return}var sb={agent:rb?rb.agent:null,id:pb,userData:qb||{},eventCount:0};qa.push(sb);ra[pb]=sb;if(qb!=null)jb('identity');za();ua.loadConfig(pb)}function za(){g._initHandlers.forEach(function(pb,qb){if(!g._initsDone[qb])g._initsDone[qb]={};qa.forEach(function(rb){if(!g._initsDone[qb][rb.id]){g._initsDone[qb][rb.id]=true;pb(rb)}})})}function ab(pb,qb,rb){var sb=o.validateMetadata(pb);if(sb.error)n.logError(sb.error);if(sb.warnings)for(var tb=0;tb<sb.warnings.length;tb++)n.logWarning(sb.warnings[tb]);if(ma.call(ra,rb)){for(var ub=0,vb=qa.length;ub<vb;ub++)if(qa[ub].id===rb){qa[ub][pb]=qb;break}}else n.logWarning('Trying to set argument '+qb+(' for uninitialized pixel ID '+rb));}function bb(pb,qb){qb=qb||{};var rb=o.validateEvent(pb,qb);if(rb.error)n.logError(rb.error);if(rb.warnings)for(var sb=0;sb<rb.warnings.length;sb++)n.logWarning(rb.warnings[sb]);if(pb==='CustomEvent'&&typeof qb.event==='string')pb=qb.event;cb.call(this,pb,qb)}function cb(pb,qb){for(var rb=0,sb=qa.length;rb<sb;rb++){var tb=qa[rb];if(!(pb==='PageView'&&this.allowDuplicatePageViews)&&Object.prototype.hasOwnProperty.call(ta,pb)&&ta[pb].has(tb.id))continue;gb(tb,pb,qb);if(Object.prototype.hasOwnProperty.call(ta,pb))ta[pb].add(tb.id);}}function db(pb,qb){gb(null,pb,qb)}function eb(pb,qb){for(var rb=0,sb=qa.length;rb<sb;rb++)gb(qa[rb],pb,qb);}function fb(pb){var qb=new k(g.piiTranslator);try{qb.append('ud',pb&&pb.userData||{},true)}catch(sb){w('pii_invalidated',pb,sb.message);ea(new Error(t.PREFIX(pb,sb.message)))}qb.append('v',g.version);qb.append('a',pb&&pb.agent?pb.agent:g.agent);if(pb){qb.append('ec',pb.eventCount);pb.eventCount++}var rb=w('getCustomParameters',pb);x(rb,function(sb){return x(ca(sb),function(tb){if(qb.containsKey(tb)){da(new Error('Custom parameter '+tb+' has already been specified.'))}else qb.append(tb,sb[tb]);})});qb.append('it',ka);return qb}function gb(pb,qb,rb){l.sendEvent(pb?pb.id:null,qb,rb,fb(pb))}function hb(){while(g.queue.length&&!ga.isLocked()){var pb=g.queue.shift();wa.apply(g,pb)}}function ib(pb){return 'fbevents.plugins.'+pb}function jb(pb){if(/^[a-zA-Z]\w+$/.test(pb)===false){da(new Error('\''+pb+'\' is an invalid plugin name.'));return true}var qb=ib(pb);if(ja[qb])return true;if(ia(qb)){kb(qb,ha(qb));return true}var rb=q.get();if(rb.baseURL&&rb.scriptElement){var sb=rb.baseURL+'/signals/plugins/'+pb+'.js?v='+g.version;if(!ja[qb]){ga.lockPlugin(qb);var tb=b.createElement('script');tb.src=sb;tb.async=true;if(rb.scriptElement&&rb.scriptElement.parentNode)rb.scriptElement.parentNode.insertBefore(tb,rb.scriptElement);}}return false}function kb(pb,qb){if(Object.prototype.hasOwnProperty.call(ja,pb))return;if(ma.call(qb,'__fbEventsPlugin')&&qb.__fbEventsPlugin===1){ja[pb]=qb;ja[pb].plugin(g,ua);w('pluginLoaded',pb)}ga.releasePlugin(pb)}ga.onUnlocked(function(){hb()});if(g.pixelId){oa=true;ya(g.pixelId)}if(oa&&pa||a.fbq!==a._fbq)n.logWarning('Multiple pixels with conflicting versions were detected on this page');if(qa.length>1)n.logWarning('Multiple different pixels were detected on this page');function lb(){if(g.disablePushState===true)return;if(!d.pushState||!d.replaceState)return;var pb=fa(function(){sa=na;na=c.href;if(na===sa)return;var qb=new va({allowDuplicatePageViews:true});wa.call(qb,'trackCustom','PageView')});n.injectMethod(d,'pushState',pb);n.injectMethod(d,'replaceState',pb);a.addEventListener('popstate',pb,false)}v('fired',function(){return lb()});function mb(pb){g._initHandlers.push(pb);za()}function nb(){return {pixelInitializationTime:ka,pixels:qa}}function ob(pb){pb.instance=ua;pb.callMethod=wa;pb.loadPlugin=jb;pb.registerPlugin=kb;pb._initHandlers=[];pb._initsDone={};pb.on=u;pb.once=v;pb.send=eb;pb.trigger=w;pb.getEventCustomParameters=fb;pb.addInitHandler=mb;pb.getState=nb;pb.init=ya;pb.set=xa}ob(a.fbq);hb();e.exports={addInitHandler:function pb(qb){g._initHandlers.push(qb);za()},doExport:ob,getState:nb,getEventCustomParameters:fb,sendEvent:gb,loadPlugin:jb};w('execEnd');w('initialized',g);if(g.registerPlugin)g.registerPlugin('fbevents',e.exports);g.ensureModuleRegistered('fbevents',function(){return e.exports})})();return e.exports})(window,document,location,history);
fbq.registerPlugin("global_config", {__fbEventsPlugin: 1, plugin: function(fbq, instance) { fbq.loadPlugin("opttracking");instance.configLoaded("global_config"); }});