(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d1ed3b2"],{"1e63":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"container"},[s("div",{staticClass:"btns"},[s("p",{on:{click:e.cancel}},[e._v("取消")]),s("p",{on:{click:e.publish}},[e._v("发布")])]),s("van-field",{attrs:{rows:"3",autosize:"",type:"textarea",maxlength:"200",placeholder:"写下此刻的想法...","show-word-limit":""},on:{focus:e.handleFocus},model:{value:e.message,callback:function(s){e.message=s},expression:"message"}}),s("van-uploader",{attrs:{multiple:"","max-count":9,"before-delete":e.handleDelete},model:{value:e.fileList,callback:function(s){e.fileList=s},expression:"fileList"}}),s("van-popup",{style:{height:"29%"},attrs:{position:"bottom"},model:{value:e.show,callback:function(s){e.show=s},expression:"show"}},[s("softKeyBoard",{attrs:{type:"lowercase",inputText:e.message},on:{onChange:e.onChange}})],1)],1)},n=[],i=t("d399"),l={data(){return{show:!1,message:"",fileList:[{url:"https://img01.yzcdn.cn/vant/leaf.jpg"},{url:"https://img01.yzcdn.cn/vant/sand.jpg",isImage:!0}]}},methods:{handleFocus(){this.show=!0},onChange(e){this.message=e},cancel(){this.$router.back()},publish(){console.log(this.fileList.length),this.fileList.length>0||this.message?(i["a"].success("发布成功"),this.$router.back()):Object(i["a"])("请输入文字或上传图片视频")},handleDelete(e,s){this.fileList.splice(s,1)}}},o=l,c=(t("d89f"),t("2877")),h=Object(c["a"])(o,a,n,!1,null,"7386cfee",null);s["default"]=h.exports},"9d49":function(e,s,t){},d89f:function(e,s,t){"use strict";t("9d49")}}]);
//# sourceMappingURL=chunk-0d1ed3b2.9e608a58.js.map