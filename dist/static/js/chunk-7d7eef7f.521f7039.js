(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d7eef7f","chunk-42642b5f"],{"0055":function(t,e,n){t.exports=n.p+"static/img/icon_C_checked.f1fbad0f.png"},"01dc":function(t,e,n){},"04d6":function(t,e,n){"use strict";n("d1c3")},"1f33":function(t,e,n){t.exports=n.p+"static/img/uncheck_n.fe231d40.png"},"23bd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:{height:t.swipeHeight+"px"},attrs:{id:"componentBody"}},[o("div",{staticClass:"drawerBody"},[o("van-sticky",{staticClass:"top"},[o("img",{staticClass:"top-img",attrs:{src:n("a85a")}}),t._l(t.imgIcon,(function(e,n){return o("div",{key:n,staticClass:"top-block",class:{"z-index":e.zIndex}},[o("div",[o("img",{staticClass:"number-img",attrs:{src:e.fireImgSrc}}),o("span",{staticClass:"number-text"},[t._v(t._s(e.number))])]),o("img",{staticClass:"top-point",attrs:{src:e.src,alt:""},on:{click:function(){return t.getInformation(e,n)}}})])}))],2),o("div",{staticClass:"bodyDialog divScroll"},[o("Chatbox",{attrs:{msgList:t.msgList,allPhotoIscheck:t.allPhotoIscheck}})],1),o("div",{staticClass:"footer"},[o("div",{staticClass:"common-question"},t._l(t.commonQuestion,(function(e,n){return o("a",{key:n,on:{click:function(e){return t.quickClick()}}},[t._v(" "+t._s(e)+" ")])})),0),o("div",{staticClass:"bodyInput"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputContent,expression:"inputContent"},{name:"show",rawName:"v-show",value:!t.textSwitch,expression:"!textSwitch"}],staticClass:"inputArea",staticStyle:{"-webkit-user-select":"auto"},attrs:{contenteditable:"true"},domProps:{value:t.inputContent},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.pressEnter(e)},input:function(e){e.target.composing||(t.inputContent=e.target.value)}}}),t._v(" "),o("div",{staticClass:"checkphotos"},[o("img",{attrs:{src:n("79c7"),alt:"拍照打卡"}}),o("Photograph",{attrs:{msgList:t.msgList},on:{photoMsg:t.photoMsg}})],1)])])],1),t.LoadingShow?o("Loading"):t._e(),o("Popupinfo",{attrs:{msgList:t.msgList,swipeToNum:t.swipeToNum,allPhotoIscheck:t.allPhotoIscheck,imgIcon:t.imgIcon},on:{photoMsg:t.photoMsg,swipeLoop:t.swipeLoop}})],1)},i=[],s=(n("b130"),n("ecb4"),n("2eeb"),n("513c"),n("fe8a"),n("e18c"),n("e35a"),n("f4e3"),n("5e9f"),n("d211"));function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t){if(Array.isArray(t))return c(t)}n("f3dd"),n("0a51"),n("9b11"),n("98e0"),n("96db"),n("af86");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("77ad"),n("053b"),n("1c2e8");function u(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t){return r(t)||a(t)||u(t)||l()}n("2388");var f=n("dc55");function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}var d=n("9f3a"),g=n("751a"),m=n("7c15"),A=n("ed08"),y=n("e319"),k=n("3a5e"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chatbox"},[t._l(t.msgList,(function(e,o){return n("div",{key:o},["robot"===e.owner?n("div",{staticClass:"msg-box"},[t._m(0,!0),n("div",{staticClass:"robotMsg",class:{singleImg:1===e.msg.length&&"image"===e.msg[0].type}},[t._l(e.msg,(function(e,o){return n("div",{key:o},["text"===e.type?n("div",[t._v(" "+t._s(e.content)),n("br"),402===Number(e.code)||405===Number(e.code)?n("span",{staticClass:"hot-issue reclock-button"},[t._v(" 重新打卡 "),n("Photograph",{attrs:{msgList:t.msgList},on:{photoMsgClose:t.photoMsg}})],1):t._e(),200!==Number(e.code)||t.allPhotoIscheck?t._e():n("span",{staticClass:"hot-issue reclock-button"},[t._v(" 继续打卡 "),n("Photograph",{attrs:{msgList:t.msgList},on:{photoMsgClose:t.photoMsg}})],1),200===Number(e.code)&&t.allPhotoIscheck?n("span",{staticClass:"hot-issue reclock-button",on:{click:function(e){return t.hrefRobotTestBtn()}}},[t._v(" 立即查看「记忆界面」 ")]):t._e()]):t._e(),"image"===e.type?n("img",{attrs:{src:e.content,alt:""},on:{click:function(n){return t.showImage(e.content)}}}):t._e()])})),e.init?n("div",[n("span",{staticClass:"hot-issue",on:{click:function(e){return t.quickClick()}}},[t._v("如何打卡?")]),n("span",{staticClass:"hot-issue",on:{click:function(e){return t.quickClick()}}},[t._v("打卡地图")])]):t._e()],2)]):t._e(),"user"===e.type?n("div",{staticClass:"msg-box users-box"},[t._m(1,!0),n("div",{staticClass:"userMsg",class:{userMsg_width:void 0!=e.imgUrl}},[void 0!=e.oldform?n("span",[t._v(t._s(e.oldform.question))]):t._e(),void 0!=e.imgUrl?n("div",{staticClass:"preview"},[n("img",{attrs:{src:e.imgUrl,alt:"",width:"100%"},on:{click:function(n){return t.showImage(e.imgUrl)}}})]):t._e()])]):t._e()])})),n("van-popup",{staticClass:"picHolder",model:{value:t.showPic,callback:function(e){t.showPic=e},expression:"showPic"}},[n("van-image",{attrs:{width:"100%",src:t.picLink}})],1)],2)},b=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"robot-img"},[o("img",{attrs:{src:n("8422"),alt:"小天机器人"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"robot-img"},[o("img",{attrs:{src:n("6f8b"),alt:"用户头像"}})])}],C=(n("3298"),n("efd2")),I=n("85b7"),w={name:"Chatbox",components:{Photograph:I["default"]},props:{msgList:"",allPhotoIscheck:""},data:function(){return{showPic:!1,picLink:""}},methods:{quickClick:function(){var t=window.event,e={type:"user",oldform:{question:t.target.innerHTML,answer:"",source:""},updateold:!1};this.$parent.getAnswer(e),t.preventDefault()},showImage:function(t){Object(C["a"])([t])},photoMsg:function(t){this.msgList=h(this.msgList),this.$emit("photoMsgClose",this.msgList)},hrefRobotTestBtn:function(){this.$router.replace({path:"/result"})}}},S=w,x=(n("04d6"),n("c701")),L=Object(x["a"])(S,v,b,!1,null,"eb377df6",null),P=L.exports,B=function(){return n.e("chunk-65056dfc").then(n.bind(null,"d311"))},U=function(){return Promise.resolve().then(n.bind(null,"85b7"))},T={name:"RobotTestBtn",components:{Loading:k["a"],Chatbox:P,Popupinfo:B,Photograph:U},data:function(){return{inputContent:"",msgList:[],width:document.body.clientWidth,newform:{question:"",answer:"",source:""},phonenum:"",commonQuestion:y["b"],getCheckIconStatus:[],imgIcon:y["e"],pointInfo:y["f"],textSwitch:!1,timeOutEvent:0,count:10,countDownTimes:null,longPress:!1,base64ImgData:null,userId:localStorage.getItem("userId"),swipeToNum:0,allPhotoIscheck:!1,countInterval:6e4,timer:null,getRecorderTimer:null,setTalkTimer:null,swipeHeight:730,firekeys:["1","2","3","4"]}},mounted:function(){var t=this;void 0!==localStorage.getItem("userId")&&null!==localStorage.getItem("userId")||(this.userId=localStorage.setItem("userId",Object(A["a"])(32))),this.getuploadImgResults(),this.$nextTick((function(){t.swipeHeight=window.innerHeight}))},beforeDestroy:function(){this.endPoll()},methods:{startPoll:function(){this.getCount(),this.timer=setInterval(this.getCount,this.countInterval)},endPoll:function(){clearInterval(this.timer)},getCount:function(){var t=this,e=m["a"].port8085.getCount;Object(g["a"])(e).then((function(e){if(200===e.code&&void 0!==e.data){var n=e.data,o=[];t.firekeys.map((function(t){Object.keys(n).indexOf(t)>-1?o.push({num:n[t],src:"",key:t}):o.push({num:0,src:"",key:t})})),o=o.sort((function(t,e){return Number(t.num)-Number(e.num)})),o.map((function(t,e){t.src=y["c"][e]})),t.imgIcon.map((function(t,e){o.map((function(e){t.key===e.key&&(t.fireImgSrc=e.src,t.number=e.num)}))}))}})).catch((function(t){}))},getuploadImgResults:function(t){var e=this,n=m["a"].port8085.getuploadImgResult;this.userId=null===this.userId||void 0===this.userId?localStorage.getItem("userId"):this.userId;var o={userId:this.userId};this.$store.commit("setLoadingShow",!0),Object(g["a"])(n,o).then((function(t){e.$store.commit("setLoadingShow",!1),t&&t.data.length>0&&"object"===p(t.data[0])?(e.getCheckIconStatus=t.data,e.filterCheckIconStatus(e.getCheckIconStatus),e.getCount()):Object(f["a"])("打卡数据返回失败")})).catch((function(t){Object(f["a"])("打卡数据返回失败"),e.$store.commit("setLoadingShow",!1)}))},photoMsg:function(t){if(void 0!==t.step1&&t.step1)this.msgList=h(t.msgLists),this.$nextTick((function(){setTimeout((function(){var t=document.getElementsByClassName("divScroll");t[0].scrollTop=t[0].scrollHeight}),0)}));else{this.msgList=h(t);var e=!0;this.getuploadImgResults(e)}},swipeLoop:function(t){this.imgIcon=h(t)},filterCheckIconStatus:function(t){this.imgIcon.map((function(e,n){t.map((function(t,n){t.title===e.title&&(e.isCheck=t.isCheck,e.src=t.isCheck?e.checked:e.unchecked,e.popupinfoIconSrc=t.isCheck?e.popupinfoChecked:e.popupinfoUnchecked)}))})),this.imgIcon=h(this.imgIcon);var e=[];t.map((function(t){e.push(t.isCheck)})),e.includes(!1)||(this.allPhotoIscheck=!0)},showDrawer:function(){this.msgList=[];var t={owner:"robot",type:"text",init:!0,msg:[{type:"text",content:"您好，欢迎来到中国移动合作伙伴大会，我是智能机器人小天。快来跟我一起游览不大会吧～见到我的人行立牌就赶快拍照上次吧～"}]};this.msgList.push(t)},quickClick:function(t){var e=window.event,n=e.target.innerHTML&&""!==e.target.innerHTML?e.target.innerHTML:t,o={type:"user",oldform:{question:n,answer:"",source:""},updateold:!1};this.getAnswer(o),e.preventDefault()},getAnswer:function(t){var e=this,n={userId:this.userId,text:t.oldform.question},o=m["a"].port8085.sendTextUrl;this.msgList.push(t),this.$nextTick((function(){setTimeout((function(){var t=document.getElementsByClassName("divScroll");t[0].scrollTop=t[0].scrollHeight}),0)}));var i={idx:this.msgList.length-1,owner:"robot",msg:[{type:"text",content:""}]};this.inputContent="",this.$store.commit("setLoadingShow",!0),Object(g["a"])(o,n).then((function(t){t&&t.data&&"object"===p(t.data)&&1===t.data.length?(i.owner="robot",i.msg[0].content=t.data[0].content.replace(/\n\r/g,"<br/>").replace(/\n/g,"<br/>")):t&&t.data&&"object"===p(t.data)&&t.data.length>1&&(i.msg=[],i.msg=t.data),e.$nextTick((function(){t&&t.data&&t.data.length>0&&e.msgList.push(i),setTimeout((function(){var t=document.getElementsByClassName("divScroll");t[0].scrollTop=t[0].scrollHeight}),0)})),e.$store.commit("setLoadingShow",!1)})).catch((function(t){e.$store.commit("setLoadingShow",!1)}))},countDowns:function(){this.count=10,this.count--,this.count<=0&&!0===this.longPress&&(clearInterval(this.countDownTimes),this.$store.commit("setMaskShow",!1))},getInformation:function(t,e){this.quickClick(t.title),this.imgIcon.map((function(t){t.zIndex=!1})),this.imgIcon[e].zIndex=!0,this.swipeToNum=e,this.$store.commit("setToppPointmodelShow",!0)},pressEnter:function(t){if(!this.inputContent.match(/^[ ]*$/)){var e={type:"user",oldform:{question:this.inputContent,answer:"",source:""},updateold:!1};this.getAnswer(e)}t.preventDefault()}},computed:Object(s["a"])({robotId:function(){return this.$store.state.robotInfo.robotId},isAdd:function(){return!(this.newform.question&&this.newform.answer&&this.newform.source)}},Object(d["b"])({robotSkeleton:function(t){return t.app.robotSkeleton},talkText:function(t){return t.app.talkText},LoadingShow:function(t){return t.app.LoadingShow}})),created:function(){this.showDrawer(),this.startPoll()}},z=T,E=(n("eeb8"),Object(x["a"])(z,o,i,!1,null,"027306b9",null));e["default"]=E.exports},"2c5e":function(t,e,n){t.exports=n.p+"static/img/icon_C_unchecked.abc1139e.png"},3765:function(t,e,n){t.exports=n.p+"static/img/uncheck_c.2524b373.png"},"3a5e":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-loading",{staticClass:"loading",attrs:{type:"spinner",color:"#1989fa"}})},i=[],s={name:"Loading",data:function(){return{}},methods:{}},c=s,r=(n("53a2"),n("c701")),a=Object(r["a"])(c,o,i,!1,null,null,null);e["a"]=a.exports},"3b5b":function(t,e,n){},"3ec1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAVCAYAAABPPm7SAAABz0lEQVQ4jYWUP2sVQRTFf+eejYUJQkBQTCnpJSgGtLEIiFamsBITzEewEb+Agl9A0FTGSuxEFAIGQiohKAgqmEIEFRS0UKM2yszuvrd/nr6Bmb2cmZ353bM7Vz8OL4PoNDW1E8BHYAf1FhI4KLsbPWvCcQ17E/tsQ2+tjxxEe1I2Ct+QfUUOybGkpEc1l3vkHnUgDydxLOC43DhtDvv8KIoii9D14XrHh9RuAttIb5pikZEHG+RhFpjrb6ppYANxDng6MFFDQyYqtPkBYvSMnSFiC3up1usUzgDvEc9AB1rg6gUTEqvAJ+BhItgr+5bsqNzd7ZradL0kDmOvYu9LBCvAIeA0Yht42UpeI3DKx0FgJZm4WKlXEevAFvAFmC5l9X/USgcWC9nHKmkS2ESsgV4D8//xoQ6PJILJhroHcekfp3W0PEwlDz4D+5sTGn3aKB++FnK8Ak523h5PUOovEsH94QZjc+5S3E3X+bYcH8Z9+xH6OznupBS+gZJxD4DyZo0n+A1cRHwv64HjEY5lHL/axaV5dUtd9k85Lsix0akHXpN9XPZ6WTg66OE/cjzGcRTHvboQFfnGDfGeAwugWcQpYCaXPXgLPEHaaZkN/AXl7ju8SlzwKwAAAABJRU5ErkJggg=="},"53a2":function(t,e,n){"use strict";n("3b5b")},"619b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAABdUlEQVQ4ja2UzSvEYRDHP7/fPIXykl0KKxLlIjfr7OBOlDiwhyUuuElO2uTm4sjFyUGUq6IU/8I6K4W4eTkpenbn0WP77Wu+NT3PM/PMNPOd55ngcyBFGRhgDngAropdNYiUCjMEHOs6XGBLAC1ANhcoMEUDjQIXQLOeHz1bN3ADzJfLKA6cekEseoBXIATOgF7fIURCImQLCRMF+ildF5BwRPf9zh7a0lSSutYFRtKe3slqYGQwMLLs6cbd3pXWoaX0KTdNEeU2ApdAl6ebADotf47sNSVwGqgvxr52ykcDsA5shLmMRGZ13UckqftKZcbeMxiJeR1oA1ZKZBQF6xszgYStVTpGIW7Jfv+HQG+W7GfgBWivMYh9pE+u/edAusZA1vf3r+0BKf3p1eBLfXHtv0MkU2Xbrewgks233/6VPDL6KBcrzOgA2HYHf4x8A0vALbCrTz8KltxN4NA3Ro2RI+AEmATGdHwEwD1wrSPk448H8AOqeTHqH8W+2gAAAABJRU5ErkJggg=="},6626:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXCAYAAADUUxW8AAAB10lEQVQ4jY2Uv2sVQRSFv3PvohAlaYIIATEEIYJYaBGwsrawT6FR0ohFCNjkDwik0F7sxFIUKy2sRCzijzJoAmkDIthFIXmYJ7Mz+2Z29xEduLx5Z2Znzv323tXvuSXiUOunGBdBjtjqLhjuxLAYlsLtOu7vcP+K2+VCT+FUtdC+7SzoCXCz0KebiYKY9ErhlNGKrgEv4wFlNrraS0ZQ1ZbjuAK8QUz1dsENxEngoNQt5XAKt+e4TcW8nA6LaZmtBJdyT2FUijmvAnM91K2/Wgc+It4XtANFX24RL8lnBydwe43ZQkM95HwemB1zU8FxND0dgWoe2De5zcZcjJCCLOfURH7HtYsZ3FbCzcG2mpc+sm4d+81a1hejbfO9vuXsd5yMuASaCEWyC/wAzuSdx1JvJpPB9h/cXiTq/Af1EAPcfqYi8ce4H5WNkYElgC3NPsttYJGubcntUZvwGBeZ+tPYVbkx1hCToHv/yHcbeJYao3lYQ+A+4pxCI3RPiIccAnebBrGy0OU2lNkD3Ia95rAa7B3cNo/5GCjY+gQsFPov4BboVbk3204FnNY+1A9H4QvoNvCtm0kVLI+BsxMKH7QBPEQM2gzi5pJ2oestcAH43iefbgD+AjT0OIhTj7AJAAAAAElFTkSuQmCC"},"69a2":function(t,e,n){t.exports=n.p+"static/img/icon_B_checked.059c4e49.png"},"6f8b":function(t,e){t.exports="data:image/png;base64,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"},"751a":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));n("e18c");var o=n("82ae"),i=n.n(o),s=n("fed1"),c=n.n(s),r=function(){return{"Content-Type":"application/json"}},a=i.a.create({baseURL:"",crossDomain:!0,timeout:3e3});function u(t,e,n,o){return new Promise((function(n,i){a({method:"GET",url:t,params:e,headers:o||r()}).then((function(t){n(t.data)})).catch((function(t){i(t)}))}))}function l(t,e,n,o){return new Promise((function(i,s){a({method:"POST",url:t,params:e,data:n,headers:o||r()}).then((function(t){i(t.data)})).catch((function(t){s(t)}))}))}i.a.defaults.transformRequest=[function(t,e){if(!e["Content-Type"])return c.a.stringify(t);switch(e["Content-Type"].toLowerCase()){case"application/json;charset=utf-8":return JSON.stringify(t);case"multipart/formdata;charset=utf-8":return t;default:return c.a.stringify(t)}}]},"781f":function(t,e,n){t.exports=n.p+"static/img/c.b537c680.png"},"79c7":function(t,e,n){t.exports=n.p+"static/img/checkPhotos.0d170514.png"},"7c15":function(t,e,n){"use strict";var o="http://39.107.245.157:8081";e["a"]={port8085:{sendTextUrl:o+"/dp_xiaotian/inference/text",uploadImgUrl:o+"/dp_xiaotian/inference/pic",getuploadImgResult:o+"/dp_xiaotian/inference/getResult",getCheckIconStatus:o+"/getCheckIconStatus",getCount:o+"/dp_xiaotian/inference/getCount",getGift:o+"/dp_xiaotian/inference/getGift",saveUserInfo:o+"/dp_xiaotian/inference/saveUserInfo",recorderUpload:o+"/dp_xiaotian/inference/upload",recorderDownload:o+"/dp_xiaotian/inference/download"}}},"7ee2":function(t,e,n){t.exports=n.p+"static/img/n.d34d396c.png"},"7fe9":function(t,e,n){t.exports=n.p+"static/img/h.947167ae.png"},8422:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAMAAABGrfvuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////xhIp////xhIpvLy8xhHph9v4SWD5yJ24yJ55B1h3B1k3vT09R5n3h5s4Rtd3Ono7ufm7BlX2iWJ6Bta2yN+5SJ85SaL6Ovr8CSA5tHQ2yaG5yFy4R9q38zK2CF04iBy49rZ4yZ84////P/98M7N2c/O2t7e5+/y8+Li6PHx8srH1fn7/RhU2fDw9NLS3SeB5e/u8dfV4DBbsPP1+9vz893k8aK029X09IGazx9t5hxLqf717ABA1SRRrODy8xpo4OXw8j5muClVrx9n4/j4+Pj18rnI5Nfe7m2Lxv//9pOo1crV7SeP60e+7090vA1N2TpisQAtp73E2AVAtuHn9AFF2erz8wE50xdd4UdtuQAysOPh7/rw58LP6dDK03yh6fJ1E3eVzGWFxZ2w197W2KGtyuzo6OTc3dbQ1cbM4AVf3+7z+Of4/6u+4Mz19GV7ri1TpRJU3ero9R5j4wNP2xtKp+fj5vHu6new7wE7wQU2pAAx0xlYyiFf4Oft9htRsxFAp9Dc7jCT6Dqo7Fd6v0O27VNvrPPq4gdG1i9o5Ky20dTa55q+7+ucZSlMklXa83OHtEV14X2Qu8zT4xBKw7a90yNNoWaDv5O08/T88FiP79Th9O97K2in8I3C+H659UVkpHGPyJijxGGJ4xpe1EeB6Imex7jK86vF7y+o/CbK8yiT+SjW/CNm+sfBze5nC/Wwc1Oj8xtFmU7N8Vzm9WqT2IiXvujf2yuX0WaR/6TR636p/hE7/01b/ilW/yyD/l+AwzVx9Q4TZz6V+OfEreWykfRcAOWkePeGHbnj7FR92wcW+X94+TDx/mhu/JGcsiOD1vfZvOfTzeHCruaVU/WVPGGD05qL+BZ8xJGL+Rhsucq3xKd6khFE6H1dhjwAMmU5apSUtiBu6vhhxrgAAAAddFJOUwD89QPctuYUB29PeSRcATCGl6GuZj+/8ckdz9PSf5iSZgAACz5JREFUWMOlmAdcU/cW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"},"85b7":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{ref:"photoref",attrs:{type:"file",accept:"image/*",capture:"camera"},on:{change:function(e){return t.Photograph()}}})},i=[];n("513c"),n("e18c"),n("e35a"),n("1c2e8"),n("5e9f"),n("6a61");function s(t,e,n,o,i,s,c){try{var r=t[s](c),a=r.value}catch(u){return void n(u)}r.done?e(a):Promise.resolve(a).then(o,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function r(t){s(c,o,i,r,a,"next",t)}function a(t){s(c,o,i,r,a,"throw",t)}r(void 0)}))}}var r=n("7c15"),a=n("751a"),u={name:"Photograph",data:function(){return{msgLists:this.msgList,msgSrcs:this.msgSrc,base64ImgData:null,userId:localStorage.getItem("userId")}},props:["msgList","msgSrc"],computed:{robotId:function(){return this.$store.state.robotInfo.robotId},isAdd:function(){return!(this.newform.question&&this.newform.answer&&this.newform.source)}},methods:{Photograph:function(){var t=this;return c(regeneratorRuntime.mark((function e(){var n,o,i,s,c,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$refs.photoref.files[0],e.next=3,t.FileReader(n);case 3:t.base64ImgData=e.sent,o=new FormData,o.append("image",n),i={"Content-Type":"multipart/formdata;charset=utf-8","X-CSRF-Token":window.localStorage.getItem("token")},s="",c={userId:t.userId},a={},u={},void 0!==t.msgList?(t.$store.commit("setLoadingShow",!0),s=r["a"].port8085.uploadImgUrl,t.checkPhoto(s,c,o,i,a,u)):(s=r["a"].port8085.saveUserInfo,t.msgSrcs=t.base64ImgData,t.uploadUserInfo={msgPreviewSrc:t.base64ImgData,imgFile:n,takePhoto:!0},t.$emit("photoMsg",t.uploadUserInfo));case 12:case"end":return e.stop()}}),e)})))()},FileReader:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=new FileReader;return e.readAsDataURL(t),new Promise((function(t){return e.onloadend=function(){return t(e.result)}}))})),checkPhoto:function(t,e,n,o,i,s){var c=this;i={type:"user",imgUrl:this.base64ImgData,updateold:!1},this.msgLists.push(i),this.$emit("photoMsg",this.msgLists),s={idx:this.msgList.length-1,owner:"robot",msg:[{type:"text",content:"",code:null}]},Object(a["b"])(t,e,n,o).then((function(t){t&&t.msg.length>0&&(s.owner="robot",s.msg[0].code=Number(t.code),s.msg[0].content=t.msg.replace(/\n\r/g,"<br/>").replace(/\n/g,"<br/>")),c.$nextTick((function(){c.msgLists.push(s),c.$emit("photoMsg",c.msgLists),setTimeout((function(){var t=document.getElementsByClassName("divScroll");t[0].scrollTop=t[0].scrollHeight}),0)})),c.$store.commit("setLoadingShow",!1),c.$store.commit("setToppPointmodelShow",!1)})).catch((function(t){c.$store.commit("setLoadingShow",!1),c.$store.commit("setToppPointmodelShow",!1)}))}},components:{}},l=u,h=(n("99b2"),n("c701")),f=Object(h["a"])(l,o,i,!1,null,"4df308ce",null);e["default"]=f.exports},"8bdb":function(t,e,n){t.exports=n.p+"static/img/b.3229c500.png"},"99b2":function(t,e,n){"use strict";n("9f9d")},"9f9d":function(t,e,n){},a524:function(t,e,n){t.exports=n.p+"static/img/icon_H_unchecked.f3088af0.png"},a73c:function(t,e,n){t.exports=n.p+"static/img/uncheck_b.be031e7c.png"},a85a:function(t,e){t.exports="data:image/png;base64,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"},b728:function(t,e,n){t.exports=n.p+"static/img/check_n.b73f0828.png"},c3e9:function(t,e,n){t.exports=n.p+"static/img/check_b.62dcf9d1.png"},cd5c:function(t,e,n){t.exports=n.p+"static/img/check_h.1f51581c.png"},d1c3:function(t,e,n){},e091:function(t,e,n){t.exports=n.p+"static/img/uncheck_h.79a2ecc0.png"},e319:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a}));var o=[{key:"C",info:"1. 在大会现场找到中移九天公众号二维码并通过微信扫描，打开推送链接"},{key:"H",info:"2. 根据地图指引，在CHBN打卡点处拍照并上传，小天会自动判断是否打卡成功（每个类别有多个打卡点，只要打卡一次上传成功即可）"},{key:"B",info:"3. 集齐CHBN共4个类别的打卡点，获取小天为您准备的大会独家记忆"},{key:"N",info:"4. 凭本人记忆页面展示给工作人员，即可领取盲盒"}],i=["如何打卡","如何获取打卡地图","中国移动合作伙伴大会历史","大会规则","大会简介"],s=[{title:"C",unchecked:n("2c5e"),checked:n("0055"),popupinfoUnchecked:n("3765"),popupinfoChecked:n("e500"),swipeShowChecked:n("781f"),src:n("2c5e"),popupinfoIconSrc:n("3765"),popupinfoTitleEn:"Customer",popupinfoTitleCH:"个人市场",infoContent:"中国移动推出“五新”业务，通过AI赋能AR/VR、视频剪辑、智能通话，实现“新看法、新听法、新玩法、新拍法、新用法”，让广大个人用户“畅享”沉浸娱乐新体验",number:0,key:"1",fireImgSrc:n("6626")},{title:"H",unchecked:n("a524"),checked:n("e49c"),popupinfoUnchecked:n("e091"),popupinfoChecked:n("cd5c"),swipeShowChecked:n("7fe9"),src:n("a524"),popupinfoIconSrc:n("e091"),popupinfoTitleEn:"Home",popupinfoTitleCH:"家庭市场",infoContent:"中国移动推出智慧家庭、打造智慧社区，通过“极速+”“娱乐+”“智享+”“安全+”的“4+”智慧产品，让万亿家庭“畅美”智慧安居新生活",number:0,key:"2",fireImgSrc:n("6626")},{title:"B",unchecked:n("ff74"),checked:n("69a2"),popupinfoUnchecked:n("a73c"),popupinfoChecked:n("c3e9"),swipeShowChecked:n("8bdb"),src:n("ff74"),popupinfoIconSrc:n("a73c"),popupinfoTitleEn:"Business",popupinfoTitleCH:"政企市场",infoContent:"中国移动通过构建新一代泛在智能基础设施，推出5G+AI行业智能化解决方案，赋能千行百业数字化智能化转型",number:0,key:"3",fireImgSrc:n("6626")},{title:"N",unchecked:n("f7a3"),checked:n("f064"),popupinfoUnchecked:n("1f33"),popupinfoChecked:n("b728"),swipeShowChecked:n("7ee2"),src:n("f7a3"),popupinfoIconSrc:n("1f33"),popupinfoTitleEn:"New",popupinfoTitleCH:"新兴市场",infoContent:"中国移动通过布局AI领域的产业投资促进智慧金融等新技术应用拓展新空间，“畅达”新未来",number:0,key:"4",fireImgSrc:n("6626")}],c=[{type:"text",lable:"姓名",name:"username",message:"请输入姓名",value:null},{type:"text",lable:"公司",name:"company",message:"请输入公司",value:null},{type:"digit",lable:"手机",name:"phone",message:"请输入手机号",value:null}],r=["在大会现场找到中移九天公众号二维码并通过微信扫描打开推送链接","根据地图指引，在CHBN打卡点处拍照并上传，小天会自动判断是否打卡成功（每个类别有多个打卡点只要打卡一次上传成功即可）","集齐CHBN4个类别的打卡点，获取小天为您准备的大会“独家记忆","凭本人“独家记忆”展示给工作人员，即可领取盲盒"],a=[n("6626"),n("3ec1"),n("3ec1"),n("619b")]},e49c:function(t,e,n){t.exports=n.p+"static/img/icon_H_checked.442d93dc.png"},e500:function(t,e,n){t.exports=n.p+"static/img/check_c.7c418564.png"},ed08:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("e35a"),n("5e9f"),n("0d7a");function o(t){for(var e="0123456789qwertyuioplkjhgfdsazxcvbnm",n="",o=(new Date).getTime(),i=0;i<t;i++)n+=e.charAt(Math.ceil(1e8*Math.random())%e.length);return o+n}},eeb8:function(t,e,n){"use strict";n("01dc")},f064:function(t,e,n){t.exports=n.p+"static/img/icon_N_checked.fcd6b44a.png"},f7a3:function(t,e,n){t.exports=n.p+"static/img/icon_N_unchecked.37c6aa2f.png"},ff74:function(t,e,n){t.exports=n.p+"static/img/icon_B_unchecked.6522f866.png"}}]);