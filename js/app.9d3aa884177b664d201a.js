webpackJsonp([0],{0:function(e,t,n){"use strict";var r=n(1),o=n(333);o.browserDynamicPlatform().bootstrapModule(r.LabsApplicationModule)["catch"](function(e){return console.log("Error bootstrapping App",e)})},1:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}r(n(2))},2:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=n(114),c=n(238),l=n(299),f=n(302),u=n(304),s=n(309),p=n(314),d=function(){function e(){}return e=r([i.NgModule({imports:[a.BrowserModule,c.RouterModule.forRoot(p.APP_ROUTES),u.HomeModule,s.AdminModule],providers:[{provide:i.NgModuleFactoryLoader,useClass:f.AsyncNgModuleLoader}],declarations:[l.AppComponent],bootstrap:[l.AppComponent]}),o("design:paramtypes",[])],e)}();t.LabsApplicationModule=d},299:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=function(){function e(){}return e=r([i.Component({selector:"labs-root",pipes:[],providers:[],directives:[],template:n(300),styles:[n(301)]}),o("design:paramtypes",[])],e)}();t.AppComponent=a},300:function(e,t){e.exports='<div class="app-container">\r\n  <header>\r\n    <h1>\r\n      Angular 2 Labs\r\n    </h1>\r\n    <nav>\r\n      <ul>\r\n        <li><a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>\r\n        <li><a routerLink="admin" routerLinkActive="active">Admin</a></li>\r\n        <li><a routerLink="lazy" routerLinkActive="active">Lazy</a></li>\r\n      </ul>\r\n    </nav>\r\n  </header>\r\n\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n\r\n  <footer class="app-footer">\r\n    Sirajuddin Choudhary © 2016\r\n  </footer>\r\n</div>'},301:function(e,t){e.exports=".app-container {\r\n  margin: 1rem 2rem;\r\n}\r\n\r\n.app-footer {\r\n  clear: both;\r\n  position: relative;\r\n  height: 3em;\r\n  margin-top: 3em;\r\n  font-size: smaller;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\nli {\r\n  display: inline;\r\n  margin-left: 1em;\r\n  list-style-type: none;\r\n}\r\n\r\nul :first-child {\r\n  margin-left: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  background-color: lightgray;\r\n  padding: 0.5em 1em;\r\n  border-radius: 5px;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\na, a:visited, a:hover {\r\n  color: black;\r\n}\r\n\r\na:hover {\r\n  background-color: lightskyblue;\r\n}\r\n\r\n.active {\r\n  background-color: lightcyan;\r\n}\r\n\r\nmain {\r\n  margin-top: 2rem;\r\n}\r\n"},302:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}r(n(303))},303:function(e,t,n){"use strict";function r(e,t,n){if(!e)throw new Error("Cannot find '"+n+"' in '"+t+"'");return e}var o=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(3),c=function(){function e(e){this.callback=e}return e}();t.loadModule=function(e){return new c(e)};var l=function(){function e(e){this.compiler=e}return e.prototype.load=function(e){var t=this;if(e instanceof c){var n=e.callback();return Promise.resolve(n).then(function(e){return r(e,"","")}).then(function(e){return t.compiler.compileModuleAsync(e)})}return Promise.resolve(null)},e=o([a.Injectable(),i("design:paramtypes",[a.Compiler])],e)}();t.AsyncNgModuleLoader=l},304:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}r(n(305))},305:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=n(238),c=n(306),l=n(308),f=function(){function e(){}return e=r([i.NgModule({imports:[a.RouterModule.forChild(l.HOME_ROUTES)],declarations:[c.HomeComponent]}),o("design:paramtypes",[])],e)}();t.HomeModule=f},306:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=function(){function e(){}return e=r([i.Component({selector:"labs-home",template:n(307),styles:["\n    a {\n      background-color: #daa520;\n      padding: 0.5rem 1rem;\n      text-decoration: none;\n      border-radius: 5px;\n      transition: all 0.2s ease;\n    }\n    a:visited {\n      color: inherited;\n    }\n    a:hover {\n      background-color: #f08080;\n    }\n  "]}),o("design:paramtypes",[])],e)}();t.HomeComponent=a},307:function(e,t){e.exports='<h4> Home</h4>\r\n\r\n<p> This is home page </p>\r\n\r\nLoki can teleport and in Angular you can deeplink to Child Component of a lazily loaded module (VillainModule),\r\nwhich in turn is part of lazily loaded module (LazyModule)<br ><br >\r\n\r\n<a routerLink="lazy/villain/100" >See details of Loki</a>\r\n'},308:function(e,t,n){"use strict";var r=n(306);t.HOME_ROUTES=[{path:"",component:r.HomeComponent},{path:"home",redirectTo:"",pathMatch:"full"}]},309:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}r(n(310))},310:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=n(238),c=n(311),l=n(313),f=function(){function e(){}return e=r([i.NgModule({imports:[a.RouterModule.forChild(l.ADMIN_ROUTES)],declarations:[c.AdminHomeComponent]}),o("design:paramtypes",[])],e)}();t.AdminModule=f},311:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=function(){function e(){}return e=r([i.Component({selector:"labs-admin-home",template:n(312)}),o("design:paramtypes",[])],e)}();t.AdminHomeComponent=a},312:function(e,t){e.exports="<h4> Admin Home</h4>\r\n\r\n<p> This page will list admin components </p>\r\n"},313:function(e,t,n){"use strict";var r=n(311);t.ADMIN_ROUTES=[{path:"admin",component:r.AdminHomeComponent}]},314:function(e,t,n){"use strict";var r=n(302);t.APP_ROUTES=[{path:"lazy",loadChildren:r.loadModule(function(){return new Promise(function(e){n.e(1,function(t){e(n(315).LazyModule)})})})}]}});
//# sourceMappingURL=app.9d3aa884177b664d201a.js.map