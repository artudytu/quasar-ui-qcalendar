(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[141],{f996:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"max-width":"800px",width:"100%"}},[a("div",{staticClass:"row justify-center items-center"},[a("q-btn",{attrs:{flat:"",dense:"",label:"Prev"},on:{click:e.calendarPrev}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{flat:"",dense:"",label:"Next"},on:{click:e.calendarNext}})],1),a("q-separator"),a("div",{staticClass:"row justify-center full-width"},[a("q-calendar",{ref:"calendar",staticStyle:{height:"200px","max-width":"800px",width:"100%"},attrs:{view:"day-resource",resources:e.resources,"resource-height":50,locale:"en-us",sticky:"",animated:"","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)},r=[],n={data:function(){return{selectedDate:"2019-04-01",resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}]}},methods:{calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()}}},s=n,c=a("2877"),i=a("9c40"),o=a("eb85"),d=a("eebe"),u=a.n(d),f=Object(c["a"])(s,l,r,!1,null,null,null);t["default"]=f.exports;u()(f,"components",{QBtn:i["a"],QSeparator:o["a"]})}}]);