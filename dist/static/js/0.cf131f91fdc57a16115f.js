webpackJsonp([0],{G66W:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lC5x"),r=n.n(a),s=n("J0Oq"),i=n.n(s),o=n("GjKx"),c={inject:["reload"],name:"FirstLoad",data:function(){return{petName:"",introduction:""}},computed:{params:function(){return{petName:this.petName,introduction:this.introduction,username:this.$route.query.username}}},methods:{submit:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.addUserInfo(t.params);case 2:"0"==e.sent.error_info&&t.reload();case 4:case"end":return e.stop()}},e,t)}))()}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"firstLoad"},[n("div",{staticClass:"title"},[t._v("请先设置您的昵称和个人简介")]),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{label:"昵称",maxlength:"10","show-word-limit":"",placeholder:"请输入您的昵称"},model:{value:t.petName,callback:function(e){t.petName=e},expression:"petName"}}),t._v(" "),n("van-field",{staticClass:"introduce",attrs:{rows:"2",type:"textarea",autosize:"",label:"个人简介",maxlength:"50",placeholder:"请输入您的个人简介","show-word-limit":""},model:{value:t.introduction,callback:function(e){t.introduction=e},expression:"introduction"}})],1),t._v(" "),n("van-button",{staticClass:"submit",attrs:{type:"info"},on:{click:t.submit}},[t._v("提交")])],1)])},staticRenderFns:[]};var l=n("C7Lr")(c,u,!1,function(t){n("Nt7/")},"data-v-85e5399e",null).exports,d=n("iPkp"),m={name:"Article",data:function(){return{result:[],username:"",article:"123123",noArticle:!1,currentPage:1,total_article:0,totalArticle:[]}},methods:{getArticle:function(){var t=this;return i()(r.a.mark(function e(){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getArticles({username:t.username});case 2:"0"==(n=e.sent).error_info?(a=[],n.datas.article.forEach(function(t){var e={title:t.title||"--",summary:t.summary||"--",type:t.type||"--",timestamp:d.a.getDateTime(t.timestamp)||"--",content:t.content||"--"};a.push(e)}),t.totalArticle=a,t.total_article=t.totalArticle.length,t.result=t.totalArticle.slice(3*(t.currentPage-1),3*t.currentPage)):t.noArticle=!0;case 4:case"end":return e.stop()}},e,t)}))()},publish:function(t){this.$router.push({path:"/home/public",query:{username:t}})},goToDetail:function(t){this.$router.push({path:"/home/detail",query:{username:this.username,title:t}})},paginationChange:function(){this.result=this.totalArticle.slice(3*(this.currentPage-1),3*this.currentPage)}},created:function(){this.username=sessionStorage.getItem("username"),this.getArticle()},activated:function(){this.getArticle()}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Flex",[n("FlexItem",{staticClass:"article"},[n("div",{staticClass:"publish"},[n("van-button",{staticClass:"public",attrs:{size:"small",color:"#696969",type:"info"},on:{click:function(e){return e.stopPropagation(),t.publish(t.username)}}},[t._v("+发布文章")])],1),t._v(" "),n("ul",{staticClass:"news_list"},t._l(t.result,function(e,a){return n("li",{key:a,on:{click:function(n){return t.goToDetail(e.title)}}},[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(e.summary))]),t._v(" "),n("p",{staticClass:"tips"},[n("span",{staticClass:"left"},[t._v(t._s(e.type))])]),t._v(" "),n("p",{staticClass:"tips"},[n("span",{staticClass:"time"},[t._v(t._s(e.timestamp))])])])}),0),t._v(" "),t.result.length?n("van-pagination",{attrs:{"total-items":t.total_article,"items-per-page":3},on:{change:t.paginationChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1)],1)},staticRenderFns:[]};var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contect"},[e("h3",[this._v("感谢支持")]),this._v("\n    联系方式:"),e("br"),this._v("QQ：413755962"),e("br"),this._v("微信:Pendulumhan"),e("br"),this._v("欢迎交流！\n")])}]};var p={name:"Tab",components:{Article:n("C7Lr")(m,f,!1,function(t){n("MTl6")},"data-v-5c3ee03a",null).exports,ContectUs:n("C7Lr")({name:"ContectUs"},v,!1,function(t){n("TMkT")},"data-v-6488ddc3",null).exports},data:function(){return{active:0}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-tabs",{staticClass:".tab_title tab-title",model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"我的随笔"}},[n("Article")],1),t._v(" "),n("van-tab",{attrs:{title:"文章分类"}}),t._v(" "),n("van-tab",{attrs:{title:"联系我们"}},[n("contect-us")],1)],1)],1)},staticRenderFns:[]};var _={inject:["reload"],name:"Home",components:{FirstLoad:l,Tab:n("C7Lr")(p,h,!1,function(t){n("x/7M")},"data-v-1d61fb61",null).exports},data:function(){return{firstLoad:!1,petName:"",introduction:"",imgUrl:"",uploadControl:!0,fileList:[],username:"",submitBtn:"上传头像"}},computed:{submitBtnChange:function(){return this.submitBtn}},methods:{getUserInfo:function(){var t=this;return i()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getUserInfo({username:t.username});case 2:n=e.sent,console.log(n),"0"==n.error_info?(t.petName=n.datas.petName,t.introduction=n.datas.introduction,n.datas.imgUrl&&(t.imgUrl=n.datas.imgUrl,t.uploadControl=!1),t.firstLoad=!1):t.firstLoad=!0;case 5:case"end":return e.stop()}},e,t)}))()},afterRead:function(t){var e=this;return i()(r.a.mark(function n(){var a,s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.content,t.status="uploading",t.message="上传中",n.next=5,o.a.addImg({username:e.username,imgUrl:a});case 5:(s=n.sent)&&"0"==s.error_info?(e.submitBtn="确认上传",t.status="done"):(e.submitBtn="重新上传",t.status="failed",t.message="上传失败");case 7:case"end":return n.stop()}},n,e)}))()},submit:function(t){console.log(t),"上传头像"==t?document.querySelector(".van-uploader__input").click():"重新上传"==t?(console.log(document.querySelector(".van-uploader__preview-delete").click()),setTimeout(function(){document.querySelector(".van-uploader__input").click()},50)):this.reload()},logout:function(){var t=this;this.$dialog.confirm({title:"您确定要退出登录吗？"}).then(function(){t.$router.push("/")}).catch(function(){})},changeInfo:function(){var t=this;this.$dialog.confirm({title:"点击确认前往修改个人信息"}).then(function(){t.$router.push("/changeInfo")}).catch(function(){})},onOversize:function(t){this.$toast("图片不能超过64kb")}},created:function(){this.username=this.$route.query.username,this.getUserInfo()},activated:function(){this.username=this.$route.query.username,this.getUserInfo()}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",[t.firstLoad?t._e():n("HeaderBar",{attrs:{title:"个人主页"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.firstLoad,expression:"!firstLoad"}],staticClass:"userInfo"},[t.firstLoad?n("FirstLoad"):t._e(),t._v(" "),t.uploadControl?n("div",[n("van-uploader",{staticClass:"uploader",attrs:{afterRead:t.afterRead,"max-count":1,"max-size":65536},on:{oversize:t.onOversize},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),t._v(" "),n("van-button",{staticClass:"submit",attrs:{type:"info"},on:{click:function(e){return t.submit(t.submitBtnChange)}}},[t._v(t._s(t.submitBtnChange))])],1):t._e(),t._v(" "),t.uploadControl?t._e():n("div",[n("img",{staticClass:"photo",attrs:{src:t.imgUrl,alt:""}})]),t._v(" "),n("div",{staticClass:"personal"},[n("p",[t._v("昵称:"+t._s(t.petName))]),t._v(" "),n("span",{staticClass:"introduce"},[t._v("个人简介:"+t._s(this.introduction))])]),t._v(" "),n("div",{staticClass:"settings"},[n("p",{on:{click:t.logout}},[t._v("退出登录")]),t._v(" "),n("p",{on:{click:t.changeInfo}},[t._v("修改信息")])])],1),t._v(" "),n("van-cell",[t.firstLoad?t._e():n("Tab")],1)],1)},staticRenderFns:[]};var b=n("C7Lr")(_,g,!1,function(t){n("ZA67")},"data-v-31fa2ea7",null);e.default=b.exports},MTl6:function(t,e){},"Nt7/":function(t,e){},TMkT:function(t,e){},ZA67:function(t,e){},iPkp:function(t,e,n){"use strict";var a=n("AA3o"),r=n.n(a),s=n("xSur"),i=n.n(s),o=function(){function t(){r()(this,t)}return i()(t,[{key:"getDateTime",value:function(t){var e=new Date,n=new Date(parseInt(t)),a=e.getFullYear(),r=e.getMonth()+1,s=e.getDate(),i=n.getFullYear(),o=n.getMonth()+1,c=n.getDate(),u=n.getHours(),l=n.getMinutes();return l=l>=10?l:"0"+l,a+r+s==i+o+c?+u+":"+l:a==i?o+"/"+c+" "+u+":"+l:i+"/"+o+"/"+c}}]),t}();e.a=new o},"x/7M":function(t,e){}});
//# sourceMappingURL=0.cf131f91fdc57a16115f.js.map