const _0x32e9=['get','playlist','chartsInf','9d_xaaK7W-eej-R2Kgry-w==','data','https://www.youtube.com/results?search_query=','+專輯+購買&gs_lcp=CgZwc3ktYWIQA1CNrQJYja0CYNa1AmgAcAB4AIABPYgBPZIBATGYAQCgAQKgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwiAjO62pcnqAhWIEqYKHffUDrkQ4dUDCAw&uact=5','nowPlayId','playerSrc','document','body','&type=','https://api.kkbox.com/v1.1/charts?territory=TW','length','chartsChioce','/tracks?territory=TW&offset=0&limit=8','Bearer\x20','then','LZPhK2EyYzN15dU-PT','&terr=SG&lang=en&autoplay=true','https://api.kkbox.com/v1.1/charts/','true','playList','scrollTop','catch','#app'];(function(_0x44e525,_0x32e9a7){const _0x2b759a=function(_0x54eecd){while(--_0x54eecd){_0x44e525['push'](_0x44e525['shift']());}};_0x2b759a(++_0x32e9a7);}(_0x32e9,0x185));const _0x2b75=function(_0x44e525,_0x32e9a7){_0x44e525=_0x44e525-0x0;let _0x2b759a=_0x32e9[_0x44e525];return _0x2b759a;};new Vue({'el':_0x2b75('0x0'),'data':function(){return{'chartsInf':'','chartsChioce':'','playList':[],'playerSrc':'','nowPlayId':''};},'created':async function(){this[_0x2b75('0x3')]=await getCharts(),this['chartsChioce']=this[_0x2b75('0x3')][0x0]['id'],this[_0x2b75('0x17')]=await getPlaylist(this[_0x2b75('0xf')]),getPlayerSrc(_0x2b75('0x13'),_0x2b75('0x2'),_0x2b75('0x16'));},'mounted':async function(){},'watch':{'chartsChioce':async function(){this[_0x2b75('0x17')]=await getPlaylist(this[_0x2b75('0xf')]);}},'methods':{'getPlayerSrc':function(_0x4287a1,_0x1d06b2){if(_0x4287a1[_0x2b75('0xe')]==0x0)this[_0x2b75('0x9')]='',this['nowPlayId']='';else{let _0x1ce8a3='https://widget.kkbox.com/v1/?id='+_0x4287a1+_0x2b75('0xc')+_0x1d06b2+_0x2b75('0x14');this[_0x2b75('0x9')]=_0x1ce8a3,this[_0x2b75('0x8')]=_0x4287a1;}},'getYoutubeSrc':function(_0x2eee20,_0x2f7c81){return _0x2b75('0x6')+_0x2eee20+'+'+_0x2f7c81;},'getGoogleSearchSrc':function(_0x57139c){return'https://www.google.com/search?rlz=1C1CHBF_zh-TWTW902TW902&biw=1536&bih=722&ei=ydULX8CDBYilmAX3qbvICw&q='+_0x57139c+'+專輯+購買&oq='+_0x57139c+_0x2b75('0x7');},'gotoTop':function(){window[_0x2b75('0xa')][_0x2b75('0xb')][_0x2b75('0x18')]=0x0,window[_0x2b75('0xa')]['documentElement'][_0x2b75('0x18')]=0x0;}}});function getCharts(){function _0x708778(_0x42b7e3){let _0x466cd2=_0x2b75('0x11')+_0x42b7e3;return _0x466cd2;}return axios[_0x2b75('0x1')](_0x2b75('0xd'),{'headers':{'Authorization':_0x708778(_0x2b75('0x4'))}})[_0x2b75('0x12')](function(_0x51231f){return _0x51231f[_0x2b75('0x5')][_0x2b75('0x5')];})[_0x2b75('0x19')](function(_0x7ff09a){})['finally'](function(){});}function getPlaylist(_0x1c5cbc){let _0x3ad3fb=_0x2b75('0x4');return axios[_0x2b75('0x1')](_0x2b75('0x15')+_0x1c5cbc+_0x2b75('0x10'),{'headers':{'Authorization':_0x2b75('0x11')+_0x3ad3fb}})[_0x2b75('0x12')](function(_0x41cef5){return _0x41cef5[_0x2b75('0x5')][_0x2b75('0x5')];})['catch'](function(_0x5540ec){})['finally'](function(){});}