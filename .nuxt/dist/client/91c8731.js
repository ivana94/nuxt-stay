(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{370:function(t,n,e){t.exports={}},373:function(t,n,e){"use strict";e(370)},374:function(t,n,e){"use strict";e.r(n);e(207);var o={data:function(){return{isExpanded:!1,chunks:[]}},props:{text:{type:String,required:!0},target:{type:Number,required:!0}},computed:{isTooLong:function(){return 2===this.chunks.length},displayText:function(){return!this.isTooLong||this.isExpanded?this.chunks.join(" "):this.chunks[0]+"..."}},created:function(){this.chunks=this.getChunks()},methods:{getChunks:function(){var t=this.text.indexOf(" ",this.target);return this.text.length<=this.target||-1===t?[this.text]:[this.text.substr(0,t),this.text.substr(t)]}}},r=(e(373),e(25)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t._v(t._s(t.displayText)+"\n    "),t.isTooLong&&!t.isExpanded?e("button",{staticClass:"link",attrs:{type:"button"},on:{click:function(n){t.isExpanded=!0}}},[t._v("\n        read more\n    ")]):t._e(),t._v(" "),t.isTooLong&&t.isExpanded?e("button",{staticClass:"link",attrs:{type:"button"},on:{click:function(n){t.isExpanded=!1}}},[t._v("\n        read less\n    ")]):t._e()])}),[],!1,null,"4d0125ec",null);n.default=component.exports}}]);