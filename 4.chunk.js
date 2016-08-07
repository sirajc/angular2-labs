webpackJsonp([4],{

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(719));
	

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(720));
	

/***/ },

/***/ 719:
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
	var VillainDetailComponent = (function () {
	    function VillainDetailComponent(activatedRoute) {
	        this.activatedRoute = activatedRoute;
	        this.villain = {};
	    }
	    VillainDetailComponent.prototype.ngOnInit = function () {
	        var villainId = +this.activatedRoute.snapshot.params['id'];
	        this.villain = (VILLAINS_DETAILS.filter(function (villain) { return villain.id === villainId; }))[0];
	    };
	    VillainDetailComponent = __decorate([
	        core_1.Component({
	            selector: 'labs-villain-detail',
	            template: __webpack_require__(725),
	            styles: ["\n    a , a :visited {\n      color: inherit;\n      text-decoration: none;\n      background-color: lightblue;\n      padding: 0.5rem 1rem;\n      border-radius: 3px;\n    }\n    a:hover {\n      background-color: lightskyblue;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
	    ], VillainDetailComponent);
	    return VillainDetailComponent;
	    var _a;
	}());
	exports.VillainDetailComponent = VillainDetailComponent;
	var VILLAINS_DETAILS = [
	    { id: 100, name: 'Loki Laufeyson', movies: ['Avengers', 'Thor', 'Avengers: Age of Ultron', 'Thor: The Dark World'] },
	    { id: 102, name: 'Thanos', movies: ['Guardians of the Galaxy', 'Avengers: Age of Ultron'] },
	    { id: 103, name: 'Ultron', movies: ['Avengers: Age of Ultron'] },
	    { id: 105, name: 'Ronan', movies: ['Guardians of the Galaxy'] },
	    { id: 176, name: 'Green Goblin (Norman Osborn)', movies: ['SpiderMan'] },
	    { id: 234, name: 'Red Skull (Johann Shmidt)', movies: ['Captain America: The First Avenger'] },
	    { id: 431, name: 'Agent William Stryker', movies: ['X-Men Origins: Wolverine', 'X2', 'X-Men: Days of Future Past'] }
	];
	

/***/ },

/***/ 720:
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
	var VillainListComponent = (function () {
	    function VillainListComponent() {
	        this.villains = [];
	    }
	    VillainListComponent.prototype.ngOnInit = function () {
	        this.villains = VILLAINS;
	    };
	    VillainListComponent = __decorate([
	        core_1.Component({
	            selector: 'labs-villain-list',
	            template: __webpack_require__(726),
	            styles: [__webpack_require__(729)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VillainListComponent);
	    return VillainListComponent;
	}());
	exports.VillainListComponent = VillainListComponent;
	var VILLAINS = [
	    { id: 100, name: 'Loki' },
	    { id: 102, name: 'Thanos' },
	    { id: 103, name: 'Ultron' },
	    { id: 105, name: 'Ronan' },
	    { id: 176, name: 'Green Goblin' },
	    { id: 234, name: 'Red Skull' },
	    { id: 431, name: 'Agent Stryker' }
	];
	

/***/ },

/***/ 721:
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
	var common_1 = __webpack_require__(44);
	var router_1 = __webpack_require__(110);
	var villain_list_1 = __webpack_require__(716);
	var villain_detail_1 = __webpack_require__(715);
	var villain_routes_1 = __webpack_require__(722);
	var VillainModule = (function () {
	    function VillainModule() {
	    }
	    VillainModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, router_1.RouterModule.forChild(villain_routes_1.VILLAIN_ROUTES)],
	            declarations: [villain_list_1.VillainListComponent, villain_detail_1.VillainDetailComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VillainModule);
	    return VillainModule;
	}());
	exports.VillainModule = VillainModule;
	

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var villain_list_1 = __webpack_require__(716);
	var villain_detail_1 = __webpack_require__(715);
	exports.VILLAIN_ROUTES = [
	    { path: '', component: villain_list_1.VillainListComponent },
	    { path: ':id', component: villain_detail_1.VillainDetailComponent }
	];
	

/***/ },

/***/ 725:
/***/ function(module, exports) {

	module.exports = "<h4>Details of Villain: {{ villain.name }} </h4>\r\n\r\nSeen in Movies\r\n<ul>\r\n  <li *ngFor=\"let movie of villain.movies; let last=last\">{{movie}}</li>\r\n</ul>\r\n\r\n\r\n<br >\r\n<br >\r\n<a routerLink=\"..\">List Villains</a>\r\n"

/***/ },

/***/ 726:
/***/ function(module, exports) {

	module.exports = "<h4>Villains of Marvel Universe</h4>\r\n<ul>\r\n  <li *ngFor=\"let villain of villains\"><a [routerLink]=\"villain.id\">{{villain.name}}</a></li>\r\n</ul>\r\n"

/***/ },

/***/ 729:
/***/ function(module, exports) {

	module.exports = "ul {\r\n  list-style: none;\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\nli {\r\n  cursor: pointer;\r\n  transition: all 0.2s ease;\r\n}\r\nli:hover {\r\n  padding-left: 10px;\r\n  color: silver;\r\n}\r\n.selected {\r\n  font-size: 110%;\r\n  background-color: teal;\r\n}\r\n\r\nli a {\r\n  text-decoration: none;\r\n}\r\n\r\nli a, li a:visited {\r\n  color: inherit;\r\n}\r\n"

/***/ }

});
//# sourceMappingURL=4.map