webpackJsonp([1],{

/***/ 712:
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
	var lazy_component_1 = __webpack_require__(713);
	var lazy_dumb_1 = __webpack_require__(714);
	var lazy_routes_1 = __webpack_require__(716);
	var LazyModule = (function () {
	    function LazyModule() {
	    }
	    LazyModule = __decorate([
	        core_1.NgModule({
	            imports: [router_1.RouterModule.forChild(lazy_routes_1.LAZY_ROUTES)],
	            declarations: [lazy_component_1.LazyComponent, lazy_dumb_1.LazyDumbComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LazyModule);
	    return LazyModule;
	}());
	exports.LazyModule = LazyModule;
	

/***/ },

/***/ 713:
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
	var LazyComponent = (function () {
	    function LazyComponent() {
	    }
	    LazyComponent = __decorate([
	        core_1.Component({
	            selector: 'labs-lazy',
	            template: __webpack_require__(718)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LazyComponent);
	    return LazyComponent;
	}());
	exports.LazyComponent = LazyComponent;
	

/***/ },

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(715));
	

/***/ },

/***/ 715:
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
	var LazyDumbComponent = (function () {
	    function LazyDumbComponent() {
	    }
	    LazyDumbComponent = __decorate([
	        core_1.Component({
	            selector: 'labs-lazy-dumb',
	            template: __webpack_require__(717),
	            styles: [__webpack_require__(719)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LazyDumbComponent);
	    return LazyDumbComponent;
	}());
	exports.LazyDumbComponent = LazyDumbComponent;
	

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lazy_component_1 = __webpack_require__(713);
	exports.LAZY_ROUTES = [
	    { path: '', component: lazy_component_1.LazyComponent }
	];
	

/***/ },

/***/ 717:
/***/ function(module, exports) {

	module.exports = "<p>\r\n  This is Just a Lazy Dumb component residing in Lazy Component.<br >\r\n  Javascript code is loaded for this component along with LazyModule code<br ><br >\r\n\r\n  <i>&lt;labs-lazy-dumb&gt;</i> is inside <i>lazy.component.html</i>, but it is not part of directives of <i>LazyComponent</i> decorator\r\n  because <i>LazyDumbComponent</i> is declared in <i>LazyModule</i> and hence is available for all components inside module\r\n</p>\r\n"

/***/ },

/***/ 718:
/***/ function(module, exports) {

	module.exports = "<h4> Lazy Component </h4>\r\n\r\n<p> This component is lazily loaded i.e. the code for this module is loaded lazily </p>\r\n\r\n\r\n<labs-lazy-dumb></labs-lazy-dumb>\r\n"

/***/ },

/***/ 719:
/***/ function(module, exports) {

	module.exports = "p {\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.2rem;\r\n  line-height: 1.3;\r\n}\r\n\r\ni {\r\n  background-color: #d3d3d3;\r\n  border-radius: 2px;\r\n  font-style: normal;\r\n  font-size: smaller;\r\n  padding: 0 0.5rem;\r\n}"

/***/ }

});
//# sourceMappingURL=1.map