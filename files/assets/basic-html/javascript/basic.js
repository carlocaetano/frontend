TRANSITION_TIME=200;
function localPending(){var a;document.getElementById("infoBtn").title=LOCALS.ABOUT_TITLE;a=document.getElementById("shareBox");if(properties.isShare){if(a)document.getElementById("shareFB").title=LOCALS.SHARE_FACEBOOK,document.getElementById("shareTwitter").title=LOCALS.SHARE_TWITTER,document.getElementById("shareBlogger").title=LOCALS.SHARE_BLOGGER,document.getElementById("shareEmail").title=LOCALS.SHARE_EMAIL,document.getElementById("shareLinked").title=LOCALS.SHARE_LINKEDIN,document.getElementById("shareTumblr").title=
LOCALS.SHARE_TUMBLR,document.getElementById("shareGoogle").title=LOCALS.SHARE_GOOGLE,document.getElementById("shareVk").title=LOCALS.SHARE_VK}else a.parentNode.removeChild(a);a=document.getElementById("zoomBox");a.style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms";if(a)document.getElementById("zoomIn").title=LOCALS.ZOOM_IN,document.getElementById("zoomOut").title=LOCALS.ZOOM_OUT;a=document.getElementById("tocBox");a.style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms";a.innerHTML=
"<h2>"+LOCALS.TOC_TITLE+"</h2>";a=document.getElementById("tocBtn");properties.isToc?(a.title=LOCALS.TOC_TITLE,a.style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms"):a.parentNode.removeChild(a);a=document.getElementById("downloadBtn");a.style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms";a.title=LOCALS.DOWNLOAD_TITLE;if(properties.isDownload){if(!properties.isToc)a.style.left="0px"}else a.parentNode.removeChild(a);a=document.getElementById("thumbBox");a.style[browser.prefix+
"TransitionDuration"]=TRANSITION_TIME+"ms";properties.isThumbnail?(document.getElementById("thumbBtn").title=LOCALS.THUMBNAILS_TITLE,document.getElementById("thumbBtn").style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms",document.getElementById("thumbLeftTool").style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms",document.getElementById("thumbLine").style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms"):a.parentNode.removeChild(a);if(!properties.isCopy)document.getElementById("Copyright").innerHTML=
"";if(document.getElementById("infoBtn"))a="",a=browser.isFlash?PUBL?"undefined"!=typeof window.parent?LOCALS.BASIC_INFO_RECOMMENDATION1.replace("{0}","<a id='FlashLink' href='"+window.parent.location.href+"' onclick='window.parent.location.reload();'>").replace("{1}","</a>"):LOCALS.BASIC_INFO_RECOMMENDATION1.replace("{0}","<a id='FlashLink' href='"+FULL_SRC+window.location.hash+"'>").replace("{1}","</a>"):LOCALS.BASIC_INFO_RECOMMENDATION1.replace("{0}","<a id='FlashLink' href='"+FULL_SRC+window.location.hash+
"'>").replace("{1}","</a>"):LOCALS.BASIC_INFO_RECOMMENDATION2.replace("{0}","<a href='http://get.adobe.com/flashplayer/' target='_blank'>").replace("{1}","</a>"),document.getElementById("infoBalloon").innerHTML="<div class='arrow'></div><a href='javascript:about.action();'  class='closeButton'></a><h2>"+LOCALS.BASIC_INFO_TITLE.replace("{0}",TITLE)+"</h2><br>"+LOCALS.BASIC_INFO_TEXT+"<br>"+a;document.getElementById("Navigation").style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms";document.getElementById("currentPage").parentNode.insertBefore(document.createTextNode(LOCALS.PAGE),
document.getElementById("currentPage"));notification.show();bgCorrection();pageInit()}
var book={w:600,h:400,scale:1.3,step:0.2,init:!1,getSize:function(){book.w="False"==INNER.isWide?INNER.bookWidth:2*INNER.bookWidth;book.h=INNER.bookHeight},setSize:function(a){book.getSize();book.w*=a;book.h*=a},setScale:function(a){0>a&&(400>book.w||200>book.h)||(book.scale+=a)},draw:function(){book.setSize(book.scale);var a=document.getElementById("Book");document.getElementById("Publication").style.width=book.w+"px";a.style.width=book.w+"px";a.style.height=book.h+"px";if(browser.supportHTML5){if(INNER.substrate){if(INNER.substrate.background)a.style.background=
INNER.substrate.background;if(INNER.substrate.backgroundColor)a.style.backgroundColor=INNER.substrate.backgroundColor;if(INNER.substrate.backgroundSize)a.style.backgroundSize=INNER.substrate.backgroundSize;a.style.backgroundPosition="center center";a.style.backgroundRepeat="no-repeat";a.style.backgroundOrigin="border-box"}}else{if(INNER.substrate.backgroundColor)a.style.backgroundColor=INNER.substrate.backgroundColor;a=document.getElementById("Page");a.currentStyle||window.getComputedStyle(a,null);
if(INNER.substrate.background){var b=document.createElement("img");b.src=INNER.substrate.background.substr(4,INNER.substrate.background.length-5);b.style.position="absolute";b.style.top="0px";b.style.left="0px";b.style.width="100%";b.style.height="100%";a.appendChild(b);a.style.backgroundImage="none"}}}},page={w:600,h:400,top:0,left:0,scale:1,getSize:function(){page.w=INNER.width;page.h=INNER.height},correct:function(){page.getSize();if("contain"==INNER.substrate.backgroundSize)if(book.w/page.w==
book.h/page.h)page.w=book.w,page.h=book.h,page.scale=book.scale,page.top=0,page.left=0;else if(book.w/page.w>book.h/page.h)page.scale=book.h/page.h,page.w*=page.scale,page.h=book.h,page.top=0;else{if(book.w/page.w<book.h/page.h)page.scale=book.w/page.w,page.w=book.w,page.h*=page.scale,page.top=(book.h-page.h)/2,page.left=0}else if("cover"==INNER.substrate.backgroundSize)if(book.w/page.w==book.h/page.h)page.w=book.w,page.h=book.h,page.scale=book.scale,page.top=0,page.left=0;else if(book.w/page.w<book.h/
page.h)page.scale=book.h/page.h,page.w*=page.scale,page.h=book.h,page.top=0,page.left=(book.w-page.w)/2;else if(book.w/page.w>book.h/page.h)page.scale=book.w/page.w,page.w=book.w,page.h*=page.scale,page.top=(book.h-page.h)/2,page.left=0},draw:function(){page.correct();document.getElementById("Page").style.width=page.w+"px";document.getElementById("Page").style.height=page.h+"px";document.getElementById("Page").style.top=page.top+"px";document.getElementById("Page").style.left=page.left+"px"}},pager=
{currentId:pageList[1].item,currentIndex:1,holdKey:"",isShow:!1,changeStateByKey:function(a){a=a||window.event;switch(a.which||a.keyCode){case 34:0<pager.currentIndex&&(pager.currentIndex-=1,loadPage(!0));break;case 33:pager.currentIndex<pageList.length&&(pager.currentIndex+=1,loadPage(!0));break;case 37:RTL?pager.currentIndex<pageList.length-1&&(pager.currentIndex+=1,loadPage(!0)):1<pager.currentIndex&&(pager.currentIndex-=1,loadPage(!0));break;case 39:RTL?1<pager.currentIndex&&(pager.currentIndex-=
1,loadPage(!0)):pager.currentIndex<pageList.length-1&&(pager.currentIndex+=1,loadPage(!0));break;case 27:book.scale=1.3;loadPage(!0);break;case 187:"firefox"!=browser.name&&"opera"!=browser.name&&zoomBook("in");break;case 189:"firefox"!=browser.name&&"opera"!=browser.name&&zoomBook("out");break;case 61:"firefox"==browser.name&&zoomBook("in");break;case 173:"firefox"==browser.name&&zoomBook("out")}},flip:function(a,b){a=a||window.event;if(13==(a.which||a.keyCode))loadPage(pager.checkPageName(b.value)),
b.value=""},getNumByItem:function(a){for(;pageList[1];)if(pageList[1].item==a){this.currentIndex=1;break}},checkPageName:function(a){if(0<1*a)for(var b=!1,c=1;pageList[c];){if(0<1*pageList[c].title){if(1*a==1*pageList[c].title&&pager.currentIndex!=c){pager.currentIndex=c;b=!0;break}}else for(var d=pageList[c].title.split("-"),e=0;d[e];){if(1*a==1*d[e]&&pager.currentIndex!=c&&pager.currentIndex!=c){pager.currentIndex=c;b=!0;break}e++}c++}1==pager.currentIndex&&(b=!0);return b},checkHashName:function(a){var b=
!1,a=a.substr(1),a=a.split("/");switch(a.length){case 1:a=-1==a[0].indexOf("noFlash")?a[0]:"";break;case 2:a=a[0];break;case 3:a=a[0];break;case 4:a=a[0];break;default:a=1}if(""==a)b=!0;else if(0<1*a)b=pager.checkPageName(a);else if(-1!=a.substr(0).indexOf("page"))for(var c=1;pageList[c];){if(a==pageList[c].item&&pager.currentIndex!=c){pager.currentIndex=c;b=!0;break}c++}else for(c=1;pageList[c];){if(a==pageList[c].title&&pager.currentIndex!=c){pager.currentIndex=c;b=!0;break}c++}1==pager.currentIndex&&
(b=!0);return b},checkLinkName:function(a){for(var b=!1,c=1;pageList[c];){if(a==pageList[c].item){pager.currentIndex=c;b=!0;break}c++}1==pager.currentIndex&&(b=!0);return b}},about={isShow:!1,action:function(){if(about.isShow)window.clearTimeout(a),document.getElementById("infoBalloon").style.opacity=0,window.setTimeout(function(){document.getElementById("infoBalloon").style.display="none"},500),about.isShow=!1;else{window.clearTimeout(a);document.getElementById("infoBalloon").style.display="block";
document.getElementById("infoBalloon").style.opacity=1;about.isShow=!0;var a=window.setTimeout(about.hide,4E3)}},hide:function(){document.getElementById("infoBalloon").style.opacity=0;window.setTimeout(function(){document.getElementById("infoBalloon").style.display="none"},500);about.isShow=!1}},download={isShow:!1,createList:function(a){var b=document.getElementById("downloadBox");b.hasChildNodes()&&b.removeChild(b.childNodes[0]);var c=document.createElement("UL");b.appendChild(c);for(b=1;a[b];){var d=
document.createElement("LI");if("undefined"!=typeof a[b].pdfPublication)d.innerHTML="<a target='_blank' href='"+a[b].pdfPublication.url+"'>"+LOCALS.DOWNLOAD_PUBLICATION+"  ("+a[b].pdfPublication.size+") </a>";if("undefined"!=typeof a[b].PdfPage)d.innerHTML="<a target='_blank' href='"+a[b].PdfPage.url+"'>"+LOCALS.DOWNLOAD_PAGE+"  ("+a[b].PdfPage.size+") </a>";if("undefined"!=typeof a[b].UserFile)d.innerHTML="<a target='_blank' href='"+a[b].UserFile.url+"'>"+LOCALS.DOWNLOAD_FILE+"  ("+a[b].UserFile.size+
") </a>";if("undefined"!=typeof a[b].MacPublication)d.innerHTML="<a target='_blank' href='"+a[b].MacPublication.url+"'>"+LOCALS.DOWNLOAD_FILE+"  ("+a[b].MacPublication.size+") </a>";if("undefined"!=typeof a[b].WinPublication)d.innerHTML="<a target='_blank' href='"+a[b].WinPublication.url+"'>"+LOCALS.DOWNLOAD_FILE+"  ("+a[b].WinPublication.size+") </a>";c.appendChild(d);b++}},mouseOn:function(a,b){download.lock(b);download.isShow?(a.title=LOCALS.DOWNLOAD_TITLE,a.getElementsByTagName("div")[0].style.opacity=
"0",a.getElementsByTagName("div")[0].style.top="-200px",download.isShow=!1):(a.title="",a.getElementsByTagName("div")[0].style.opacity="1",a.getElementsByTagName("div")[0].style.top="30px",download.isShow=!0)},hide:function(){if(download.isShow){var a=document.getElementById("downloadBox");a.parentNode.title=LOCALS.DOWNLOAD_TITLE;a.style.opacity="0";a.style.top="-200px";download.isShow=!1}},lock:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;a.stopPropagation?a.stopPropagation():
a.returnValue=!1;a.cancelBubble=!0}},share={setUrl:function(a,b,c){c=c||1;if(document.getElementById("shareBox"))document.getElementById("shareFB").href="https://facebook.com/sharer.php?u="+encodeURIComponent(b+"#"+c),document.getElementById("shareTwitter").href="https://twitter.com/intent/tweet?url="+encodeURIComponent(b+"#"+c)+"&text="+a,document.getElementById("shareBlogger").href="http://blogger.com/blog-this.g?u="+encodeURIComponent(b+"#"+c)+"&t="+a+"&n=publication",document.getElementById("shareEmail").href=
"mailto:?subject="+a+"&body="+encodeURIComponent(b+"#"+c),document.getElementById("shareLinked").href="http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(b+"#"+c)+"&title="+a,document.getElementById("shareTumblr").href="http://www.tumblr.com/share/link?url="+encodeURIComponent(b+"#"+c)+"&name="+a+"&description=",document.getElementById("shareGoogle").href="https://plus.google.com/share?url="+encodeURIComponent(b+"#"+c),document.getElementById("shareVk").href="http://vk.com/share.php?url="+
encodeURIComponent(b+"#"+c)+"&title="+a+"&image="+encodeURIComponent(window.location.href.substr(0,window.location.href.indexOf("index.html"))+COVER_SRC)+"&description="}},pageInit=function(){function a(){loadPage(pager.checkHashName(window.location.hash))}INNER={};a();setEvent(window,"hashchange",a);document.getElementById("zoomIn")&&setEvent(document.getElementById("zoomIn"),"click",function(){zoomBook("in")});document.getElementById("zoomOut")&&setEvent(document.getElementById("zoomOut"),"click",
function(){zoomBook("out")});var b=function(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1;a.stopPropagation?a.stopPropagation():a.returnValue=!1;"toc"!=b&&("left"==b?INNER.leftTool&&loadPage(pager.checkLinkName(INNER.leftTool.src.split(".")[0])):"right"==b&&INNER.rightTool&&loadPage(pager.checkLinkName(INNER.rightTool.src.split(".")[0])));return!1};document.getElementById("tocBtn")&&setEvent(document.getElementById("tocBtn"),"click",toc.action);document.getElementById("navigationBoxLeftTool")&&
setEvent(document.getElementById("navigationBoxLeftTool"),"click",function(a){b(a,"left")});document.getElementById("navigationBoxRightTool")&&setEvent(document.getElementById("navigationBoxRightTool"),"click",function(a){b(a,"right")});document.getElementById("thumbBtn")&&setEvent(document.getElementById("thumbBtn"),"click",thumbnail.action);document.getElementById("infoBtn")&&setEvent(document.getElementById("infoBtn"),"click",about.action);properties.isToc&&toc.create(tocList,document.getElementById("tocBox"));
properties.isThumbnail&&thumbnail.create(pageList,document.getElementById("thumbLine"));properties.isShare&&share.setUrl(document.title,FULL_SRC)};function zoomBook(a){switch(a){case "in":book.setScale(book.step);break;case "out":book.setScale(-book.step)}content.draw()}
var content={init:function(){if(!book.init&&(book.getSize(),book.w>workspace.w-100))book.scale=(workspace.w-100)/book.w,book.init=!0;for(var a=document.getElementsByTagName("meta"),b=0;b<a.length;b++){if("keywords"==a[b].name)a[b].content=INNER.keywords;if("description"==a[b].name)a[b].content=INNER.title}if(INNER.currentPage)browser.isIE?document.getElementById("currentPage").value=INNER.currentPage.num:document.getElementById("currentPage").placeholder=INNER.currentPage.num;INNER.rightTool?(document.getElementById("navigationBoxRightTool").title=
"./toc.html"!=INNER.rightTool.src?INNER.leftTool.innerText?LOCALS.PAGE+" "+INNER.rightTool.innerText:"":"",document.getElementById("navigationBoxRightTool").style.opacity="toc.html"!=INNER.rightTool.src?1:0.5):(document.getElementById("navigationBoxRightTool").title="",document.getElementById("navigationBoxRightTool").style.opacity=0.5);INNER.leftTool?(document.getElementById("navigationBoxLeftTool").title="./toc.html"!=INNER.leftTool.src?INNER.leftTool.innerText?LOCALS.PAGE+" "+INNER.leftTool.innerText:
"":"",document.getElementById("navigationBoxLeftTool").style.opacity="toc.html"!=INNER.leftTool.src?1:0.5):(document.getElementById("navigationBoxLeftTool").title="",document.getElementById("navigationBoxLeftTool").style.opacity=0.5);properties.isDownload&&download.createList(INNER.download);properties.isShare&&share.setUrl(document.title,FULL_SRC,INNER.currentPage.num);CUSTOM_ID=0;content.draw()},clear:function(){document.getElementById("Page")&&document.getElementById("Page").parentNode.removeChild(document.getElementById("Page"));
var a=document.createElement("div");a.id="Page";a.className="page";document.getElementById("Book").appendChild(a)},draw:function(){content.clear();book.draw();page.draw();for(var a=document.getElementById("Page"),b=1;INNER.content[b];)this.createDiv(INNER.content[b],a),b++},createDiv:function(a,b){var c=document.createElement("div");if(a.className){c.className=a.className;if(a.top)c.style.top=a.top*page.scale+"px";if(a.left)c.style.left=a.left*page.scale+"px";if(a.right)c.style.right=a.right*page.scale+
"px";if(a.width)c.style.width=a.width*page.scale+"px";if(a.height)c.style.height=a.height*page.scale+"px";b.appendChild(c);if(a.content)if(a.content[0])for(var d=0;a.content[d];)content.createElement(a.content[d],c),d++;else content.createElement(a.content,c);if(a.Transform)c.style[browser.prefix+"TransformOrigin"]="0% 0%",c.style[browser.prefix+"Transform"]=a.Transform}delete c},createElement:function(a,b){if(a.tag){var c=document.createElement(a.tag);if(a.className)c.className=a.className;if(a.top)c.style.top=
a.top*page.scale+"px";if(a.left)c.style.left=a.left*page.scale+"px";if(a.right)c.style.right=a.right*page.scale+"px";if(a.width)c.style.width=a.width*page.scale+"px";if(a.height)c.style.height=a.height*page.scale+"px";if(a.text)"firefox"==browser.name?c.innerHTML=a.text:c.innerText=a.text;if(a.fontWeight)c.style.fontWeight=a.fontWeight;if(a.fontStyle)c.style.fontStyle=a.fontStyle;if(a.src)c.style.src=a.src;if(a.zIndex)c.style.zIndex=a.zIndex;if(a.backgroundColor)c.style.backgroundColor=a.backgroundColor;
b.appendChild(c);if("a"==a.tag){c.setAttribute("href",a.href?a.href:"");if("False"==a.useGlobal){c.id="custom"+CUSTOM_ID;var d=document.createElement("style");d.type="text/css";var e=document.createTextNode("#custom"+CUSTOM_ID+":hover{background-color:"+a.hightLightColor+"}"),h=document.getElementsByTagName("head")[0];d.appendChild(e);h.appendChild(d);CUSTOM_ID++;c.setAttribute("target",a.target)}else c.setAttribute("target",LINK);setEvent(c,"click",eventLock)}if("img"==a.tag&&(c.setAttribute("alt",
a.alt?a.alt:""),c.setAttribute("src",a.src?a.type?PAGES_CONTENT_FOLDER+"/"+a.src:a.src:""),a.type)){c.style.cursor="pointer";var f=a.width/a.height;setEvent(c,"click",function(){video.play(a.type,a.id,f)})}if("span"==a.tag){a.content&&content.createElement(a.content,c);d=c.currentStyle||window.getComputedStyle(c,null);(scale=c.style.fontSize?Math.abs(c.style.fontSize.replace("px",""))*page.scale:Math.abs(d.fontSize.replace("px",""))*page.scale)||(scale=11);c.style.fontSize=scale+"px";if(c.offsetWidth>
b.offsetWidth)for(;c.offsetWidth>b.offsetWidth&&1<scale;)scale-=1,c.style.fontSize=scale+"px";else if(c.offsetWidth<b.offsetWidth){for(d=0;c.offsetWidth<b.offsetWidth&&15>d;)scale+=1,d++,c.style.fontSize=scale+"px";if(c.offsetWidth>b.offsetWidth)scale-=1,c.style.fontSize=scale+"px"}d=(b.offsetHeight-c.offsetHeight)/2;d=d.toFixed();if(0<d)c.style.padding=d+"px 0px";c.style.top=(b.offsetHeight-c.offsetHeight)/2+"px"}if(a.content&&"span"!=a.tag)if(a.content[0])for(d=0;a.content[d];)content.createElement(a.content[d],
c),d++;else content.createElement(a.content,c);delete c}}};
function loadPage(a){if(a){var a=document.getElementsByTagName("head")[0],b=document.createElement("script");b.type="text/javascript";b.src="./javascript/"+pageList[pager.currentIndex].item+".js";a.appendChild(b);a=window.location.hash.substr(1)!=pageList[pager.currentIndex].title?pageList[pager.currentIndex].title:window.location.hash;IFRAME_AT_PUBL_COM&&XD.postMessage(XD.serialize({hash:a}),IFRAME_AT_PUBL_COM);window.location.hash=a;thumbnail.markCurrent(1,pageList[pager.currentIndex].item);if(a=
document.getElementById("FlashLink"))a.href=PUBL?"undefined"!=typeof window.parent?window.parent.location.href:FULL_SRC+window.location.hash:FULL_SRC+window.location.hash}}function pageContentLoad(a){INNER=a;content.init()}
var thumbnail={currentId:pageList[1].item,currentLeft:0,currentWidth:0,loadNum:30,isShow:!1,step:200,el:{},action:function(){if(document.getElementById("thumbBox")){var a=thumbnail.isShow?0:-100;browser.supportHTML5?document.getElementById("thumbBox").style[browser.prefix+"Transform"]="translateY("+a+"px)":document.getElementById("thumbBox").style.bottom=-100-a+"px";thumbnail.isShow=thumbnail.isShow?!1:!0}},create:function(a,b){function c(a,b){var c=document.createElement("li");c.title=LOCALS.PAGE+
" "+a.title;c.id=a.item;b.appendChild(c);setEvent(c,"click",function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;a.stopPropagation?a.stopPropagation():a.returnValue=!1;a=a||window.event;a=a.target||a.srcElement;loadPage(pager.checkLinkName(a.id?a.id:a.parentNode.id?a.parentNode.id:pageList[1].item));return!1});delete c}if(!browser.supportHTML5){var d=document.createElement("div");d.style.width="30px";d.style.height="30px";d.style.background="url(./style/thumbnails.png) no-repeat 50% 50%";
document.getElementById("thumbBtn").appendChild(d)}var e=document.createElement("div");e.width=workspace.w-60+"px";e.id="thumbContent";e.className="thumbContent";b.appendChild(e);d=document.createElement("UL");d.id="ThumbUl";e.appendChild(d);thumbnail.el=d;if(RTL)for(e=a.length-1;0<e;)c(a[e],d),e--;else for(e=1;a[e];)c(a[e],d),e++;d.style.width=84*a.length+"px";d.onload=thumbnail.markCurrent();workspace.addListener(thumbnail.checkSize)},markCurrent:function(a,b){b=void 0==b?pager.currentId:b;switch(void 0==
a?0:a){case 0:if(document.getElementById(this.currentId))document.getElementById(this.currentId).className="selected";break;case 1:if(document.getElementById(this.currentId))document.getElementById(this.currentId).className="selector";if(document.getElementById(b))document.getElementById(b).className="selected";this.currentId=b;break;default:if(document.getElementById(this.currentId))document.getElementById(this.currentId).className="selected"}this.scrollCurrent()},setBg:function(){var a=this.el,
b=(workspace.w/84).toFixed(),c=pageList.length<b?pageList.length:b;if("undefined"!=typeof a.childNodes){var d=function(a){if("undefined"!=typeof a)if(browser.supportHTML5){if(!a.hasAttribute("loaded"))a.style.background="url("+getSrcByTmbName(a.id)+") no-repeat 50% 50%",a.style.backgroundSize="contain",a.setAttribute("loaded","true")}else if(!a.loaded){var b=document.createElement("img");b.style.width="80px";b.src=getSrcByTmbName(a.id);a.appendChild(b);a.loaded=!0}};if(0<=this.currentLeft)for(var b=
0,e={};b<c;)e=a.childNodes[b],d(e),b++;else{c=(-this.currentLeft/84).toFixed();e={};for(b=1*c+1*b<pageList.length-1?1*c+1*b:pageList.length-1;b>c-1;)e=a.childNodes[b],d(e),b--}}},scrollCurrent:function(){var a=this.el,b=toc.isShow?workspace.w-200:workspace.w,c=a.offsetWidth,d=RTL?b/2-84*(pageList.length-1-pager.currentIndex):b/2-84*pager.currentIndex;if("undefined"!=typeof a.style&&b<c)0<d?d=0:d<b-c&&(d=b-c),this.currentLeft=d,a.style.left=this.currentLeft+"px";this.setBg()},checkSize:function(){var a=
document.getElementById("thumbContent");this.currentWidth=toc.isShow?workspace.w-260:workspace.w-60;a.style.width=this.currentWidth+"px"},resize:function(){var a=document.getElementById("thumbContent");toc.isShow?(this.currentWidth=workspace.w-60,this.currentLeft=0):(this.currentWidth=workspace.w-260,this.currentLeft=200);a.style.left=this.currentLeft+"px";a.style.width=this.currentWidth+"px"},scrollLeft:function(){var a=thumbnail.el;this.currentLeft=0>a.offsetLeft?a.offsetLeft+thumbnail.step:0;a.style.left=
this.currentLeft+"px";this.setBg()},scrollRight:function(){var a=thumbnail.el;this.currentLeft=a.offsetLeft>workspace.w-a.offsetWidth?a.offsetLeft-thumbnail.step:workspace.w-a.offsetWidth;a.style.left=this.currentLeft+"px";this.setBg()}},toc={isShow:!1,step:50,action:function(){if(document.getElementById("tocBox")){var a=toc.isShow?0:200,b={};if(browser.supportHTML5)document.getElementById("tocBox").style[browser.prefix+"Transform"]="translateX("+a+"px)",document.getElementById("tocBtn").style[browser.prefix+
"Transform"]="translateX("+a+"px)",properties.isDownload&&(document.getElementById("downloadBtn").style[browser.prefix+"Transform"]="translateX("+a+"px)"),document.getElementById("Navigation").style[browser.prefix+"Transform"]="translateX("+a/2+"px)",properties.isThumbnail&&(document.getElementById("thumbBtn").style[browser.prefix+"Transform"]="translateX("+a+"px)",document.getElementById("thumbLeftTool").style[browser.prefix+"Transform"]="translateX("+a+"px)");else{document.getElementById("tocBtn").style.left=
a+"px";document.getElementById("tocBox").style.left=a-200+"px";if(properties.isDownload)properties.isToc?document.getElementById("downloadBtn").style.left=a+40+"px":document.getElementById("downloadBtn").style.left=a+"px";document.getElementById("Navigation").style.left=a/2+"px";if(properties.isThumbnail)document.getElementById("thumbBtn").style.left=a+"px",document.getElementById("thumbLeftTool").style.left=a+"px"}"firefox"==browser.name||"ie"==browser.name?document.getElementById("zoomBox").style.left=
a+"px":document.getElementById("zoomBox").style[browser.prefix+"Transform"]="translateX("+a+"px)";b=document.getElementById("Publication");b.style[browser.prefix+"TransitionDuration"]=TRANSITION_TIME+"ms";b.style[browser.prefix+"Transform"]=200>workspace.w-book.w?"translateX("+a+"px)":"translateX("+a/2+"px)";window.setTimeout(function(){b.style[browser.prefix+"TransitionDuration"]="0ms"},TRANSITION_TIME);thumbnail.resize();toc.isShow=toc.isShow?!1:!0}},create:function(a,b){function c(a,b){var g=document.createElement(a.tag);
if(a.className)g.className=a.className;b.appendChild(g);if("a"==a.tag){if(a.text)g.innerHTML=a.text;if(a.href)g.href=a.href;setEvent(g,"click",e)}if(a.content)if(a.content[0])for(var f=0;a.content[f];)c(a.content[f],g),f++;else"ul"==a.content.tag?d(a.content,g):c(a.content,g);delete g}function d(a,b){var d=document.createElement(a.tag);if(a.text)d.textContent=a.text;d.id="tocUL";if(a.className)d.className=a.className;b.appendChild(d);for(var e=1;a.content[e];)c(a.content[e],d),e++;delete d}var e=
function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;a.stopPropagation?a.stopPropagation():a.returnValue=!1;var a=a||window.event,a=a.target||a.srcElement,b=a.href?a.href:a.parentNode.href;if("png"==b.split("/")[b.split("/").length-1].split(".")[1])b=a.parentNode.href;b=b.split("/")[b.split("/").length-1].split(".")[0];loadPage(pager.checkLinkName(b));return!1};b.style.height=workspace.h+"px";var h=document.createElement("div");h.style.height=workspace.h-90+"px";h.id="tocContent";h.className=
"tocContent";b.appendChild(h);var f=document.createElement("div");f.id="tocNavTop";f.className="tocNavTop";b.appendChild(f);setEvent(f,"click",toc.scrollDown);f=document.createElement("div");f.id="tocNavBottom";f.className="tocNavBottom";b.appendChild(f);setEvent(f,"click",toc.scrollUp);f=null;a[0]&&d(a[0],h);workspace.addListener(toc.checkSize)},checkSize:function(){var a=document.getElementById("tocBox");a.style.height=workspace.h+"px";a=document.getElementById("tocContent");a.style.height=workspace.h-
30+"px"},scrollUp:function(){var a=document.getElementById("tocUL").offsetTop;if(-a+workspace.h-30-toc.step<=document.getElementById("tocUL").offsetHeight)document.getElementById("tocUL").style.top=a-toc.step+"px"},scrollDown:function(){var a=document.getElementById("tocUL").offsetTop;if(0>=a+toc.step)document.getElementById("tocUL").style.top=a+toc.step+"px"}},eventLock=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;a.stopPropagation?a.stopPropagation():a.returnValue=!1;var a=a||
window.event,a=a.target||a.srcElement,b=a.href?a.href:a.parentNode.href;if(-1==b.indexOf("basic-html"))return"_self"==a.target?window.location=b:window.open(b),!0;if("png"==b.split("/")[b.split("/").length-1].split(".")[1])b=a.parentNode.href;b=b.split("/")[b.split("/").length-1].split(".")[0];loadPage(pager.checkLinkName(b));return!1};
