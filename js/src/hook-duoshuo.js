// build time:Sat Dec 19 2020 12:24:56 GMT+0800 (中国标准时间)
typeof DUOSHUO!=="undefined"?o():$("#duoshuo-script")[0].onload=o;function o(){var o=DUOSHUO.templates.post;DUOSHUO.templates.post=function(r,e){var s=o(r,e);var n=r.post.agent;var i=r.post.author.user_id;var u="";if(i&&i==CONFIG.duoshuo.userId){u='<span class="duoshuo-ua-admin">'+CONFIG.duoshuo.author+"</span>"}if(n&&/^Mozilla/.test(n)){s=s.replace(/<\/div><p>/,u+a(n)+"</div><p>")}return s}}function a(o){$.ua.set(o);var a="Unknown";var r=$.ua;var e=m()?"<br><br>":'<span class="duoshuo-ua-separator"></span>';var s=r.os.name||a;var n=r.os.version||a;var i=r.browser.name||a;var u=r.browser.version||a;var t={os:{android:"android",linux:"linux",windows:"windows",ios:"apple","mac os":"apple",unknown:"desktop"},browser:{chrome:"chrome",chromium:"chrome",firefox:"firefox",opera:"opera",safari:"safari",ie:"internet-explorer",wechat:"wechat",qq:"qq",unknown:"globe"}};var p=t.os[s.toLowerCase()];var l=t.browser[c()];return e+'<span class="duoshuo-ua-platform duoshuo-ua-platform-'+s.toLowerCase()+'">'+'<i class="fa fa-'+p+'"></i>'+s+" "+n+"</span>"+e+'<span class="duoshuo-ua-browser duoshuo-ua-browser-'+i.toLowerCase()+'">'+'<i class="fa fa-'+l+'"></i>'+i+" "+u+"</span>";function c(){var o=i.toLowerCase();if(o.match(/WeChat/i)){return"wechat"}if(o.match(/QQBrowser/i)){return"qq"}return o}function m(){var o=window.navigator.userAgent;var a=o.match(/iPad/i)!==null;var r=["iphone","android","phone","mobile","wap","netfront","x11","java","opera mobi","opera mini","ucweb","windows ce","symbian","symbianos","series","webos","sony","blackberry","dopod","nokia","samsung","palmsource","xda","pieplus","meizu","midp","cldc","motorola","foma","docomo","up.browser","up.link","blazer","helio","hosin","huawei","novarra","coolpad","webos","techfaith","palmsource","alcatel","amoi","ktouch","nexian","ericsson","philips","sagem","wellcom","bunjalloo","maui","smartphone","iemobile","spice","bird","zte-","longcos","pantech","gionee","portalmmm","jig browser","hiptop","benq","haier","^lct","320x320","240x320","176x220"];var e=new RegExp(r.join("|"),"i");return!a&&o.match(e)}}
//rebuild by hrmmi 