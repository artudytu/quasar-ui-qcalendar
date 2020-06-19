(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[200],{"4e70":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="row justify-center" style="max-width: 800px; width: 100%; overflow: hidden;">\n    <q-toolbar class="no-padding no-margin" style="height: 40px; min-height: auto;">\n      <q-space />\n      <q-btn flat label="Prev" @click="calendarPrev" />\n      <q-separator vertical />\n      <q-btn flat label="Next" @click="calendarNext" />\n      <q-space />\n    </q-toolbar>\n    <q-separator class="full-width" />\n    <div class="row justify-center q-pa-md" style="max-width: 800px; width: 100%; overflow: hidden;">\n      <q-calendar\n        ref="calendar"\n        v-model="selectedDate"\n        view="month"\n        locale="en-us"\n        mini-mode\n        animated\n        transition-prev="flip-left"\n        transition-next="flip-right"\n        :selected-dates="selectedDates"\n        @click:day="onToggleDate"\n        @click:date="onToggleDate"\n        style="max-width: 300px; min-width: auto; overflow: hidden"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nfunction leftClick (e) {\n  return e.button === 0\n}\n\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      selectedDates: []\n    }\n  },\n\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n\n    classDay (timestamp) {\n      if (this.anchorDayIdentifier !== false && this.otherDayIdentifier !== false) {\n        return this.getBetween(timestamp)\n      }\n    },\n\n    onToggleDate ({ scope, event }) {\n      if (leftClick(event)) {\n        if (this.selectedDates.includes(scope.date)) {\n          // remove the date\n          for (let i = 0; i < this.selectedDates.length; ++i) {\n            if (scope.date === this.selectedDates[i]) {\n              this.selectedDates.splice(i, 1)\n              break\n            }\n          }\n        } else {\n          // add the date\n          this.selectedDates.push(scope.date)\n        }\n      }\n    }\n  }\n}\n<\/script>\n'}}]);