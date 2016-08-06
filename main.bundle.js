webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_1 = __webpack_require__(513);
	var platform_browser_dynamic_1 = __webpack_require__(330);
	platform_browser_dynamic_1.browserDynamicPlatform().bootstrapModule(app_1.LabsApplicationModule)
	    .catch(function (error) { return console.log("Error bootstrapping App", error); });
	

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var AdminHomeComponent = (function () {
	    function AdminHomeComponent() {
	    }
	    AdminHomeComponent = __decorate([
	        core_1.Component({
	            selector: 'labs-admin-home',
	            template: __webpack_require__(677)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AdminHomeComponent);
	    return AdminHomeComponent;
	}());
	exports.AdminHomeComponent = AdminHomeComponent;
	

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'labs-home',
	            template: __webpack_require__(679)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(514));
	

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(110);
	var admin_home_component_1 = __webpack_require__(347);
	var admin_routes_1 = __webpack_require__(505);
	var AdminModule = (function () {
	    function AdminModule() {
	    }
	    AdminModule = __decorate([
	        core_1.NgModule({
	            imports: [router_1.RouterModule.forChild(admin_routes_1.ADMIN_ROUTES)],
	            declarations: [admin_home_component_1.AdminHomeComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AdminModule);
	    return AdminModule;
	}());
	exports.AdminModule = AdminModule;
	

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var admin_home_component_1 = __webpack_require__(347);
	exports.ADMIN_ROUTES = [
	    { path: 'admin', component: admin_home_component_1.AdminHomeComponent }
	];
	

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(504));
	

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'labs-root',
	            pipes: [],
	            providers: [],
	            directives: [],
	            template: __webpack_require__(678),
	            styles: [__webpack_require__(708)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var platform_browser_1 = __webpack_require__(86);
	var router_1 = __webpack_require__(110);
	var app_component_1 = __webpack_require__(507);
	var shared_1 = __webpack_require__(349);
	var home_1 = __webpack_require__(512);
	var admin_1 = __webpack_require__(506);
	var app_routes_1 = __webpack_require__(509);
	var LabsApplicationModule = (function () {
	    function LabsApplicationModule() {
	    }
	    LabsApplicationModule = __decorate([
	        core_1.NgModule({
	            // `RouterModule.forRoot([])` is there to provide Router providers and directives to our application
	            // additionaly we can use this configure app level routes if any, as of now we have []
	            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.APP_ROUTES), home_1.HomeModule, admin_1.AdminModule],
	            providers: [
	                // Use custom ng module factory loader
	                { provide: core_1.NgModuleFactoryLoader, useClass: shared_1.AsyncNgModuleLoader }
	            ],
	            // We need to declare components which are part of (created for) this module
	            declarations: [app_component_1.AppComponent],
	            // Components that we need to bootstrap when the module is loaded
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LabsApplicationModule);
	    return LabsApplicationModule;
	}());
	exports.LabsApplicationModule = LabsApplicationModule;
	

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var shared_1 = __webpack_require__(349);
	exports.APP_ROUTES = [
	    {
	        path: 'lazy',
	        loadChildren: shared_1.loadModule(function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(1, function (require) {
	                resolve(__webpack_require__(712).LazyModule);
	            });
	        }); })
	    }
	];
	

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(110);
	var home_component_1 = __webpack_require__(348);
	var home_routes_1 = __webpack_require__(511);
	var HomeModule = (function () {
	    function HomeModule() {
	    }
	    HomeModule = __decorate([
	        core_1.NgModule({
	            // In all child modules, we have to use `RouterModule.forChild`, `RouterModule.forRoot` is only for root component
	            // because forRoot provides all the router providers and directives, we need not do that again
	            imports: [router_1.RouterModule.forChild(home_routes_1.HOME_ROUTES)],
	            declarations: [home_component_1.HomeComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeModule);
	    return HomeModule;
	}());
	exports.HomeModule = HomeModule;
	

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var home_component_1 = __webpack_require__(348);
	exports.HOME_ROUTES = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'home', redirectTo: '', pathMatch: 'full' }
	];
	

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(510));
	

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(508));
	

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * This file is copied from https://github.com/brandonroberts/angular2-webpack
	 * Thanks to @brandonroberts for providing this loader, to help load modules lazily
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var LoaderCallback = (function () {
	    function LoaderCallback(callback) {
	        this.callback = callback;
	    }
	    return LoaderCallback;
	}());
	exports.loadModule = function (callback) {
	    return new LoaderCallback(callback);
	};
	/**
	 * NgModuleFactoryLoader that uses Promise to load NgModule type and then compiles them.
	 * @experimental
	 */
	var AsyncNgModuleLoader = (function () {
	    function AsyncNgModuleLoader(compiler) {
	        this.compiler = compiler;
	    }
	    AsyncNgModuleLoader.prototype.load = function (modulePath) {
	        var _this = this;
	        if (modulePath instanceof LoaderCallback) {
	            var loader = modulePath.callback();
	            return Promise
	                .resolve(loader)
	                .then(function (type) { return checkNotEmpty(type, '', ''); })
	                .then(function (type) { return _this.compiler.compileModuleAsync(type); });
	        }
	        return Promise.resolve(null);
	    };
	    AsyncNgModuleLoader = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.Compiler !== 'undefined' && core_1.Compiler) === 'function' && _a) || Object])
	    ], AsyncNgModuleLoader);
	    return AsyncNgModuleLoader;
	    var _a;
	}());
	exports.AsyncNgModuleLoader = AsyncNgModuleLoader;
	function checkNotEmpty(value, modulePath, exportName) {
	    if (!value) {
	        throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
	    }
	    return value;
	}
	

/***/ },

/***/ 677:
/***/ function(module, exports) {

	module.exports = "<h4> Admin Home</h4>\r\n\r\n<p> This page will list admin components </p>\r\n"

/***/ },

/***/ 678:
/***/ function(module, exports) {

	module.exports = "<div class=\"app-container\">\r\n  <header>\r\n    <h1>\r\n      Angular 2 Labs\r\n    </h1>\r\n    <nav>\r\n      <ul>\r\n        <li><a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a></li>\r\n        <li><a routerLink=\"admin\" routerLinkActive=\"active\">Admin</a></li>\r\n        <li><a routerLink=\"lazy\" routerLinkActive=\"active\">Lazy</a></li>\r\n      </ul>\r\n    </nav>\r\n  </header>\r\n\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n\r\n  <footer class=\"app-footer\">\r\n    Sirajuddin Choudhary © 2016\r\n  </footer>\r\n</div>"

/***/ },

/***/ 679:
/***/ function(module, exports) {

	module.exports = "<h4> Home</h4>\r\n\r\n<p> This is home page </p>"

/***/ },

/***/ 708:
/***/ function(module, exports) {

	module.exports = ".app-container {\r\n  margin: 1rem 2rem;\r\n}\r\n\r\n.app-footer {\r\n  clear: both;\r\n  position: relative;\r\n  height: 3em;\r\n  margin-top: 3em;\r\n  font-size: smaller;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\nli {\r\n  display: inline;\r\n  margin-left: 1em;\r\n  list-style-type: none;\r\n}\r\n\r\nul :first-child {\r\n  margin-left: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  background-color: lightgray;\r\n  padding: 0.5em 1em;\r\n  border-radius: 5px;\r\n}\r\n\r\na, a :visited, a :hover {\r\n  color: black;\r\n}\r\n\r\na :hover {\r\n  background-color: lightskyblue;\r\n}\r\n\r\n.active {\r\n  background-color: lightcyan;\r\n}\r\n\r\nmain {\r\n  margin-top: 2rem;\r\n}\r\n"

/***/ }

});
//# sourceMappingURL=main.map