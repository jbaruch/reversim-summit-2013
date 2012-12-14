"use strict",alert("1");var app=angular.module("app",["data","filters"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/agenda",{templateUrl:"views/agenda.html",controller:"AgendaCtrl"}).when("/cfp",{templateUrl:"views/cfp.html",controller:"CfpCtrl"}).when("/speakers",{templateUrl:"views/speakers.html",controller:"SpeakersCtrl"}).when("/speakers/:speakerName",{templateUrl:"views/speakers.html",controller:"SpeakersCtrl"}).when("/register",{templateUrl:"views/register.html",controller:"RegisterCtrl"}).when("/sessions",{templateUrl:"views/sessions.html",controller:"SessionsCtrl"}).when("/sessions/:sessionName",{templateUrl:"views/sessions.html",controller:"SessionsCtrl"}).otherwise({redirectTo:"/"})}]);"use strict",angular.module("data",[]).factory("data",function(){var a="0AngbRXPzHA7adDRoeDFVRkZ1UEY5SXBwSjdSLU1nX2c",b="http://spreadsheets.google.com/feeds/cells/",c="https://docs.google.com/spreadsheet/ccc?key=";return{getDataSheetUrl:function(c){var d=b+a+"/"+c+"/public/basic?alt=json-in-script&callback=JSON_CALLBACK";return d},getDataSheetHumanUrl:function(b){var d=c+a+"#gid="+b;return d},parseFromSpreadsheet:function(a){var b=a.feed.entry,c=this.getTitles(b),d=[],e;for(var f=0;f<b.length;++f){var g=b[f],h=g.id.$t;h=this.getCompactId(h);if(this.isFirstRow(h))continue;var i=this.getColumn(h);i=="1"&&(e={},d.push(e));var j=g.content.$t;e[c[i]]=j}return d},getTitles:function(a){var b={};for(var c=0;c<a.length;++c){var d=a[c],e=d.id.$t;e=this.getCompactId(e);if(!this.isFirstRow(e))continue;var f=this.getColumn(e),g=d.content.$t;b[f]=g}return b},getColumn:function(a){return a.split("C")[1]},getCompactId:function(a){return a.substr(a.lastIndexOf("/")+1)},isFirstRow:function(a){return a.indexOf("R1C")==0}}}),"use strict",angular.module("filters",[]).filter("orFilter",function(){return function(a,b){if(!a)return[];var c=[];for(var d=a.length-1;d>=0;d--){var e=a[d];for(var f=b.length-1;f>=0;f--){var g=b[f];for(var h in g)if(e[h]==g[h]){c.push(e);continue}}}return c.reverse()}}),"use strict",app.controller("AboutCtrl",["$scope","$http","data",function(a,b,c){var d=1;b.jsonp(c.getDataSheetUrl(d)).success(function(b){a.people=c.parseFromSpreadsheet(b)}).error(function(a){console.log(a)}),a.editUrl=c.getDataSheetHumanUrl(d),a.speakerName="",a.permalinkable=!1}]),"use strict",app.controller("AgendaCtrl",["$scope",function(a){}]),"use strict",app.controller("CfpCtrl",["$scope",function(a){}]),"use strict",app.controller("SpeakersCtrl",["$scope","$http","data","$routeParams",function(a,b,c,d){var e=2;b.jsonp(c.getDataSheetUrl(e)).success(function(b){a.people=c.parseFromSpreadsheet(b)}).error(function(a){console.log(a)}),a.editUrl=c.getDataSheetHumanUrl(e),a.speakerName=d.speakerName||"",a.permalinkable=!0}]),"use strict",app.controller("RegisterCtrl",["$scope",function(a){}]),"use strict",app.controller("SessionsCtrl",["$scope","$http","data","$routeParams",function(a,b,c,d){var e=3;b.jsonp(c.getDataSheetUrl(e)).success(function(b){var d=c.parseFromSpreadsheet(b);a.sessions=d}).error(function(a){console.log(a)}),a.sessionName=d.sessionName||""}]);