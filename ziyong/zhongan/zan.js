/*
微信小程序:众安健康
**小白制作，如有问题，请多多包涵**
目前功能:签到、自动收取，其他任务暂时因能力有限没有加入，满5元提现，慢慢挂着吧。
本地重写:
hostname = ihealth.zhongan.com
api/lemon/v1/common/activity/homePage url script-request-body zan.js
正常登录后进入小程序首页~日日领钱获取变量，变量名:zatk、zabd
支持多账号
boxjs地址: https://raw.githubusercontent.com/danchaofan12138/danchaofan/main/leafxcy.box.json

脚本地址: https://raw.githubusercontent.com/danchaofan12138/danchaofan/main/ziyong/zhongan/zan.js
*/

const _0x2776=['split','join','您选择的是用\x22#\x22隔开\x0a','\x0a💎收益查询💎','get','wait','==============📣系统通知📣==============','name','toLocaleString','path','Content-Length','setdata','status','headers','cookieJar','abs','getDate','{\x0a\x20\x20\x22channelCode\x22:\x20\x22c20195660470001\x22,\x0a\x20\x20\x22activityCode\x22:\x20\x22ONA20220411001\x22,\x0a\x20\x20\x22id\x22:\x208321372\x0a}','trim','POST','getSeconds','message','zabd','match','logs','\x0a【🎉🎉🎉\x20收取成功\x20🎉🎉🎉】\x0a\x20获得奖励💪🏻\x20','getTime','msg','redirect','您选择的是用换行隔开\x0a',',\x20开始!','zatk','readFileSync','length','\x20===============================================\x0a','done','push','getScript','getMonth','write','*/*','finally','url','writeFileSync','open-url','isNode','toObj','\x0a📝开始签到📝','catch','sumAward','fetch','\x0a【🎉🎉🎉\x20收取失败\x20🎉🎉🎉】:失败\x20❌\x20了呢,','zacount','cktough','assign','GET','set-cookie','getval','env','dataFile','isSurge','send','post','isArray','data','mediaUrl',',\x20结束!\x20🕛\x20','application/x-www-form-urlencoded','getdata','opts','code','./sendNotify','loaddata','got','existsSync','isNeedRewrite','lodash_set','setval','getFullYear','concat','call','isLoon','\x0a\x0a===============================================\x20脚本执行\x20-\x20北京时间(UTC+8)：','runScript','zatk获取成功！','then','method','getHours','api/lemon/v1/common/activity/homePage','\x0a💎开始收取💎','getjson','Cookie','statusCode','media-url','cwd','\x0a【🎉🎉🎉总收益\x20🎉🎉🎉】\x0a\x20','@chavy_boxjs_userCfgs.httpapi','logErr','toStr','initGotEnv','isMute','box.dat','Content-Type','slice','isQuanX','parse','timeout','/v1/scripting/evaluate','setjson','resolve','exports','logSeparator','valueForKey','replace','toString','startTime','object','stringify','exec','substr','indexOf','zafb','undefined','reduce','\x0a【🎉🎉🎉恭喜你🎉🎉🎉】签到已成功\x20,快去收取奖励吧✅\x20','log',',\x20错误!','body'];const _0x462d=function(_0x2776b0,_0x462d60){_0x2776b0=_0x2776b0-0x0;let _0x278426=_0x2776[_0x2776b0];return _0x278426;};const $=new Env('众安');const notify=$[_0x462d('0x2d')]()?require(_0x462d('0x47')):'';let status,no;status=(status=$['getval']('zastatus')||'1')>0x1?''+status:'';const zatkArr=[],zabdArr=[],zattkArr=[],zabbdArr=[];let zatk=$['getdata'](_0x462d('0x1f'));let zabd=$[_0x462d('0x44')]('zabd');let tz=$['getval']('tz')||'1';const logs=0x0;let iszack=typeof $request!==_0x462d('0x7a');if(iszack){zack();$['done']();}if($[_0x462d('0x2d')]()){if(process['env'][_0x462d('0x1f')]&&process[_0x462d('0x3a')]['zatk'][_0x462d('0x78')]('#')>-0x1){zatk=process[_0x462d('0x3a')]['zatk'][_0x462d('0x0')]('#');console['log'](_0x462d('0x2'));}else if(process['env'][_0x462d('0x1f')]&&process[_0x462d('0x3a')]['zatk']['indexOf']('\x0a')>-0x1){zatk=process['env']['zatk'][_0x462d('0x0')]('\x0a');console['log'](_0x462d('0x1d'));}else{zatk=process['env'][_0x462d('0x1f')][_0x462d('0x0')]();};if(process[_0x462d('0x3a')]['zabd']&&process['env'][_0x462d('0x79')]['indexOf']('#')>-0x1){zabd=process['env'][_0x462d('0x16')]['split']('#');console['log'](_0x462d('0x2'));}else if(process[_0x462d('0x3a')][_0x462d('0x16')]&&process[_0x462d('0x3a')][_0x462d('0x16')]['indexOf']('\x0a')>-0x1){zabd=process['env'][_0x462d('0x16')][_0x462d('0x0')]('\x0a');console['log'](_0x462d('0x1d'));}else{zabd=process['env']['zabd']['split']();};console['log']('============\x20脚本执行-国际标准时间(UTC)：'+new Date()['toLocaleString']()+'\x20\x20=============\x0a');console[_0x462d('0x7d')]('============\x20脚本执行-北京时间(UTC+8)：'+new Date(new Date()[_0x462d('0x1a')]()+0x8*0x3c*0x3c*0x3e8)[_0x462d('0x8')]()+'\x20\x20=============\x0a');}else{zatkArr['push']($['getdata'](_0x462d('0x1f')));zabdArr[_0x462d('0x24')]($[_0x462d('0x44')]('zabd'));let zacount=$['getval'](_0x462d('0x34'))||'1';for(let i=0x2;i<=zacount;i++){zatkArr[_0x462d('0x24')]($[_0x462d('0x44')]('zatk'+i));zabdArr[_0x462d('0x24')]($['getdata'](_0x462d('0x16')+i));}}!(async()=>{if(!zatkArr[0x0]){$['msg']($['name'],'【提示】请先获取一cookie');return;}console['log'](_0x462d('0x52')+new Date(new Date()[_0x462d('0x1a')]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)['toLocaleString']()+_0x462d('0x22'));console['log']('-------------\x20共'+zatkArr[_0x462d('0x21')]+'个账号----------------\x0a');for(let _0x7ebd5f=0x0;_0x7ebd5f<zatkArr[_0x462d('0x21')];_0x7ebd5f++){if(zatkArr[_0x7ebd5f]){zatk=zatkArr[_0x7ebd5f];zabd=zabdArr[_0x7ebd5f];$['index']=_0x7ebd5f+0x1;console[_0x462d('0x7d')]('蛋炒饭\x20脚本提示\x0a');await $[_0x462d('0x5')](0x3e8);console['log']('\x0a开始【账号'+$['index']+'】');console['log'](_0x462d('0x2f'));await zaqd();await $[_0x462d('0x5')](0x3e8);console['log'](_0x462d('0x59'));await zasq();await $['wait'](0x3e8);console[_0x462d('0x7d')](_0x462d('0x3'));await zacx();await $['wait'](0x3e8);}}})()[_0x462d('0x30')](_0x11d577=>$['logErr'](_0x11d577))[_0x462d('0x29')](()=>$[_0x462d('0x23')]());function zack(){if($request['url']['indexOf'](_0x462d('0x58'))>0x0){const _0x2c98f6=JSON['stringify']($request['headers']);if(_0x2c98f6)$[_0x462d('0xb')](_0x2c98f6,'zatk'+status);$[_0x462d('0x7d')](_0x2c98f6);$['msg']($[_0x462d('0x7')],'',''+status+_0x462d('0x54'));const _0x54ea99=JSON[_0x462d('0x75')]($request['body']);if(_0x54ea99)$[_0x462d('0xb')](_0x54ea99,_0x462d('0x16')+status);$['log'](_0x54ea99);$[_0x462d('0x1b')]($[_0x462d('0x7')],'',''+status+'zabd获取成功！');}}function zasq(_0x5e7cbc=0x0){return new Promise(_0xabaad9=>{let _0x4fff6f={'url':'https://ihealth.zhongan.com/api/lemon/v1/common/activity/lottery','headers':JSON['parse'](zatk),'body':_0x462d('0x11')};$[_0x462d('0x3e')](_0x4fff6f,async(_0x1d1051,_0x355bf2,_0x32e070)=>{try{result=JSON['parse'](_0x32e070);if(result['code']==0x0){$['log'](_0x462d('0x19'));}else if(result[_0x462d('0x46')]==0x9c43){$['log'](_0x462d('0x33')+result[_0x462d('0x15')]+'\x20');}}catch(_0x4262a3){$[_0x462d('0x61')](_0x4262a3,_0x355bf2);}finally{_0xabaad9();}},_0x5e7cbc);});}function zacx(_0x57c286=0x0){return new Promise(_0x327b3f=>{let _0x2519bb={'url':'https://ihealth.zhongan.com/api/lemon/v1/common/activity/homePage','headers':JSON['parse'](zatk),'body':JSON['parse'](zabd)};$['post'](_0x2519bb,async(_0x40aae7,_0x4b77e4,_0x4ea925)=>{try{result=JSON[_0x462d('0x69')](_0x4ea925);if(result[_0x462d('0x46')]==0x0){$[_0x462d('0x7d')](_0x462d('0x5f')+result['result'][_0x462d('0x31')]+'\x20元');}}catch(_0x428aec){$['logErr'](_0x428aec,_0x4b77e4);}finally{_0x327b3f();}},_0x57c286);});}function zaqd(_0x2a64e6=0x0){return new Promise(_0x1d77a3=>{let _0x19628f={'url':'https://ihealth.zhongan.com/api/lemon/v1/common/activity/signIn','headers':JSON['parse'](zatk),'body':JSON['parse'](zabd)};$['post'](_0x19628f,async(_0x244f81,_0x1c1f96,_0x1ed736)=>{try{result=JSON[_0x462d('0x69')](_0x1ed736);if(result[_0x462d('0x46')]==0x0){$['log'](_0x462d('0x7c'));}else{$['log']('\x0a【🎉\x20高兴个蛋\x20🎉】执行签到:失败\x20❌\x20了呢\x20');}}catch(_0x56016d){$['logErr'](_0x56016d,resp);}finally{_0x1d77a3();}},_0x2a64e6);});}function Env(_0xc2e323,_0x2d43e4){class _0x417d3a{constructor(_0xb4e287){this[_0x462d('0x3a')]=_0xb4e287;}['send'](_0x4fb136,_0x465e6b=_0x462d('0x37')){_0x4fb136='string'==typeof _0x4fb136?{'url':_0x4fb136}:_0x4fb136;let _0x5bddaf=this[_0x462d('0x4')];return'POST'===_0x465e6b&&(_0x5bddaf=this[_0x462d('0x3e')]),new Promise((_0x102254,_0x3b06ef)=>{_0x5bddaf['call'](this,_0x4fb136,(_0x49c629,_0x3c9b6f,_0x1e2e21)=>{_0x49c629?_0x3b06ef(_0x49c629):_0x102254(_0x3c9b6f);});});}['get'](_0x3e9046){return this['send']['call'](this[_0x462d('0x3a')],_0x3e9046);}['post'](_0x2d8c05){return this[_0x462d('0x3d')][_0x462d('0x50')](this[_0x462d('0x3a')],_0x2d8c05,_0x462d('0x13'));}}return new class{constructor(_0x4348e3,_0x2411af){this[_0x462d('0x7')]=_0x4348e3,this['http']=new _0x417d3a(this),this[_0x462d('0x40')]=null,this[_0x462d('0x3b')]=_0x462d('0x65'),this[_0x462d('0x18')]=[],this[_0x462d('0x64')]=!0x1,this[_0x462d('0x4b')]=!0x1,this[_0x462d('0x6f')]='\x0a',this[_0x462d('0x73')]=new Date()['getTime'](),Object['assign'](this,_0x2411af),this[_0x462d('0x7d')]('','🔔'+this[_0x462d('0x7')]+_0x462d('0x1e'));}[_0x462d('0x2d')](){return _0x462d('0x7a')!=typeof module&&!!module[_0x462d('0x6e')];}['isQuanX'](){return _0x462d('0x7a')!=typeof $task;}['isSurge'](){return _0x462d('0x7a')!=typeof $httpClient&&_0x462d('0x7a')==typeof $loon;}[_0x462d('0x51')](){return _0x462d('0x7a')!=typeof $loon;}[_0x462d('0x2e')](_0xee0775,_0x218c05=null){try{return JSON[_0x462d('0x69')](_0xee0775);}catch{return _0x218c05;}}[_0x462d('0x62')](_0x3a7080,_0x37c176=null){try{return JSON['stringify'](_0x3a7080);}catch{return _0x37c176;}}[_0x462d('0x5a')](_0x5ef271,_0x551b1c){let _0x355983=_0x551b1c;const _0x4da108=this[_0x462d('0x44')](_0x5ef271);if(_0x4da108)try{_0x355983=JSON[_0x462d('0x69')](this[_0x462d('0x44')](_0x5ef271));}catch{}return _0x355983;}[_0x462d('0x6c')](_0x22e905,_0x513f86){try{return this['setdata'](JSON[_0x462d('0x75')](_0x22e905),_0x513f86);}catch{return!0x1;}}[_0x462d('0x25')](_0x1d732d){return new Promise(_0x5bf3ac=>{this[_0x462d('0x4')]({'url':_0x1d732d},(_0x395077,_0x70782f,_0x4e58fc)=>_0x5bf3ac(_0x4e58fc));});}[_0x462d('0x53')](_0x4a0dcb,_0x293982){return new Promise(_0x1fdbbc=>{let _0x2b0b0b=this[_0x462d('0x44')](_0x462d('0x60'));_0x2b0b0b=_0x2b0b0b?_0x2b0b0b['replace'](/\n/g,'')[_0x462d('0x12')]():_0x2b0b0b;let _0x38ce4e=this['getdata']('@chavy_boxjs_userCfgs.httpapi_timeout');_0x38ce4e=_0x38ce4e?0x1*_0x38ce4e:0x14,_0x38ce4e=_0x293982&&_0x293982['timeout']?_0x293982[_0x462d('0x6a')]:_0x38ce4e;const [_0x5c725f,_0x388875]=_0x2b0b0b[_0x462d('0x0')]('@'),_0x4a53f6={'url':'http://'+_0x388875+_0x462d('0x6b'),'body':{'script_text':_0x4a0dcb,'mock_type':'cron','timeout':_0x38ce4e},'headers':{'X-Key':_0x5c725f,'Accept':_0x462d('0x28')}};this['post'](_0x4a53f6,(_0x47b470,_0x8953f9,_0x3986af)=>_0x1fdbbc(_0x3986af));})[_0x462d('0x30')](_0x35a28d=>this['logErr'](_0x35a28d));}[_0x462d('0x48')](){if(!this['isNode']())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this[_0x462d('0x9')]?this['path']:require(_0x462d('0x9'));const _0x1c3ac9=this['path'][_0x462d('0x6d')](this['dataFile']),_0x82fa3d=this[_0x462d('0x9')][_0x462d('0x6d')](process[_0x462d('0x5e')](),this['dataFile']),_0x4dc99a=this['fs']['existsSync'](_0x1c3ac9),_0x27d317=!_0x4dc99a&&this['fs']['existsSync'](_0x82fa3d);if(!_0x4dc99a&&!_0x27d317)return{};{const _0x529a09=_0x4dc99a?_0x1c3ac9:_0x82fa3d;try{return JSON['parse'](this['fs'][_0x462d('0x20')](_0x529a09));}catch(_0x454b73){return{};}}}}['writedata'](){if(this['isNode']()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this[_0x462d('0x9')]?this['path']:require('path');const _0x8399d5=this['path'][_0x462d('0x6d')](this[_0x462d('0x3b')]),_0x5c4f29=this[_0x462d('0x9')]['resolve'](process['cwd'](),this['dataFile']),_0x1b67fd=this['fs']['existsSync'](_0x8399d5),_0x53cbb7=!_0x1b67fd&&this['fs'][_0x462d('0x4a')](_0x5c4f29),_0x19da53=JSON['stringify'](this[_0x462d('0x40')]);_0x1b67fd?this['fs'][_0x462d('0x2b')](_0x8399d5,_0x19da53):_0x53cbb7?this['fs']['writeFileSync'](_0x5c4f29,_0x19da53):this['fs'][_0x462d('0x2b')](_0x8399d5,_0x19da53);}}['lodash_get'](_0x461b1e,_0x39f32d,_0x170239){const _0x3a9c90=_0x39f32d['replace'](/\[(\d+)\]/g,'.$1')['split']('.');let _0x2b4690=_0x461b1e;for(const _0x4bc3c3 of _0x3a9c90)if(_0x2b4690=Object(_0x2b4690)[_0x4bc3c3],void 0x0===_0x2b4690)return _0x170239;return _0x2b4690;}['lodash_set'](_0x1b627d,_0x1a6424,_0x10c517){return Object(_0x1b627d)!==_0x1b627d?_0x1b627d:(Array[_0x462d('0x3f')](_0x1a6424)||(_0x1a6424=_0x1a6424[_0x462d('0x72')]()[_0x462d('0x17')](/[^.[\]]+/g)||[]),_0x1a6424[_0x462d('0x67')](0x0,-0x1)[_0x462d('0x7b')]((_0x422f99,_0xc36202,_0x407e55)=>Object(_0x422f99[_0xc36202])===_0x422f99[_0xc36202]?_0x422f99[_0xc36202]:_0x422f99[_0xc36202]=Math[_0x462d('0xf')](_0x1a6424[_0x407e55+0x1])>>0x0==+_0x1a6424[_0x407e55+0x1]?[]:{},_0x1b627d)[_0x1a6424[_0x1a6424[_0x462d('0x21')]-0x1]]=_0x10c517,_0x1b627d);}[_0x462d('0x44')](_0x2e07a5){let _0x34a867=this[_0x462d('0x39')](_0x2e07a5);if(/^@/['test'](_0x2e07a5)){const [,_0x213770,_0x1d6b85]=/^@(.*?)\.(.*?)$/['exec'](_0x2e07a5),_0x23f280=_0x213770?this['getval'](_0x213770):'';if(_0x23f280)try{const _0x4e7c07=JSON[_0x462d('0x69')](_0x23f280);_0x34a867=_0x4e7c07?this['lodash_get'](_0x4e7c07,_0x1d6b85,''):_0x34a867;}catch(_0x316ce4){_0x34a867='';}}return _0x34a867;}['setdata'](_0x1be07b,_0x3cb448){let _0x237b27=!0x1;if(/^@/['test'](_0x3cb448)){const [,_0x4273de,_0x3597dc]=/^@(.*?)\.(.*?)$/[_0x462d('0x76')](_0x3cb448),_0x362135=this['getval'](_0x4273de),_0x589ec5=_0x4273de?'null'===_0x362135?null:_0x362135||'{}':'{}';try{const _0x59f79e=JSON['parse'](_0x589ec5);this[_0x462d('0x4c')](_0x59f79e,_0x3597dc,_0x1be07b),_0x237b27=this['setval'](JSON[_0x462d('0x75')](_0x59f79e),_0x4273de);}catch(_0x682193){const _0x593822={};this[_0x462d('0x4c')](_0x593822,_0x3597dc,_0x1be07b),_0x237b27=this[_0x462d('0x4d')](JSON['stringify'](_0x593822),_0x4273de);}}else _0x237b27=this[_0x462d('0x4d')](_0x1be07b,_0x3cb448);return _0x237b27;}[_0x462d('0x39')](_0x117629){return this[_0x462d('0x3c')]()||this['isLoon']()?$persistentStore['read'](_0x117629):this['isQuanX']()?$prefs[_0x462d('0x70')](_0x117629):this['isNode']()?(this['data']=this[_0x462d('0x48')](),this[_0x462d('0x40')][_0x117629]):this[_0x462d('0x40')]&&this[_0x462d('0x40')][_0x117629]||null;}['setval'](_0x2894a6,_0x452955){return this['isSurge']()||this['isLoon']()?$persistentStore[_0x462d('0x27')](_0x2894a6,_0x452955):this['isQuanX']()?$prefs['setValueForKey'](_0x2894a6,_0x452955):this['isNode']()?(this['data']=this['loaddata'](),this[_0x462d('0x40')][_0x452955]=_0x2894a6,this['writedata'](),!0x0):this[_0x462d('0x40')]&&this[_0x462d('0x40')][_0x452955]||null;}[_0x462d('0x63')](_0x5f4ea7){this['got']=this['got']?this[_0x462d('0x49')]:require('got'),this[_0x462d('0x35')]=this['cktough']?this[_0x462d('0x35')]:require('tough-cookie'),this['ckjar']=this['ckjar']?this['ckjar']:new this['cktough']['CookieJar'](),_0x5f4ea7&&(_0x5f4ea7['headers']=_0x5f4ea7['headers']?_0x5f4ea7[_0x462d('0xd')]:{},void 0x0===_0x5f4ea7['headers']['Cookie']&&void 0x0===_0x5f4ea7['cookieJar']&&(_0x5f4ea7['cookieJar']=this['ckjar']));}[_0x462d('0x4')](_0x4c3e16,_0x4cbd81=()=>{}){_0x4c3e16[_0x462d('0xd')]&&(delete _0x4c3e16['headers']['Content-Type'],delete _0x4c3e16[_0x462d('0xd')]['Content-Length']),this['isSurge']()||this['isLoon']()?(this['isSurge']()&&this[_0x462d('0x4b')]&&(_0x4c3e16[_0x462d('0xd')]=_0x4c3e16['headers']||{},Object[_0x462d('0x36')](_0x4c3e16[_0x462d('0xd')],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x462d('0x4')](_0x4c3e16,(_0x5e41da,_0x341ba2,_0x51d645)=>{!_0x5e41da&&_0x341ba2&&(_0x341ba2[_0x462d('0x7f')]=_0x51d645,_0x341ba2[_0x462d('0x5c')]=_0x341ba2[_0x462d('0xc')]),_0x4cbd81(_0x5e41da,_0x341ba2,_0x51d645);})):this[_0x462d('0x68')]()?(this[_0x462d('0x4b')]&&(_0x4c3e16['opts']=_0x4c3e16[_0x462d('0x45')]||{},Object['assign'](_0x4c3e16['opts'],{'hints':!0x1})),$task['fetch'](_0x4c3e16)[_0x462d('0x55')](_0x16fba1=>{const {statusCode:_0x1002e2,statusCode:_0x6bda53,headers:_0x1a1da0,body:_0x3f73dc}=_0x16fba1;_0x4cbd81(null,{'status':_0x1002e2,'statusCode':_0x6bda53,'headers':_0x1a1da0,'body':_0x3f73dc},_0x3f73dc);},_0x4ab1fc=>_0x4cbd81(_0x4ab1fc))):this['isNode']()&&(this['initGotEnv'](_0x4c3e16),this[_0x462d('0x49')](_0x4c3e16)['on'](_0x462d('0x1c'),(_0x139505,_0x3e1502)=>{try{if(_0x139505['headers']['set-cookie']){const _0x32e0b0=_0x139505[_0x462d('0xd')][_0x462d('0x38')]['map'](this['cktough'][_0x462d('0x5b')][_0x462d('0x69')])[_0x462d('0x72')]();this['ckjar']['setCookieSync'](_0x32e0b0,null),_0x3e1502[_0x462d('0xe')]=this['ckjar'];}}catch(_0x531479){this['logErr'](_0x531479);}})[_0x462d('0x55')](_0x3ad3d5=>{const {statusCode:_0x59c967,statusCode:_0x48db0e,headers:_0x6408d9,body:_0x347219}=_0x3ad3d5;_0x4cbd81(null,{'status':_0x59c967,'statusCode':_0x48db0e,'headers':_0x6408d9,'body':_0x347219},_0x347219);},_0x11dd92=>{const {message:_0x209230,response:_0x3ec2e6}=_0x11dd92;_0x4cbd81(_0x209230,_0x3ec2e6,_0x3ec2e6&&_0x3ec2e6['body']);}));}['post'](_0x1fac25,_0xd2137e=()=>{}){if(_0x1fac25[_0x462d('0x7f')]&&_0x1fac25[_0x462d('0xd')]&&!_0x1fac25[_0x462d('0xd')][_0x462d('0x66')]&&(_0x1fac25['headers'][_0x462d('0x66')]=_0x462d('0x43')),_0x1fac25['headers']&&delete _0x1fac25['headers'][_0x462d('0xa')],this['isSurge']()||this['isLoon']())this['isSurge']()&&this['isNeedRewrite']&&(_0x1fac25['headers']=_0x1fac25['headers']||{},Object[_0x462d('0x36')](_0x1fac25['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x1fac25,(_0x2d97d3,_0x49b0b3,_0x59056c)=>{!_0x2d97d3&&_0x49b0b3&&(_0x49b0b3['body']=_0x59056c,_0x49b0b3[_0x462d('0x5c')]=_0x49b0b3[_0x462d('0xc')]),_0xd2137e(_0x2d97d3,_0x49b0b3,_0x59056c);});else if(this['isQuanX']())_0x1fac25[_0x462d('0x56')]='POST',this['isNeedRewrite']&&(_0x1fac25[_0x462d('0x45')]=_0x1fac25['opts']||{},Object['assign'](_0x1fac25['opts'],{'hints':!0x1})),$task[_0x462d('0x32')](_0x1fac25)['then'](_0x233f79=>{const {statusCode:_0x23bd5a,statusCode:_0x570043,headers:_0x1cb07a,body:_0x409c27}=_0x233f79;_0xd2137e(null,{'status':_0x23bd5a,'statusCode':_0x570043,'headers':_0x1cb07a,'body':_0x409c27},_0x409c27);},_0x289913=>_0xd2137e(_0x289913));else if(this['isNode']()){this[_0x462d('0x63')](_0x1fac25);const {url:_0x3aa199,..._0x49ba88}=_0x1fac25;this['got'][_0x462d('0x3e')](_0x3aa199,_0x49ba88)['then'](_0x1cfe0c=>{const {statusCode:_0x535221,statusCode:_0x1a5bf2,headers:_0x4b7c19,body:_0x10db3f}=_0x1cfe0c;_0xd2137e(null,{'status':_0x535221,'statusCode':_0x1a5bf2,'headers':_0x4b7c19,'body':_0x10db3f},_0x10db3f);},_0x4760d2=>{const {message:_0x1f357b,response:_0x540e98}=_0x4760d2;_0xd2137e(_0x1f357b,_0x540e98,_0x540e98&&_0x540e98['body']);});}}['time'](_0x2ca2b1){let _0x270a71={'M+':new Date()[_0x462d('0x26')]()+0x1,'d+':new Date()[_0x462d('0x10')](),'H+':new Date()[_0x462d('0x57')](),'m+':new Date()['getMinutes'](),'s+':new Date()[_0x462d('0x14')](),'q+':Math['floor']((new Date()[_0x462d('0x26')]()+0x3)/0x3),'S':new Date()['getMilliseconds']()};/(y+)/['test'](_0x2ca2b1)&&(_0x2ca2b1=_0x2ca2b1[_0x462d('0x71')](RegExp['$1'],(new Date()[_0x462d('0x4e')]()+'')[_0x462d('0x77')](0x4-RegExp['$1']['length'])));for(let _0x16528b in _0x270a71)new RegExp('('+_0x16528b+')')['test'](_0x2ca2b1)&&(_0x2ca2b1=_0x2ca2b1['replace'](RegExp['$1'],0x1==RegExp['$1']['length']?_0x270a71[_0x16528b]:('00'+_0x270a71[_0x16528b])[_0x462d('0x77')]((''+_0x270a71[_0x16528b])[_0x462d('0x21')])));return _0x2ca2b1;}[_0x462d('0x1b')](_0x35cbed=_0xc2e323,_0x5f39ba='',_0x148b89='',_0x1d66d2){const _0x1abfa2=_0x146d94=>{if(!_0x146d94)return _0x146d94;if('string'==typeof _0x146d94)return this[_0x462d('0x51')]()?_0x146d94:this[_0x462d('0x68')]()?{'open-url':_0x146d94}:this[_0x462d('0x3c')]()?{'url':_0x146d94}:void 0x0;if(_0x462d('0x74')==typeof _0x146d94){if(this['isLoon']()){let _0x3e575d=_0x146d94['openUrl']||_0x146d94[_0x462d('0x2a')]||_0x146d94['open-url'],_0x532437=_0x146d94[_0x462d('0x41')]||_0x146d94[_0x462d('0x5d')];return{'openUrl':_0x3e575d,'mediaUrl':_0x532437};}if(this[_0x462d('0x68')]()){let _0x12faff=_0x146d94['open-url']||_0x146d94['url']||_0x146d94['openUrl'],_0x2a1789=_0x146d94[_0x462d('0x5d')]||_0x146d94[_0x462d('0x41')];return{'open-url':_0x12faff,'media-url':_0x2a1789};}if(this[_0x462d('0x3c')]()){let _0x15a36a=_0x146d94['url']||_0x146d94['openUrl']||_0x146d94[_0x462d('0x2c')];return{'url':_0x15a36a};}}};this['isMute']||(this['isSurge']()||this['isLoon']()?$notification['post'](_0x35cbed,_0x5f39ba,_0x148b89,_0x1abfa2(_0x1d66d2)):this[_0x462d('0x68')]()&&$notify(_0x35cbed,_0x5f39ba,_0x148b89,_0x1abfa2(_0x1d66d2)));let _0x40a802=['',_0x462d('0x6')];_0x40a802[_0x462d('0x24')](_0x35cbed),_0x5f39ba&&_0x40a802['push'](_0x5f39ba),_0x148b89&&_0x40a802[_0x462d('0x24')](_0x148b89),console[_0x462d('0x7d')](_0x40a802[_0x462d('0x1')]('\x0a')),this['logs']=this['logs'][_0x462d('0x4f')](_0x40a802);}['log'](..._0xfc077f){_0xfc077f['length']>0x0&&(this['logs']=[...this['logs'],..._0xfc077f]),console[_0x462d('0x7d')](_0xfc077f['join'](this['logSeparator']));}[_0x462d('0x61')](_0x4bec78,_0x24bfe6){const _0x5cec00=!this[_0x462d('0x3c')]()&&!this[_0x462d('0x68')]()&&!this[_0x462d('0x51')]();_0x5cec00?this[_0x462d('0x7d')]('','❗️'+this['name']+',\x20错误!',_0x4bec78['stack']):this[_0x462d('0x7d')]('','❗️'+this[_0x462d('0x7')]+_0x462d('0x7e'),_0x4bec78);}[_0x462d('0x5')](_0x53ffa8){return new Promise(_0x2ac682=>setTimeout(_0x2ac682,_0x53ffa8));}[_0x462d('0x23')](_0x9f9a70={}){const _0x582d4c=new Date()[_0x462d('0x1a')](),_0x50cfa4=(_0x582d4c-this[_0x462d('0x73')])/0x3e8;this[_0x462d('0x7d')]('','🔔'+this['name']+_0x462d('0x42')+_0x50cfa4+'\x20秒'),this[_0x462d('0x7d')](),(this['isSurge']()||this['isQuanX']()||this['isLoon']())&&$done(_0x9f9a70);}}(_0xc2e323,_0x2d43e4);}