(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"5a6d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-markdown",[e._v("\n::: warning\nCodepen uses the UMD version of QCalendar. As such, the examples below must be written in such a way that they also work on that platform. If you see code like `QCalendar.addToDate`, you can instead use `import { addToDate } from '@quasar/quasar-ui-qcalendar'` in your own non-UMD code to get the best tree-shaking effects.\n:::\n    ")]),a("example-title",{attrs:{title:"Agenda View"}}),a("q-markdown",[e._v("\nThe `agenda` views by themselves are rather boring. It's up to the developer to fill the content via the `day-body` slot (more about this below).\n\nFor another example on how to use the Agenda view, check out the [Planner example](/demos/planner).\n    ")]),a("example-viewer",{attrs:{title:"Basic",file:"AgendaViewBasic","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Agenda View (week) - Basic",file:"AgendaViewWeekBasic","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Slots"}}),a("q-markdown",[e._v("\nWe are going to jump right into slot usage so that for the rest of the examples we have content that can be displayed.\n\nRemember, the data displayed below is slotted content, so you can be as creative as you need to be.\n\nFor slots that return `day`, `interval` or `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-MM-DD\n  time: '',       // 00:00:00 (optional)\n  year: 0,        // YYYY\n  month: 0,       // mm (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false,  // if timestamp is in the future (based on `now` property)\n  disabled: false // if timestamp is disabled\n}\n```\n    ")]),a("example-viewer",{attrs:{title:"Slots",file:"AgendaViewWeekSlots","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Misc"}}),a("example-viewer",{attrs:{title:"Dark",file:"AgendaViewWeekDark","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"First Day Monday",file:"AgendaViewWeekFirstDayMonday","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Five Day Workweek",file:"AgendaViewWeekFiveDayWorkweek","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThere may be circumstances where you wish to control the scrolling. In this case, use the `no-scroll` property and provide your own scroll wrapper.\n\n:::\nNote: The header area of the calendar will now scroll with the rest of the calendar\n:::\n    ")]),a("example-viewer",{attrs:{title:"No Scroll",file:"AgendaViewNoScroll","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Navigation"}}),a("example-viewer",{attrs:{title:"Prev/Next",file:"AgendaViewWeekPrevNext","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Swipe",file:"AgendaViewWeekSwipe","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Columns"}}),a("q-markdown",[e._v("\nThere are two properties: `left-column-options` and `right-column-options`, that allow you to define extra columns on the left and right of the `week-agenda` view. If you are using QCalendar to create a Planner, you will need this functionality.\n\nThese properties take an array of objects, like so:\n\n**Template code**\n```html\n    :left-column-options=\"leftColumnOptions\"\n    :right-column-options=\"rightColumnOptions\"\n```\n\n**JavaScript code**\n```js\n  data () {\n    return {\n      leftColumnOptions: [\n        {\n          id: 'over-due',\n          label: 'Over Due'\n        },\n        {\n          id: '90-days-overdue',\n          label: '90 Days Over'\n        }\n      ],\n      rightColumnOptions: [\n        {\n          id: 'summary'\n          label: 'Summary'\n        }\n      ]\n    }\n  }\n```\nIf you do not wish to have an `id` and `label` keys in your data (say, it came from a database), you can define which keys to use for this by using the `column-options-id` and `column-options-label` to define them.\n\n```html\n    column-options-id=\"column_id\"\n    column-options-label=\"name\"\n```\n\nTo manage data, use the `column-header` and `column-body` slots.\n    ")]),a("example-viewer",{attrs:{title:"Column Options",file:"AgendaViewWeekColumnOptions","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Events"}}),a("q-markdown",[e._v("\nThis events example is using the code for the `Column Options` example.\n    ")]),a("example-viewer",{attrs:{title:"Events",file:"AgendaViewWeekEvents","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Themes"}}),a("example-viewer",{attrs:{title:"Theme",file:"AgendaViewWeekTheme","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Locale Support"}}),a("example-viewer",{attrs:{title:"Locale",file:"AgendaViewWeekLocale","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}})],1)},s=[],n=a("fe7d"),i=a("8669"),l=a("384e"),r={name:"AgendaView",components:{ExampleTitle:n["a"]},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(l["b"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(l["b"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Agenda View"),this.addToToc("Basic",2),this.addToToc("Agenda View (week) - Basic",2),this.addToToc("Slots"),this.addToToc("Slots",2),this.addToToc("Misc"),this.addToToc("Dark",2),this.addToToc("First Day Monday",2),this.addToToc("Five Day Workweek",2),this.addToToc("No Scroll",2),this.addToToc("Navigation"),this.addToToc("Prev/Next",2),this.addToToc("Swipe",2),this.addToToc("Columns"),this.addToToc("Column Options",2),this.addToToc("Events"),this.addToToc("Events",2),this.addToToc("Themes"),this.addToToc("Theme",2),this.addToToc("Locale Support"),this.addToToc("Locale",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e;a=1===t?"title-"+a:"example-"+a;var o=Object(i["b"])(a);this.tempToc.push({children:[],id:o,label:e,level:t})}}},c=r,d=a("2877"),h=Object(d["a"])(c,o,s,!1,null,null,null);t["default"]=h.exports},8669:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));a("ac1f"),a("5319"),a("498a");function o(e){var t=document.createElement("textarea");t.className="fixed-top",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function s(e){var t=window.location.origin+window.location.pathname+"#"+e,a=document.getElementById(e);a&&(a.id=""),window.location.hash="#"+e,a&&setTimeout((function(){a.id=e}),300),o(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function n(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},fe7d:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},s=[],n=a("8669"),i={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(n["b"])("title-"+this.title)}},methods:{copyHeading:n["a"]}},l=i,r=a("2877"),c=Object(r["a"])(l,o,s,!1,null,null,null);t["a"]=c.exports}}]);