function _0x2959(){const _0x315cd2=['title','Error\x20fetching\x20Hiru\x20News:\x20','2675970NtHmRY','admin','🛑\x2024/7\x20News\x20Deactivated.','getLatestNews','sender','2835928jdfxUW','results','jid','sendMessage','shift','push','error','Error\x20in\x20news\x20command:\x20','@sl-code-lords/esana-news','440116AFpvMf','interval','🚫\x20This\x20command\x20can\x20only\x20be\x20used\x20by\x20group\x20admins\x20or\x20the\x20bot\x20owner.','12XVlYBm','Enable\x20Sri\x20Lankan\x20news\x20updates\x20in\x20this\x20group','BreakingNews','14QrvPol','\x0a>\x20*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳\x20𝙱𝚈\x20𝙳𝙴𝙽𝚄𝚆𝙰𝙽-𝙼𝙳*','Disable\x20Sri\x20Lankan\x20news\x20updates\x20in\x20this\x20group','📰\x2024/7\x20News\x20Already\x20Activated.','22XrvRDd','📰\x20*','startnews','publishedAt','483004XnnMiX','🛑\x2024/7\x20News\x20is\x20not\x20active\x20in\x20this\x20group.','Failed\x20to\x20deactivate\x20the\x20news\x20service.','message','This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.','date','hirunews-scrap','3351690cBsDEY','news','../command','stopnews','description','7176670MtTHWn','user','length','keys','1213850klDeaG','some','forEach','2MeYnsD','content'];_0x2959=function(){return _0x315cd2;};return _0x2959();}const _0x143027=_0x2097;(function(_0x34a2ce,_0x466240){const _0xe5ef71=_0x2097,_0x4c5eeb=_0x34a2ce();while(!![]){try{const _0x4abaed=parseInt(_0xe5ef71(0x126))/0x1*(parseInt(_0xe5ef71(0x146))/0x2)+parseInt(_0xe5ef71(0x13b))/0x3*(parseInt(_0xe5ef71(0x138))/0x4)+parseInt(_0xe5ef71(0x123))/0x5+-parseInt(_0xe5ef71(0x12a))/0x6+parseInt(_0xe5ef71(0x13e))/0x7*(parseInt(_0xe5ef71(0x12f))/0x8)+parseInt(_0xe5ef71(0x14d))/0x9+parseInt(_0xe5ef71(0x11f))/0xa*(-parseInt(_0xe5ef71(0x142))/0xb);if(_0x4abaed===_0x466240)break;else _0x4c5eeb['push'](_0x4c5eeb['shift']());}catch(_0x3fa134){_0x4c5eeb['push'](_0x4c5eeb['shift']());}}}(_0x2959,0x59581));const {cmd}=require(_0x143027(0x14f)),Hiru=require(_0x143027(0x14c)),Esana=require(_0x143027(0x137)),axios=require('axios'),config=require('../config');function _0x2097(_0x39b056,_0x4a11e7){const _0x2959ab=_0x2959();return _0x2097=function(_0x209759,_0x1a475a){_0x209759=_0x209759-0x11d;let _0x3e9fbf=_0x2959ab[_0x209759];return _0x3e9fbf;},_0x2097(_0x39b056,_0x4a11e7);}let activeGroups={},lastNewsTitles={};async function getLatestNews(){const _0x347833=_0x143027;let _0x3ad135=[];try{const _0x1da44c=new Hiru(),_0x413179=await _0x1da44c[_0x347833(0x13d)]();_0x3ad135['push']({'title':_0x413179[_0x347833(0x130)][_0x347833(0x128)],'content':_0x413179[_0x347833(0x130)][_0x347833(0x14e)],'date':_0x413179[_0x347833(0x130)][_0x347833(0x14b)]});}catch(_0x1f16da){console[_0x347833(0x135)](_0x347833(0x129)+_0x1f16da['message']);}try{const _0x51f9d6=new Esana(),_0x51181e=await _0x51f9d6[_0x347833(0x12d)]();_0x51181e&&_0x51181e[_0x347833(0x128)]&&_0x51181e['description']&&_0x51181e['publishedAt']?_0x3ad135[_0x347833(0x134)]({'title':_0x51181e[_0x347833(0x128)],'content':_0x51181e[_0x347833(0x11e)],'date':_0x51181e[_0x347833(0x145)]}):console['error']('Error:\x20Esana\x20News\x20returned\x20invalid\x20data.');}catch(_0x567c09){console[_0x347833(0x135)]('Error\x20fetching\x20Esana\x20News:\x20'+_0x567c09[_0x347833(0x149)]);}return _0x3ad135;}async function checkAndPostNews(_0x409370,_0x5d9376){const _0x3a5a73=_0x143027,_0x15d897=await getLatestNews();_0x15d897[_0x3a5a73(0x125)](async _0x43ce91=>{const _0x27209a=_0x3a5a73;!lastNewsTitles[_0x5d9376]&&(lastNewsTitles[_0x5d9376]=[]),!lastNewsTitles[_0x5d9376]['includes'](_0x43ce91['title'])&&(await _0x409370[_0x27209a(0x132)](_0x5d9376,{'text':_0x27209a(0x143)+_0x43ce91[_0x27209a(0x128)]+'*\x0a'+_0x43ce91[_0x27209a(0x127)]+'\x0a'+_0x43ce91[_0x27209a(0x14b)]+_0x27209a(0x13f)}),lastNewsTitles[_0x5d9376][_0x27209a(0x134)](_0x43ce91[_0x27209a(0x128)]),lastNewsTitles[_0x5d9376][_0x27209a(0x121)]>0x64&&lastNewsTitles[_0x5d9376][_0x27209a(0x133)]());});}cmd({'pattern':_0x143027(0x144),'desc':_0x143027(0x13c),'isGroup':!![],'react':'📰','filename':__filename},async(_0x26241b,_0x26c388,_0x511641,{from:_0x1b59e7,isGroup:_0x1a2f2b,participants:_0xbd1b7e})=>{const _0x5c4bbb=_0x143027;try{if(_0x1a2f2b){const _0x30a01f=_0xbd1b7e['some'](_0x41cb86=>_0x41cb86['id']===_0x26c388['sender']&&_0x41cb86[_0x5c4bbb(0x12b)]),_0x43b469=_0x26c388[_0x5c4bbb(0x12e)]===_0x26241b[_0x5c4bbb(0x120)]['jid'];_0x30a01f||_0x43b469?!activeGroups[_0x1b59e7]?(activeGroups[_0x1b59e7]=!![],await _0x26241b[_0x5c4bbb(0x132)](_0x1b59e7,{'text':'📰\x2024/7\x20News\x20Activated.'}),!activeGroups[_0x5c4bbb(0x139)]&&(activeGroups[_0x5c4bbb(0x139)]=setInterval(async()=>{for(const _0x54046f in activeGroups){activeGroups[_0x54046f]&&_0x54046f!=='interval'&&await checkAndPostNews(_0x26241b,_0x54046f);}},0xea60))):await _0x26241b[_0x5c4bbb(0x132)](_0x1b59e7,{'text':_0x5c4bbb(0x141)}):await _0x26241b[_0x5c4bbb(0x132)](_0x1b59e7,{'text':'🚫\x20This\x20command\x20can\x20only\x20be\x20used\x20by\x20group\x20admins\x20or\x20the\x20bot\x20owner.'});}else await _0x26241b[_0x5c4bbb(0x132)](_0x1b59e7,{'text':_0x5c4bbb(0x14a)});}catch(_0x49cbea){console[_0x5c4bbb(0x135)](_0x5c4bbb(0x136)+_0x49cbea[_0x5c4bbb(0x149)]),await _0x26241b[_0x5c4bbb(0x132)](_0x1b59e7,{'text':'Failed\x20to\x20activate\x20the\x20news\x20service.'});}}),cmd({'pattern':_0x143027(0x11d),'desc':_0x143027(0x140),'isGroup':!![],'react':'🛑','filename':__filename},async(_0x4f5dcf,_0xd40880,_0x40d44f,{from:_0x28ec83,isGroup:_0x55758d,participants:_0x3240ed})=>{const _0x254dbf=_0x143027;try{if(_0x55758d){const _0xbc9d5c=_0x3240ed[_0x254dbf(0x124)](_0x27bc39=>_0x27bc39['id']===_0xd40880[_0x254dbf(0x12e)]&&_0x27bc39[_0x254dbf(0x12b)]),_0x5746c0=_0xd40880[_0x254dbf(0x12e)]===_0x4f5dcf[_0x254dbf(0x120)][_0x254dbf(0x131)];_0xbc9d5c||_0x5746c0?activeGroups[_0x28ec83]?(delete activeGroups[_0x28ec83],await _0x4f5dcf[_0x254dbf(0x132)](_0x28ec83,{'text':_0x254dbf(0x12c)}),Object[_0x254dbf(0x122)](activeGroups)[_0x254dbf(0x121)]===0x1&&activeGroups[_0x254dbf(0x139)]&&(clearInterval(activeGroups[_0x254dbf(0x139)]),delete activeGroups[_0x254dbf(0x139)])):await _0x4f5dcf[_0x254dbf(0x132)](_0x28ec83,{'text':_0x254dbf(0x147)}):await _0x4f5dcf['sendMessage'](_0x28ec83,{'text':_0x254dbf(0x13a)});}else await _0x4f5dcf[_0x254dbf(0x132)](_0x28ec83,{'text':_0x254dbf(0x14a)});}catch(_0x24c72b){console[_0x254dbf(0x135)](_0x254dbf(0x136)+_0x24c72b[_0x254dbf(0x149)]),await _0x4f5dcf[_0x254dbf(0x132)](_0x28ec83,{'text':_0x254dbf(0x148)});}});
