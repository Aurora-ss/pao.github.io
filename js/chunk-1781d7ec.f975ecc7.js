(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1781d7ec"],{"9b0a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("navbar"),t("div",{staticClass:"tip"},[e._v(" 请输入验证码 "),t("p",[e._v(" 验证码已通过短信发送至 "),t("span",[e._v(e._s(e.tel))])])]),t("van-password-input",{ref:"input",attrs:{value:e.value,gutter:10,mask:!1,focused:e.showKeyboard},on:{focus:function(t){e.showKeyboard=!0}}}),t("van-number-keyboard",{attrs:{show:e.showKeyboard},on:{blur:e.handleBlur},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._m(0)],1)},u=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"bottom_tip"},[e._v("没有收到验证码？"),t("span",[e._v("30秒后重发")])])}],n=(a("14d9"),a("d399")),l={data(){return{showKeyboard:!1,tel:"",value:""}},watch:{value:{handler(e){6==e.length&&this.handleBlur(!0)},immediate:!0,deep:!0}},mounted(){this.tel=this.$route.query.tel.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},methods:{handleBlur(e){!e&&(this.showKeyboard=!1),this.value.length<6?Object(n["a"])("请补全验证码"):6!=this.value.length||"123456"==this.value?6==this.value.length&&"123456"==this.value&&(n["a"].success("登录成功"),setTimeout(()=>{this.$router.push("/home")},1e3)):n["a"].fail("验证码错误")}}},o=l,i=(a("eb05"),a("2877")),r=Object(i["a"])(o,s,u,!1,null,"36464b5b",null);t["default"]=r.exports},eb05:function(e,t,a){"use strict";a("ee76")},ee76:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1781d7ec.f975ecc7.js.map