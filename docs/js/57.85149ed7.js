(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"61cd":function(e,r,o){"use strict";o.r(r);var a=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticStyle:{"max-width":"800px",width:"100%"}},[o("div",{staticClass:"col-12 full-width q-pa-md"},[o("q-select",{staticClass:"col-12",attrs:{outlined:"",dense:"","emit-value":"","map-options":"",label:"Change theme",options:e.themesList},model:{value:e.theme,callback:function(r){e.theme=r},expression:"theme"}})],1),o("q-separator"),o("q-calendar",{staticStyle:{height:"400px"},attrs:{view:"day",locale:"en-us","enable-theme":"",theme:e.theme},model:{value:e.selectedDate,callback:function(r){e.selectedDate=r},expression:"selectedDate"}})],1)},u=[],d=(o("4160"),o("b0c0"),o("159b"),o("ded3")),l=o.n(d),c={data:function(){return{selectedDate:"",theme:{name:"default"},themes:[{name:"default"},{name:"dark",colorBody:"grey-2",backgroundBody:"blue-grey-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"blue-grey-9",colorBodyPast:"grey-11",backgroundBodyPast:"blue-grey-10",colorBodyCurrent:"blue-grey-2",backgroundBodyCurrent:"blue-grey-10",colorBodyFuture:"blue-grey-2",backgroundBodyFuture:"blue-grey-10",colorHeader:"blue-grey-2",backgroundHeader:"blue-grey-10",colorHeaderOutside:"blue-grey-2",backgroundHeaderOutside:"blue-grey-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"blue-grey-10",colorHeaderCurrent:"blue-grey-2",backgroundHeaderCurrent:"blue-grey-10",colorHeaderFuture:"blue-grey-2",backgroundHeaderFuture:"blue-grey-10",colorWorkWeekPast:"blue-grey-8",backgroundWorkWeekPast:"blue-grey-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"blue-grey-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"blue-grey-10",colorDayLabelOutside:"blue-grey-2",backgroundDayLabelOutside:"blue-grey-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"blue-grey-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"blue-grey-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"blue-grey-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"blue-grey-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"blue-grey-10",colorIntervalText:"grey-2",backgroundIntervalText:"blue-grey-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"blue-grey-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"blue-grey-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"blue-grey-10"},{name:"teal",colorBody:"grey-2",backgroundBody:"teal-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"teal-9",colorBodyPast:"grey-11",backgroundBodyPast:"teal-10",colorBodyCurrent:"teal-2",backgroundBodyCurrent:"teal-10",colorBodyFuture:"teal-2",backgroundBodyFuture:"teal-10",colorHeader:"teal-2",backgroundHeader:"teal-10",colorHeaderOutside:"teal-2",backgroundHeaderOutside:"teal-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"teal-10",colorHeaderCurrent:"teal-2",backgroundHeaderCurrent:"teal-10",colorHeaderFuture:"teal-2",backgroundHeaderFuture:"teal-10",colorWorkWeekPast:"teal-8",backgroundWorkWeekPast:"teal-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"teal-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"teal-10",colorDayLabelOutside:"teal-2",backgroundDayLabelOutside:"teal-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"teal-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"teal-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"teal-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"teal-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"teal-10",colorIntervalText:"grey-2",backgroundIntervalText:"teal-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"teal-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"teal-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"teal-10"},{name:"brown",colorBody:"brown-2",backgroundBody:"brown-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"brown-9",colorBodyPast:"grey-11",backgroundBodyPast:"brown-10",colorBodyCurrent:"brown-2",backgroundBodyCurrent:"brown-10",colorBodyFuture:"brown-2",backgroundBodyFuture:"brown-10",colorHeader:"brown-2",backgroundHeader:"brown-10",colorHeaderOutside:"brown-2",backgroundHeaderOutside:"brown-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"brown-10",colorHeaderCurrent:"brown-2",backgroundHeaderCurrent:"brown-10",colorHeaderFuture:"brown-2",backgroundHeaderFuture:"brown-10",colorWorkWeekPast:"brown-8",backgroundWorkWeekPast:"brown-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"brown-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"brown-10",colorDayLabelOutside:"brown-2",backgroundDayLabelOutside:"brown-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"brown-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"brown-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"brown-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"brown-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"brown-10",colorIntervalText:"grey-2",backgroundIntervalText:"brown-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"brown-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"brown-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"brown-10"},{name:"deep purple",colorBody:"grey-2",backgroundBody:"deep-purple-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"deep-purple-9",colorBodyPast:"grey-11",backgroundBodyPast:"deep-purple-10",colorBodyCurrent:"deep-purple-2",backgroundBodyCurrent:"deep-purple-10",colorBodyFuture:"deep-purple-2",backgroundBodyFuture:"deep-purple-10",colorHeader:"deep-purple-2",backgroundHeader:"deep-purple-10",colorHeaderOutside:"deep-purple-2",backgroundHeaderOutside:"deep-purple-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"deep-purple-10",colorHeaderCurrent:"deep-purple-2",backgroundHeaderCurrent:"deep-purple-10",colorHeaderFuture:"deep-purple-2",backgroundHeaderFuture:"deep-purple-10",colorWorkWeekPast:"deep-purple-8",backgroundWorkWeekPast:"deep-purple-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"deep-purple-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"deep-purple-10",colorDayLabelOutside:"deep-purple-2",backgroundDayLabelOutside:"deep-purple-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"deep-purple-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"deep-purple-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"deep-purple-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"deep-purple-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"deep-purple-10",colorIntervalText:"grey-2",backgroundIntervalText:"deep-purple-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"deep-purple-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"deep-purple-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"deep-purple-10"},{name:"indigo",colorBody:"grey-2",backgroundBody:"indigo-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"indigo-9",colorBodyPast:"grey-11",backgroundBodyPast:"indigo-10",colorBodyCurrent:"indigo-2",backgroundBodyCurrent:"indigo-10",colorBodyFuture:"indigo-2",backgroundBodyFuture:"indigo-10",colorHeader:"indigo-2",backgroundHeader:"indigo-10",colorHeaderOutside:"indigo-2",backgroundHeaderOutside:"indigo-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"indigo-10",colorHeaderCurrent:"indigo-2",backgroundHeaderCurrent:"indigo-10",colorHeaderFuture:"indigo-2",backgroundHeaderFuture:"indigo-10",colorWorkWeekPast:"indigo-8",backgroundWorkWeekPast:"indigo-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"indigo-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"indigo-10",colorDayLabelOutside:"indigo-2",backgroundDayLabelOutside:"indigo-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"indigo-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"indigo-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"indigo-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"indigo-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"indigo-10",colorIntervalText:"grey-2",backgroundIntervalText:"indigo-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"indigo-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"indigo-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"indigo-10"},{name:"blue",colorBody:"grey-2",backgroundBody:"blue-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"blue-9",colorBodyPast:"grey-11",backgroundBodyPast:"blue-10",colorBodyCurrent:"blue-2",backgroundBodyCurrent:"blue-10",colorBodyFuture:"blue-2",backgroundBodyFuture:"blue-10",colorHeader:"blue-2",backgroundHeader:"blue-10",colorHeaderOutside:"blue-2",backgroundHeaderOutside:"blue-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"blue-10",colorHeaderCurrent:"blue-2",backgroundHeaderCurrent:"blue-10",colorHeaderFuture:"blue-2",backgroundHeaderFuture:"blue-10",colorWorkWeekPast:"blue-8",backgroundWorkWeekPast:"blue-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"blue-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"blue-10",colorDayLabelOutside:"blue-2",backgroundDayLabelOutside:"blue-9",colorDayLabelPast:"yellow-4",backgroundDayLabelPast:"blue-10",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"blue-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"blue-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"blue-10",colorIntervalBody:"grey-2",backgroundIntervalBody:"blue-10",colorIntervalText:"grey-2",backgroundIntervalText:"blue-10",colorSchedulerHeader:"grey-2",backgroundSchedulerHeader:"blue-10",colorSchedulerBody:"grey-2",backgroundSchedulerBody:"blue-10",colorSchedulerText:"grey-2",backgroundSchedulerText:"blue-10"}]}},computed:{themesList:function(){var e=[];return this.themes.forEach((function(r){e.push({label:r.name,value:l()({},r)})})),e}}},n=c,t=o("2877"),b=o("ddd8"),g=o("eb85"),y=o("eebe"),k=o.n(y),i=Object(t["a"])(n,a,u,!1,null,null,null);r["default"]=i.exports;k()(i,"components",{QSelect:b["a"],QSeparator:g["a"]})}}]);