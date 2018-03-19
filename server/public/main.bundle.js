webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <app-home></app-home> -->\r\n<!-- <app-profile></app-profile> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Import rxjs map operator

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
        // Link to our api, pointing to localhost
        this.API = 'http://localhost:3000';
    }
    //   // Declare empty list of people
    //   persons: any [] = [];
    //   constructor(private http: Http) {}
    //   // Angular life cycle
    AppComponent.prototype.ngOnInit = function () {
        //     this.getAllPersons();
        //   }
        //   // Add one person to the API
        //   addPerson(name, email) {
        //     this.http.post(`${this.API}/users`, {name, email})
        //       .map(res => res.json())
        //       .subscribe(() => {
        //         this.getAllPersons();
        //       }
        //     }
        //   // Get all persons from API
        //   getAllPersons () {
        //     this.http.get(`${this.API}/users`)
        //       .map(res => res.json())
        //       .subscribe(persons => {
        //         console.log(persons)
        //         this.persons = persons
        //       })
        //     }
        //   }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_search_bar_search_bar_component__ = __webpack_require__("./src/app/components/search/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_search_result_search_result_component__ = __webpack_require__("./src/app/components/search/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_navbar_navbar_component__ = __webpack_require__("./src/app/components/profile/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_about_about_component__ = __webpack_require__("./src/app/components/profile/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_education_education_component__ = __webpack_require__("./src/app/components/profile/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_experience_experience_component__ = __webpack_require__("./src/app/components/profile/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_achievements_achievements_component__ = __webpack_require__("./src/app/components/profile/achievements/achievements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_projects_projects_component__ = __webpack_require__("./src/app/components/profile/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_skills_skills_component__ = __webpack_require__("./src/app/components/profile/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_login_login_component__ = __webpack_require__("./src/app/components/home/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_register_register_component__ = __webpack_require__("./src/app/components/home/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_home_hero_hero_component__ = __webpack_require__("./src/app/components/home/hero/hero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_home_footer_footer_component__ = __webpack_require__("./src/app/components/home/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_projects_projects_popup_projects_popup_component__ = __webpack_require__("./src/app/components/profile/projects/projects-popup/projects-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_profile_skills_skills_popup_skills_popup_component__ = __webpack_require__("./src/app/components/profile/skills/skills-popup/skills-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_profile_about_about_popup_about_popup_component__ = __webpack_require__("./src/app/components/profile/about/about-popup/about-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_profile_achievements_achievements_popup_achievements_popup_component__ = __webpack_require__("./src/app/components/profile/achievements/achievements-popup/achievements-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_profile_experience_experience_popup_experience_popup_component__ = __webpack_require__("./src/app/components/profile/experience/experience-popup/experience-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_profile_education_education_popup_education_popup_component__ = __webpack_require__("./src/app/components/profile/education/education-popup/education-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// import { HttpClientModule } from '@angular/common/http'


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_search_search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_search_search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_achievements_achievements_component__["a" /* AchievementsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_profile_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_home_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_home_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_home_hero_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_home_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_profile_projects_projects_popup_projects_popup_component__["a" /* ProjectsPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_profile_skills_skills_popup_skills_popup_component__["a" /* SkillsPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_profile_about_about_popup_about_popup_component__["a" /* AboutPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_profile_achievements_achievements_popup_achievements_popup_component__["a" /* AchievementsPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_profile_experience_experience_popup_experience_popup_component__["a" /* ExperiencePopupComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_profile_education_education_popup_education_popup_component__["a" /* EducationPopupComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                // HttpClientModule
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_28__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_29__services_validate_service__["a" /* ValidateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_search_result_search_result_component__ = __webpack_require__("./src/app/components/search/search-result/search-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Our components to route



var Routes = [
    {
        path: '',
        redirectTo: '/app-home',
        pathMatch: 'full'
    },
    {
        path: 'app-home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'app-profile',
        component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'app-search-result',
        component: __WEBPACK_IMPORTED_MODULE_4__components_search_search_result_search_result_component__["a" /* SearchResultComponent */]
    },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(Routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/components/home/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "/* Footer */\r\n.footer {\r\n    width: 100%;\r\n    background-color: #424242;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n/* Logo */\r\n.logo {\r\n    height: 75px;\r\n    margin: 20px 0px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n}\r\n.logo img {\r\n    height: 100%;\r\n}\r\n/* Social */\r\n.social-icons {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 20px;\r\n}\r\n.social-circle {\r\n    height: 35px;\r\n    width: 35px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: #424242;\r\n    margin: 0px 20px;\r\n}\r\n/* Media Queries */\r\n@media (max-width: 750px) {\r\n\r\n    .logo {\r\n        height: 50px;\r\n        -webkit-transition: all .4s;\r\n        transition: all .4s;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/home/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"> <!-- Footer Start -->\r\n  <!-- Logo -->\r\n  <div class=\"logo\">\r\n      <img class=\"hero-logo\" src=\"../../../../assets/img/logo-white.png\" alt=\"Merits\">\r\n  </div>\r\n  <!-- Social Media -->\r\n  <div class=\"social-icons\">\r\n    <div class=\"social-circle\">\r\n      <i class=\"fab fa-twitter\"></i>\r\n    </div>\r\n    <div class=\"social-circle\">\r\n      <i class=\"fab fa-facebook\"></i>\r\n    </div>\r\n    <div class=\"social-circle\">\r\n        <i class=\"fab fa-linkedin-in\"></i>\r\n    </div>\r\n  </div>\r\n</div> <!-- Footer End -->\r\n"

/***/ }),

/***/ "./src/app/components/home/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/home/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/home/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/hero/hero.component.css":
/***/ (function(module, exports) {

module.exports = "/* Background Img & Border */\r\n.hero-img {\r\n    width: 100%;\r\n    height: 350px;\r\n    background-image: url('hero.aec039cfaa758a5a34cf.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    position: relative;\r\n}\r\n.line {\r\n    width: 100%;\r\n    height: 10px;\r\n    background-color: #ffb808;\r\n}\r\n/* Merits Logo */\r\n.hero-logo {\r\n    height: 50%;\r\n    width: auto;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n}\r\n/* Login */\r\n.login-container {\r\n    width: 500px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 5px 15px 0px 0px;\r\n}\r\n/* Site Description */\r\n.hero-description {\r\n    margin: 40px;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n    text-align: center;\r\n    transition: all .4s;\r\n}\r\n/* Media Queries */\r\n@media (max-width: 750px) {\r\n\r\n    .hero-logo {\r\n        height: 30%;\r\n        margin-top: 80px;\r\n    }\r\n\r\n    .hero-description {\r\n        margin: 40px 20px;\r\n    }\r\n    .login-container {\r\n        width: 400px;\r\n        position: absolute;\r\n        right: calc(50% - 200px);\r\n        margin: 10px auto;\r\n    }\r\n    .btn-section {\r\n        height: 32px;\r\n    }\r\n}\r\n@media (max-width: 450px) {\r\n\r\n    .login-container {\r\n        width: 350px;\r\n        right: calc(50% - 175px);\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/home/hero/hero.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-img\"><!-- Hero Start -->\r\n  <!-- Logo -->\r\n  <img class=\"hero-logo\" src=\"../../../../assets/img/hero-logo.png\" alt=\"Merits\">\r\n  <!-- Login Comp. -->\r\n  <div class=\"login-container\">\r\n    <app-login></app-login>\r\n  </div>\r\n</div> <!-- Hero End -->\r\n<div class=\"line\"></div>\r\n<!-- Site Description -->\r\n<div class=\"hero-description\">\r\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid quidem voluptatum fuga tempore, eaque laborum laboriosam repellat hic ab modi veniam voluptates ipsum distinctio id dicta quibusdam itaque rem praesentium sint sunt impedit, nobis fugit et. Magnam tempore, a culpa delectus blanditiis deserunt et architecto, ipsum esse impedit voluptatibus.</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/hero/hero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero',
            template: __webpack_require__("./src/app/components/home/hero/hero.component.html"),
            styles: [__webpack_require__("./src/app/components/home/hero/hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* Home Page Container */\r\n.grid-container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-areas:\r\n    \"hero hero hero hero hero hero hero hero hero hero hero hero hero hero\"\r\n    \". . search search search search search search search search search search . .\"\r\n    \". . form form form form form form form form form form . .\"\r\n    \"footer footer footer footer footer footer footer footer footer footer footer footer footer footer\";\r\n}\r\n/* Hero */\r\n.hero-container {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 14;\r\n    grid-area: hero;\r\n}\r\n/* Search */\r\n.search-container {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 10;\r\n    grid-area: search;\r\n    margin-bottom: 60px;\r\n    border-radius: 5px;\r\n}\r\n/* Register Form */\r\n.register-form-container {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 10;\r\n    grid-area: form;\r\n}\r\n/* Footer */\r\n.footer-container {\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 14;\r\n    grid-area: footer;\r\n}\r\n/* Media Queries */\r\n@media (max-width: 750px) {\r\n\r\n    .grid-container{\r\n            grid-template-areas:\r\n        \"hero hero hero hero hero hero hero hero hero hero hero hero hero hero\"\r\n        \". search search search search search search search search search search search search .\"\r\n        \"form form form form form form form form form form form form form form\"\r\n        \"footer footer footer footer footer footer footer footer footer footer footer footer footer footer\";\r\n    }\r\n\r\n    /* Redeclare Grid Areas for Compiling */\r\n    .hero-container {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n        -ms-grid-column-span: 14;\r\n        grid-area: hero;\r\n    }\r\n\r\n    .search-container {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 12;\r\n        grid-area: search;\r\n    }\r\n\r\n    .register-form-container {\r\n        -ms-grid-row: 3;\r\n        -ms-grid-column: 1;\r\n        -ms-grid-column-span: 14;\r\n        grid-area: form;\r\n    }\r\n\r\n    .footer-container {\r\n        -ms-grid-row: 4;\r\n        -ms-grid-column: 1;\r\n        -ms-grid-column-span: 14;\r\n        grid-area: footer;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <!-- Hero Img & Description Comp. -->\r\n  <div class=\"hero-container\">\r\n    <app-hero></app-hero>\r\n  </div>\r\n  <!-- Search Comp. -->\r\n  <div class=\"search-container\">\r\n    <app-search-bar></app-search-bar>\r\n  </div>\r\n  <!-- Register Form Comp. -->\r\n  <div class=\"register-form-container\">\r\n    <app-register></app-register>\r\n  </div>\r\n  <!-- Footer Comp. -->\r\n  <div class=\"footer-container\">\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/* Login Form Container */\r\n.login-wrap {\r\n    width: 100%;\r\n    color: #fff;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-areas:\r\n    \"user user pass pass btn\"\r\n    \". . . forgot forgot\";\r\n}\r\n/* Grid Areas */\r\n.email-section {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: user;\r\n}\r\n.pass-section {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: pass;\r\n}\r\n.btn-section {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 5;\r\n    grid-area: btn;\r\n}\r\n.forgot-section {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 4;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: forgot;\r\n    text-align: right;\r\n}\r\n/* Reset Password */\r\n.forgot-section p {\r\n    margin: 0;\r\n    -webkit-transition: .4s all;\r\n    transition: .4s all;\r\n}\r\n.forgot-section p:hover {\r\n    color: #ffb808;\r\n    cursor: pointer;\r\n}\r\n/* Submit Button */\r\nbutton {\r\n    width: 100%;\r\n    height: 32px;\r\n    border-radius: 5px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 13pt;\r\n    background-color: #ffb808;\r\n    border: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n}\r\n/* Input Fields */\r\ninput {\r\n    opacity: 0.8;\r\n}\r\ninput:focus {\r\n    outline: none;\r\n    opacity: 1;\r\n}\r\ninput:active {\r\n    opacity: 1;\r\n}\r\n/* Media Queries */\r\n@media (max-width: 750px) {\r\n\r\n    .login-wrap {\r\n        -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n            grid-template-columns: 1fr 1fr 1fr 1fr;\r\n            grid-template-areas:\r\n        \"user user user user\"\r\n        \"pass pass pass pass\"\r\n        \". btn btn .\"\r\n        \". forgot forgot .\";\r\n    }\r\n\r\n    /* Redeclare Grid Areas for Compiling */\r\n    .forgot-section {\r\n        -ms-grid-row: 4;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: forgot;\r\n        margin: -5px;\r\n        text-align: center;\r\n    }\r\n\r\n    .username-section {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n        -ms-grid-column-span: 4;\r\n        grid-area: user;\r\n    }\r\n\r\n    .pass-section {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 1;\r\n        -ms-grid-column-span: 4;\r\n        grid-area: pass;\r\n    }\r\n\r\n    .btn-section {\r\n        -ms-grid-row: 3;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: btn;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/home/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group login-wrap\">\r\n    <!--Email-->\r\n    <div class=\"email-section\">\r\n      <input class=\"form-input\" type=\"text\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\">\r\n    </div>\r\n    <!--password -->\r\n    <div class=\"pass-section\">\r\n      <input class=\"form-input\" type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\r\n    </div>\r\n    <!-- submission -->\r\n    <div class=\"btn-section\">\r\n      <button type=\"submit\">Login</button>\r\n    </div>\r\n    <div class=\"forgot-section\">\r\n      <p>Reset Password</p>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/home/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['profile']);
            }
            else {
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/home/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/home/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/home/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "/* Header */\r\n.title-section {\r\n    color: #fff;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 20px 0px;\r\n}\r\n/* Form Container */\r\n.inputs {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 20px;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-areas:\r\n    \". fname fname lname lname .\"\r\n    \". mail mail mail mail .\"\r\n    \". create create create create .\"\r\n    \". confirm confirm confirm confirm .\"\r\n    \". city city city state .\";\r\n}\r\n/* Grid Names Start */\r\n.first-name {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: fname;\r\n}\r\n.last-name {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 4;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: lname;\r\n}\r\n.e-mail {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: mail;\r\n}\r\n.create {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: create;\r\n}\r\n.confirm {\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: confirm;\r\n}\r\n.city {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: city;\r\n}\r\n.state {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 5;\r\n    grid-area: state\r\n}\r\n/* Buttons and Inputs */\r\n.button-section {\r\n    text-align: center;\r\n    padding: 20px 0px 50px 0px;\r\n}\r\nbutton {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 13pt;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    border: none;\r\n    color: #757575;\r\n    cursor: pointer;\r\n}\r\nselect {\r\n    height: 32px;\r\n}\r\n.form {\r\n    margin-bottom: 100px;\r\n}\r\ninput:focus {\r\n    outline: none;\r\n}\r\n/* Media Queries */\r\n@media (max-width: 750px) {\r\n\r\n    .title-section h1 {\r\n        font-size: 1.6em;\r\n    }\r\n\r\n    .inputs {\r\n            grid-template-areas:\r\n        \". fname fname fname fname .\"\r\n        \". lname lname lname lname .\"\r\n        \". mail mail mail mail .\"\r\n        \". create create create create .\"\r\n        \". confirm confirm confirm confirm .\"\r\n        \". city city city city .\"\r\n        \". . state state . .\"\r\n    }\r\n\r\n\r\n    .form {\r\n        border-radius: 0;\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    /* Redeclare Grid Areas for Compiling */\r\n    .first-name {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 4;\r\n        grid-area: fname;\r\n    }\r\n\r\n    .last-name {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 4;\r\n        grid-area: lname;\r\n    }\r\n\r\n    .e-mail {\r\n        -ms-grid-row: 3;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 4;\r\n        grid-area: mail;\r\n    }\r\n\r\n    .create {\r\n        -ms-grid-row: 4;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 4;\r\n        grid-area: create;\r\n    }\r\n\r\n    .confirm {\r\n        -ms-grid-row: 5;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 4;\r\n        grid-area: confirm;\r\n    }\r\n\r\n    .city {\r\n        -ms-grid-row: 6;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 4;\r\n        grid-area: city;\r\n    }\r\n\r\n    .state {\r\n        -ms-grid-row: 7;\r\n        -ms-grid-column: 3;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: state\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/home/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (submit)=\"registrationSubmit()\"> <!-- Form Start -->\r\n\r\n  <!-- Form Header -->\r\n  <div class=\"title-section\">\r\n    <h1>Get started, it's free!</h1>\r\n  </div>\r\n\r\n  <!-- Form Fields -->\r\n  <div class=\"inputs\">\r\n    <input class=\"form-input first-name\"type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" placeholder=\"First Name\">\r\n    <input class=\"form-input last-name\"type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\"  placeholder=\"Last Name\">\r\n    <input class=\"form-input e-mail\"type=\"email\" [(ngModel)]=\"email\" name=\"email\"  placeholder=\"E-mail\">\r\n    <input class=\"form-input create\"type=\"password\" [(ngModel)]=\"password\" name=\"password\"  placeholder=\"Create Password\">\r\n    <input class=\"form-input confirm\"type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\"  placeholder=\"Confirm Password\">\r\n    <input class=\"form-input city\"type=\"text\" [(ngModel)]=\"city\" name=\"city\"  placeholder=\"City\">\r\n    <select class=\"state\" [(ngModel)]=\"state\" name=\"state\" id=\"state\" placeholder=\"State\">\r\n        <option selected=\"selected\">State</option>\r\n        <option value=\"AL\">Alabama</option>\r\n        <option value=\"AK\">Alaska</option>\r\n        <option value=\"AZ\">Arizona</option>\r\n        <option value=\"AR\">Arkansas</option>\r\n        <option value=\"CA\">California</option>\r\n        <option value=\"CO\">Colorado</option>\r\n        <option value=\"CT\">Connecticut</option>\r\n        <option value=\"DE\">Delaware</option>\r\n        <option value=\"DC\">District Of Columbia</option>\r\n        <option value=\"FL\">Florida</option>\r\n        <option value=\"GA\">Georgia</option>\r\n        <option value=\"HI\">Hawaii</option>\r\n        <option value=\"ID\">Idaho</option>\r\n        <option value=\"IL\">Illinois</option>\r\n        <option value=\"IN\">Indiana</option>\r\n        <option value=\"IA\">Iowa</option>\r\n        <option value=\"KS\">Kansas</option>\r\n        <option value=\"KY\">Kentucky</option>\r\n        <option value=\"LA\">Louisiana</option>\r\n        <option value=\"ME\">Maine</option>\r\n        <option value=\"MD\">Maryland</option>\r\n        <option value=\"MA\">Massachusetts</option>\r\n        <option value=\"MI\">Michigan</option>\r\n        <option value=\"MN\">Minnesota</option>\r\n        <option value=\"MS\">Mississippi</option>\r\n        <option value=\"MO\">Missouri</option>\r\n        <option value=\"MT\">Montana</option>\r\n        <option value=\"NE\">Nebraska</option>\r\n        <option value=\"NV\">Nevada</option>\r\n        <option value=\"NH\">New Hampshire</option>\r\n        <option value=\"NJ\">New Jersey</option>\r\n        <option value=\"NM\">New Mexico</option>\r\n        <option value=\"NY\">New York</option>\r\n        <option value=\"NC\">North Carolina</option>\r\n        <option value=\"ND\">North Dakota</option>\r\n        <option value=\"OH\">Ohio</option>\r\n        <option value=\"OK\">Oklahoma</option>\r\n        <option value=\"OR\">Oregon</option>\r\n        <option value=\"PA\">Pennsylvania</option>\r\n        <option value=\"RI\">Rhode Island</option>\r\n        <option value=\"SC\">South Carolina</option>\r\n        <option value=\"SD\">South Dakota</option>\r\n        <option value=\"TN\">Tennessee</option>\r\n        <option value=\"TX\">Texas</option>\r\n        <option value=\"UT\">Utah</option>\r\n        <option value=\"VT\">Vermont</option>\r\n        <option value=\"VA\">Virginia</option>\r\n        <option value=\"WA\">Washington</option>\r\n        <option value=\"WV\">West Virginia</option>\r\n        <option value=\"WI\">Wisconsin</option>\r\n        <option value=\"WY\">Wyoming</option>\r\n    </select>\r\n  </div>\r\n\r\n  <!-- Submit -->\r\n  <div class=\"button-section\">\r\n    <button>Create My Account!</button>\r\n  </div>\r\n\r\n</form><!-- Form End -->\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registrationSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            city: this.city,
            state: this.state
        };
        if (!this.validateService.validateRegister(user)) {
            console.log('Please fill in all fields');
        }
        if (!this.validateService.validateEmail(user.email)) {
            console.log('Please enter a valid email');
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data === true) {
                console.log('You are now registered!');
                _this.router.navigate(['/app-profile']);
            }
            else {
                console.log('Something went wrong!');
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/home/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/home/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/about/about-popup/about-popup.component.css":
/***/ (function(module, exports) {

module.exports = "/* About popup  */\r\n.close-btn {\r\n  color: #fff;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.close-modal-btn {\r\n  height: 25px;\r\n  width: 25px;\r\n  cursor: pointer;\r\n  margin: 10px;\r\n}\r\n.close-btn {\r\n  color: #fff;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n/* About popup grid content  */\r\n.inputs {\r\n  margin: 15px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr; */\r\n      grid-template-areas:\r\n    \"fname fname fname lname lname lname\"\r\n    \"title title title title title title\"\r\n    \"city city state state phone phone\"\r\n    \"email email email  website website website\"\r\n    \". addDesc addDesc addDesc addDesc .\";\r\n}\r\n.first-name {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: fname;\r\n}\r\n.last-name {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 4;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: lname;\r\n}\r\n.title {\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 6;\r\n  grid-area: title;\r\n}\r\n.phone {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 5;\r\n  -ms-grid-column-span: 2;\r\n  grid-area: phone;\r\n}\r\n.create {\r\n  grid-area: create;\r\n}\r\n.email {\r\n  -ms-grid-row: 4;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: email;\r\n}\r\n.city {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 2;\r\n  grid-area: city;\r\n}\r\n.state {\r\n  border: none;\r\n  border-radius: 8px;\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 2;\r\n  grid-area: state;\r\n}\r\n.website {\r\n  -ms-grid-row: 4;\r\n  -ms-grid-column: 4;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: website;\r\n}\r\n.addDesc {\r\n  width: 80%;\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 4;\r\n  grid-area: addDesc;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 0px;\r\n}\r\n.btn-section {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n.submit-btn {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 13pt;\r\n  padding: 5px 25px;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  border: none;\r\n  color: #757575;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n}\r\n.social {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin: 25px;\r\n    margin-top: 0px;\r\n    width: 70%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/about/about-popup/about-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-grid\">\r\n  <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit\" class=\"popup-modal form\">\r\n    <div class=\"close-modal-btn\" (click)=\"hideAboutModal()\">\r\n      <i class=\"fas fa-times close-btn\"></i>\r\n    </div>\r\n    <div class=\"inputs\">\r\n        <input class=\"form-input first-name\" type=\"text\" placeholder=\"First Name\">\r\n        <input class=\"form-input last-name\" type=\"text\" placeholder=\"Last Name\">\r\n        <input class=\"form-input title\" type=\"text\" placeholder=\"Title\">\r\n        <input class=\"form-input city\" placeholder=\"City\">\r\n        <select class=\"state\" name=\"State\" id=\"state\">\r\n          <option selected=\"selected\">State</option>\r\n          <option value=\"AL\">Alabama</option>\r\n          <option value=\"AK\">Alaska</option>\r\n          <option value=\"AZ\">Arizona</option>\r\n          <option value=\"AR\">Arkansas</option>\r\n          <option value=\"CA\">California</option>\r\n          <option value=\"CO\">Colorado</option>\r\n          <option value=\"CT\">Connecticut</option>\r\n          <option value=\"DE\">Delaware</option>\r\n          <option value=\"DC\">District Of Columbia</option>\r\n          <option value=\"FL\">Florida</option>\r\n          <option value=\"GA\">Georgia</option>\r\n          <option value=\"HI\">Hawaii</option>\r\n          <option value=\"ID\">Idaho</option>\r\n          <option value=\"IL\">Illinois</option>\r\n          <option value=\"IN\">Indiana</option>\r\n          <option value=\"IA\">Iowa</option>\r\n          <option value=\"KS\">Kansas</option>\r\n          <option value=\"KY\">Kentucky</option>\r\n          <option value=\"LA\">Louisiana</option>\r\n          <option value=\"ME\">Maine</option>\r\n          <option value=\"MD\">Maryland</option>\r\n          <option value=\"MA\">Massachusetts</option>\r\n          <option value=\"MI\">Michigan</option>\r\n          <option value=\"MN\">Minnesota</option>\r\n          <option value=\"MS\">Mississippi</option>\r\n          <option value=\"MO\">Missouri</option>\r\n          <option value=\"MT\">Montana</option>\r\n          <option value=\"NE\">Nebraska</option>\r\n          <option value=\"NV\">Nevada</option>\r\n          <option value=\"NH\">New Hampshire</option>\r\n          <option value=\"NJ\">New Jersey</option>\r\n          <option value=\"NM\">New Mexico</option>\r\n          <option value=\"NY\">New York</option>\r\n          <option value=\"NC\">North Carolina</option>\r\n          <option value=\"ND\">North Dakota</option>\r\n          <option value=\"OH\">Ohio</option>\r\n          <option value=\"OK\">Oklahoma</option>\r\n          <option value=\"OR\">Oregon</option>\r\n          <option value=\"PA\">Pennsylvania</option>\r\n          <option value=\"RI\">Rhode Island</option>\r\n          <option value=\"SC\">South Carolina</option>\r\n          <option value=\"SD\">South Dakota</option>\r\n          <option value=\"TN\">Tennessee</option>\r\n          <option value=\"TX\">Texas</option>\r\n          <option value=\"UT\">Utah</option>\r\n          <option value=\"VT\">Vermont</option>\r\n          <option value=\"VA\">Virginia</option>\r\n          <option value=\"WA\">Washington</option>\r\n          <option value=\"WV\">West Virginia</option>\r\n          <option value=\"WI\">Wisconsin</option>\r\n          <option value=\"WY\">Wyoming</option>\r\n        </select>\r\n        <input type=\"text\" class=\"form-input phone\" placeholder=\"Phone\">\r\n        <input type=\"text\" class=\"form-input email\" placeholder=\"Email\">\r\n        <input type=\"text\" class=\"form-input website\" placeholder=\"Website\">\r\n        <textarea class=\"textarea-styled addDesc\" type=\"text\" maxlength=\"500\" placeholder=\"Tell the World a Little About You!\"></textarea>\r\n      </div>\r\n      <div class=\"social\">\r\n          <p>\r\n            <input class=\"form-input\" type=\"text\" placeholder=\"eg:Twitter\">\r\n          </p>\r\n          <p>\r\n            <input class=\"form-input\" type=\"text\" placeholder=\"eg:LinkedIn\">\r\n          </p>\r\n          <p>\r\n            <input class=\"form-input\" type=\"text\" placeholder=\"eg:Facebook\">\r\n          </p>\r\n        </div>\r\n      <div class=\"btn-section\">\r\n        <button class=\"submit-btn\" type=\"submit\">Save!</button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/about/about-popup/about-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPopupComponent = /** @class */ (function () {
    function AboutPopupComponent() {
    }
    AboutPopupComponent.prototype.ngOnInit = function () {
    };
    AboutPopupComponent.prototype.hideAboutModal = function () {
        var achievePopup = document.querySelector('#about-popup');
        achievePopup.setAttribute("style", "display:none");
    };
    AboutPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about-popup',
            template: __webpack_require__("./src/app/components/profile/about/about-popup/about-popup.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/about/about-popup/about-popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPopupComponent);
    return AboutPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "/* About Container */\r\n.header {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.mainDiv {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.eye-icon {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 40px;\r\n}\r\n.edit-icon {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 0;\r\n    -webkit-transform: scale(1.8);\r\n            transform: scale(1.8);\r\n}\r\n.edit-icon:hover {\r\n    cursor: pointer;\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    -webkit-transition: all .3s;\r\n    transition: all .3s;\r\n}\r\n.inputs {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 20px;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-areas:\r\n    \"fname fname fname lname lname .\"\r\n    \". title title title title .\"\r\n    \". create create create create .\"\r\n    \". confirm confirm confirm confirm .\"\r\n    \". city city city state .\"\r\n}\r\n.first-name {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: fname;\r\n}\r\n.last-name {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 4;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: lname;\r\n}\r\n.tile {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: title;\r\n}\r\n.create {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: create;\r\n}\r\n.confirm {\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: confirm;\r\n}\r\n.city {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: city;\r\n}\r\n.state {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 5;\r\n    grid-area: state;\r\n}\r\n/* Name */\r\nstrong {\r\n    color:rgba(255,184,8,0.85);\r\n}\r\n/* Contact */\r\n.contact-info {\r\n    margin-bottom: 0;\r\n}\r\n/* Social */\r\n.social-icons {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: right;\r\n        -ms-flex-pack: right;\r\n            justify-content: right;\r\n    margin-bottom: 20px;\r\n}\r\n.social-circle {\r\n    height: 35px;\r\n    width: 35px;\r\n    background-color: rgb(88, 86, 86);\r\n    border-radius: 50%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: white;\r\n    margin: 0px 20px;\r\n}\r\n.social-circle:first-child {\r\n    margin-left: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- About Start -->\r\n<section id=\"about-section\">\r\n\r\n  <!-- Name -->\r\n\r\n  <div class=\"mainDiv\">\r\n    <div class=\"header\">\r\n        <i class=\"fas fa-eye eye-icon \"></i>\r\n      <div class=\"edit-btn-cont\" (click)=\"showAboutModal()\">\r\n      <i class=\"fas fa-edit edit-icon\"></i>\r\n      </div>\r\n      <h1 class=\"name-text\">Dude\r\n        <strong>Person</strong>\r\n      </h1>\r\n    </div>\r\n\r\n    <!-- Contact -->\r\n    <h2 class=\"title-text\">Developer</h2>\r\n    <p class=\"contact-info\">Fresno, CA 00000 [555]555-5555 dudeperson@dude.com\r\n      <a href=\"#\">superdudews.com</a>\r\n    </p>\r\n\r\n    <!-- Bio -->\r\n    <p class=\"body-text\">Administrative Assistant with +3 years of experience in a sensitive corporate environment. Outgoing and detail-oriented,\r\n      I am proficient at building and maintaining professional relationships. Have an Associate's Degree in Office Administration.\r\n    </p>\r\n\r\n    <!-- Social -->\r\n    <div class=\"social-icons\">\r\n      <div class=\"social-circle\">\r\n        <i class=\"fab fa-twitter\"></i>\r\n      </div>\r\n      <div class=\"social-circle\">\r\n        <i class=\"fab fa-facebook\"></i>\r\n      </div>\r\n      <div class=\"social-circle\">\r\n        <i class=\"fab fa-linkedin-in\"></i>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Modal -->\r\n    <form class=\"form\" hidden>\r\n      <div class=\"inputs\">\r\n        <p>\r\n          <input class=\"form-input first-name\" type=\"text\" placeholder=\"First Name\">\r\n          <input class=\"form-input last-name\" type=\"text\" placeholder=\"Last Name\">\r\n          <input class=\"form-input title\" type=\"text\" placeholder=\"Title\">\r\n          <input class=\"form-input city\" placeholder=\"City\">\r\n          <select name=\"state\" id=\"state\" ng-model=\"data.state\">\r\n            <option>--State--</option>\r\n            <option>PA</option>\r\n            <option>CA</option>\r\n            <option>PH</option>\r\n          </select>\r\n          <input type=\"text\" ng-model=\"phone\" placeholder=\"Phone\">\r\n          <br>\r\n          <br>\r\n          <input type=\"text\" ng-model=\"email\" placeholder=\"Email\">\r\n          <input type=\"text\" ng-model=\"website\" placeholder=\"Website\">\r\n          <br>\r\n          <br>\r\n          <textarea class=\"textarea-styled\" type=\"text\" ng-model=\"infoAbout\" maxlength=\"500\" placeholder=\"Tell the World a Little About You!\"></textarea>\r\n        </p>\r\n        <label>Social Media </label>\r\n        <br>\r\n        <br>\r\n        <input type=\"text\" ng-model=\"twitter\" placeholder=\"Twitter\">\r\n        <br>\r\n        <br>\r\n        <input type=\"text\" ng-model=\"linkedIn\" placeholder=\"LinkedIn\">\r\n        <br>\r\n        <br>\r\n        <input type=\"text\" ng-model=\"faceBook\" placeholder=\"Facebook\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n<!-- About End -->"

/***/ }),

/***/ "./src/app/components/profile/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.showAboutModal = function () {
        var aboutPopup = document.querySelector('#about-popup');
        aboutPopup.setAttribute('style', 'display:flex; align-items:center;');
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/profile/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/achievements/achievements-popup/achievements-popup.component.css":
/***/ (function(module, exports) {

module.exports = ".popup-bg {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  z-index: 10000;\r\n  display: none;\r\n}\r\n.close-btn {\r\n  color: #fff;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.close-modal-btn {\r\n  height: 25px;\r\n  width: 25px;\r\n  cursor: pointer;\r\n  margin: 10px;\r\n}\r\n.close-btn {\r\n  color: #fff;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n/* Grid declarations Begins */\r\n.inputs {\r\n  margin: 15px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-areas:\r\n    \"awardReciept . . .\"\r\n    \"awardMonth awardYear awardTitle awardTitle\"\r\n    \". . addInfo addInfo\";\r\n}\r\n.awardReciept {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: awardReciept;\r\n}\r\n.awardMonth {\r\n  border: none;\r\n  border-radius: 8px;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 1;\r\n  grid-area: awardMonth;\r\n  width: 80%;\r\n}\r\n.awardYear {\r\n  border: none;\r\n  border-radius: 8px;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 2;\r\n  grid-area: awardYear;\r\n  width: 80%;\r\n}\r\n.awardTitle {\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 2;\r\n  grid-area: awardTitle;\r\n}\r\n.addInfo {\r\n  width: 100%;\r\n  padding: 0;\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 2;\r\n  grid-area: addInfo;\r\n  border: none;\r\n  border-radius: 8px;\r\n}\r\n/* Grid declarations ends */\r\n.btn-section {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n.submit-btn {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 13pt;\r\n  padding: 5px 25px;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  border: none;\r\n  color: #757575;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/achievements/achievements-popup/achievements-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Achievement/Awards Popup modal Begins -->\r\n<div id=\"achieve-newPopup\" class=\"popup-bg\">\r\n  <div class=\"popup-grid\">\r\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit\" class=\"popup-modal form\">\r\n      <div id=\"newAwardView\">\r\n        <div class=\"close-modal-btn\" (click)=\"hideAchieveModal()\">\r\n          <i class=\"fas fa-times close-btn\"></i>\r\n        </div>\r\n        <div class=\"inputs\">\r\n          <h4 class=\"form-input-label awardReciept\">Date of reciept</h4>\r\n          <select name=\"awardMonth\" class=\"awardMonth\">\r\n            <option selected value=\"\">Month</option>\r\n            <option>January</option>\r\n            <option>Febraury</option>\r\n            <option>March</option>\r\n            <option>April</option>\r\n            <option>May</option>\r\n            <option>June</option>\r\n            <option>July</option>\r\n            <option>August</option>\r\n            <option>September</option>\r\n            <option>October</option>\r\n            <option>November</option>\r\n            <option>December</option>\r\n          </select>\r\n          <select name=\"awardYear\" class=\"awardYear\">\r\n            <option selected value=\"\">Year</option>\r\n            <option>2000</option>\r\n            <option>2001</option>\r\n            <option>2002</option>\r\n          </select>\r\n          <input type=\"text\" class=\"form-input awardTitle\" placeholder=\"Awards or Achievements Title\">\r\n          <textarea type=\"text\" class=\"textarea-styled addInfo\" maxlength=\"500\" placeholder=\"Additional info (Optional)\"></textarea>\r\n        </div>\r\n        <div class=\"btn-section\">\r\n          <button class=\"submit-btn\" type=\"submit\">Save Changes</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"achieve-editPopup\" class=\"popup-bg\">\r\n  <div class=\"popup-grid\">\r\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit\" class=\"popup-modal form\">\r\n      <div id=\"editAwardView\" >\r\n        <div class=\"close-modal-btn\" (click)=\"hideAchieveModal()\">\r\n          <i class=\"fas fa-times close-btn\"></i>\r\n        </div>\r\n        <div class=\"inputs\">\r\n          <h4 class=\"form-input-label awardReciept\">Date of reciept</h4>\r\n          <select name=\"awardMonth\" ng-model=\"awardMonth\" class=\"awardMonth\">\r\n            <option selected value=\"\">Month</option>\r\n            <option>January</option>\r\n            <option>Febraury</option>\r\n            <option selected >March</option>\r\n            <option>April</option>\r\n            <option>May</option>\r\n            <option>June</option>\r\n            <option>July</option>\r\n            <option>August</option>\r\n            <option>September</option>\r\n            <option>October</option>\r\n            <option>November</option>\r\n            <option>December</option>\r\n          </select>\r\n          <select name=\"awardYear\" ng-model=\"awardYear\" class=\"awardYear\">\r\n            <option selected value=\"2018\">2018</option>\r\n            <option>2000</option>\r\n            <option>2001</option>\r\n            <option>2002</option>\r\n          </select>\r\n          <input type=\"text\" name=\"awardTitle\" class=\"form-input awardTitle\" [(ngModel)]=\"awardTitle\" value=\"Boo Brilliant Designer\">\r\n          <textarea type=\"text\" class=\"textarea-styled addInfo\" maxlength=\"500\" placeholder=\"Additional info (Optional)\">Delivered the project on time with zero errors!!!</textarea>\r\n        </div>\r\n        <div class=\"btn-section\">\r\n          <button class=\"submit-btn\" type=\"submit\" (click)=\"update()\">Save Changes</button>\r\n        </div>\r\n        <div class=\"alert alert-success\" *ngIf=\"updateOnSuccess\">Great achievement! Record updated!!</div>\r\n      </div> \r\n    </form>\r\n  </div>\r\n</div>\r\n<!--Achievement/Awards Popup modal ends -->"

/***/ }),

/***/ "./src/app/components/profile/achievements/achievements-popup/achievements-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsPopupComponent = /** @class */ (function () {
    function AchievementsPopupComponent() {
        // awardTitle = String;
        this.awardTitle = "Boo Brilliant Designer";
        this.awardYear = String;
        this.updateOnSuccess = false;
    }
    AchievementsPopupComponent.prototype.ngOnInit = function () { };
    AchievementsPopupComponent.prototype.hideAchieveModal = function () {
        var achievePopup = document.querySelector("#achieve-newPopup");
        achievePopup.setAttribute("style", "display:none");
        var achieveEditPopup = document.querySelector("#achieve-editPopup");
        achieveEditPopup.setAttribute("style", "display:none");
    };
    AchievementsPopupComponent.prototype.update = function () {
        var updateAchievements = {
            AwardTitle: this.awardTitle
            // AwardMonth: this.awardMonth
        };
    };
    AchievementsPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "achievements-popup",
            template: __webpack_require__("./src/app/components/profile/achievements/achievements-popup/achievements-popup.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/achievements/achievements-popup/achievements-popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AchievementsPopupComponent);
    return AchievementsPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/achievements/achievements.component.css":
/***/ (function(module, exports) {

module.exports = "/* Achievement Container */\r\n.header {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.eye-icon {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 60px;\r\n}\r\n.edit-icon {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  -webkit-transform: scale(1.8);\r\n          transform: scale(1.8);\r\n}\r\n.edit-icon:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(2);\r\n          transform: scale(2);\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.edit-popup {\r\n  color: darkgoldenrod;\r\n  -webkit-transform: scale(.8);\r\n          transform: scale(.8);\r\n}\r\n.edit-popup:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.achSection {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-areas: \"aDate econtent econtent econtent\";\r\n}\r\n.econtent {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: econtent;\r\n}\r\n.ach-date {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: aDate;\r\n}\r\n/* Text */\r\np {\r\n  margin: 10px 10px 10px 0;\r\n}\r\n/* Media Queries */\r\n@media screen and (max-width: 650px) {\r\n  .achSection {\r\n        grid-template-areas:\r\n      \"aDate aDate aDate .\"\r\n      \"econtent econtent econtent econtent\";\r\n  }\r\n\r\n  /* Redeclare Grid Areas for Compiling */\r\n\r\n  .econtent {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: econtent;\r\n  }\r\n\r\n  .ach-date {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: aDate;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/achievements/achievements.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Achievements Start -->\r\n\r\n<!-- Header -->\r\n<div class=\"header\">\r\n  <i class=\"fas fa-eye eye-icon \"></i>\r\n  <div class=\"edit-btn-cont\" (click)=\"showAchieveModal()\">\r\n    <i class=\"fas fa-plus edit-icon\"></i>\r\n  </div>\r\n  <h1 class=\"section-header-text\">Awards</h1>\r\n</div>\r\n<!-- Achievements Content -->\r\n<div class=\"achSection\">\r\n  <p class=\"date-text ach-date\">Mar 2018</p>\r\n\r\n  <div class=\"econtent\">\r\n    <h3 class=\"subhead-1-text \">Boo Brilliant Designer\r\n        <!-- <div class=\"edit-btn-cont\" > --> \r\n      <i class=\"fas fa-edit edit-popup \" (click)=\"showAchieveEditModal()\"></i>\r\n    </h3>\r\n    <p class=\"body-text \">mmodi voluptate obcaecati dignissimos quae illo officia autem!</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"achSection\">\r\n  <p class=\"date-text ach-date\">Jan 2018</p>\r\n  <div class=\"econtent\">\r\n    <h3 class=\"subhead-1-text \">Awesome Software Engineer\r\n        <i class=\"fas fa-edit edit-popup \"></i>\r\n    </h3>\r\n    <p class=\"body-text \">Lorem ipsum doptate obcaecati dignissimos quae illo officia autem!</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n\r\n<!-- Achievements End -->"

/***/ }),

/***/ "./src/app/components/profile/achievements/achievements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent() {
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    AchievementsComponent.prototype.showAchieveModal = function () {
        var achievePopup = document.querySelector('#achieve-newPopup');
        achievePopup.setAttribute('style', 'display:flex; align-items:center;');
        // const achievehidePopup = document.querySelector('#achieve-editPopup');
        // achievehidePopup.setAttribute("style", "display:none");
    };
    AchievementsComponent.prototype.showAchieveEditModal = function () {
        var achieveEditPopup = document.querySelector('#achieve-editPopup');
        achieveEditPopup.setAttribute('style', 'display:flex; align-items:center;');
        // const achievehidePopup = document.querySelector('#achieve-newPopup');
        // achievehidePopup.setAttribute("style", "display:none");
    };
    AchievementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-achievements',
            template: __webpack_require__("./src/app/components/profile/achievements/achievements.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/achievements/achievements.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/education/education-popup/education-popup.component.css":
/***/ (function(module, exports) {

module.exports = ".popup-bg {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  z-index: 10000;\r\n  display: none;\r\n}\r\n.close-btn {\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.close-modal-btn {\r\n    height: 25px;\r\n    width: 25px;\r\n    cursor: pointer;\r\n    margin: 10px;\r\n  }\r\n.close-btn {\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n/* Education Popup grid declaration */\r\n.inputs {\r\n    margin: 15px; \r\n    display: -ms-grid; \r\n    display: grid;\r\n    grid-gap: 10px;\r\n    -ms-grid-columns: 1fr  1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr  1fr 1fr 1fr 1fr;\r\n        grid-template-areas: \r\n    \"eduLabel eduLabel  . . .\"\r\n    \"edustartMonth edustartYear  insName insName insName\"\r\n    \"expEndLabel expEndLabel study study degree\"\r\n    \"endMonth endYear . . .\"\r\n    \"current . eduText eduText eduText\";\r\n  }\r\n.eduLabel {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: eduLabel;\r\n  }\r\n.edustartMonth{\r\n    border: none;\r\n    border-radius: 8px;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: edustartMonth;\r\n  }\r\n.edustartYear{\r\n    border: none;\r\n    border-radius: 8px;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    grid-area: edustartYear;\r\n  }\r\n.insName{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: insName;\r\n  }\r\n.current{\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 1;\r\n    grid-area: current;\r\n  }\r\n.study {\r\n    -ms-grid-row:3;\r\n    -ms-grid-column:3;\r\n    -ms-grid-column-span:2;\r\n    grid-area:study;\r\n  }\r\n.degree {\r\n    border: none;\r\n    border-radius: 8px;\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 5;\r\n    grid-area: degree;\r\n  }\r\n.eduText {\r\n    width: 100%;\r\n    padding: 0;\r\n    border: none;\r\n    border-radius: 8px;\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: eduText;\r\n    font: Tahoma, sans-serif;\r\n  }\r\n.close-modal-btn{\r\n    height: 25px;\r\n    width: 25px;\r\n    cursor: pointer;\r\n    margin: 10px;\r\n  }\r\n.close-btn{\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.button-section{\r\n    text-align: center;\r\n    padding: 10px 0px 10px 0px;\r\n  }\r\nbutton{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 13pt;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    border: none;\r\n    color: #757575;\r\n    cursor: pointer;\r\n  }\r\n.expEndLabel {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: expEndLabel;\r\n  }\r\n.endMonth {\r\n    border: none;\r\n    border-radius: 8px;\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    grid-area: endMonth;\r\n  }\r\n.endYear {\r\n    border: none;\r\n    border-radius: 8px;\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 2;\r\n    grid-area: endYear;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/profile/education/education-popup/education-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"education-popup\" class=\"popup-bg\">\r\n  <div class=\"popup-grid\">\r\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit\" class=\"popup-modal form\">\r\n      <div class=\"close-modal-btn\" (click)=\"hideEduModal()\">\r\n        <i class=\"fas fa-times close-btn\"></i>\r\n      </div>\r\n      <div class=\"inputs\">\r\n        <h4 class=\"form-input-label eduLabel\">Date of Start</h4>\r\n        <select class=\"edustartMonth\" name=\"monthEnd\">\r\n          <option>MM</option>\r\n          <option>Jan</option>\r\n          <option>Feb</option>\r\n          <option>March</option>\r\n        </select>\r\n        <select class=\"edustartYear\" name=\"yrEnd\">\r\n          <option>YYYY</option>\r\n          <option>2000</option>\r\n          <option>2001</option>\r\n          <option>2002</option>\r\n        </select>\r\n        <input type=\"text\" class=\"form-input insName\" placeholder=\"Name of Institution\">\r\n        <h4 class=\"form-input-label expEndLabel\">Date of completion</h4>\r\n        <select name=\"endMonth\" class=\"endMonth\">\r\n          <option selected value=\"\">Month</option>\r\n          <option>January</option>\r\n          <option>Febraury</option>\r\n          <option selected>March</option>\r\n          <option>April</option>\r\n          <option>May</option>\r\n          <option>June</option>\r\n          <option>July</option>\r\n          <option>August</option>\r\n          <option>September</option>\r\n          <option>October</option>\r\n          <option>November</option>\r\n          <option>December</option>\r\n        </select>\r\n        <select name=\"endYear\" class=\"endYear\">\r\n          <option selected value=\"\">Month</option>\r\n          <option>2010</option>\r\n          <option>2011</option>\r\n          <option selected>2012</option>\r\n          <option>2013</option>\r\n          <option>2014</option>\r\n          <option>2015</option>\r\n          <option>2016</option>\r\n          <option>2017</option>\r\n          <option>2018</option>\r\n          <option>2019</option>\r\n          <option>2020</option>\r\n          <option>2011</option>\r\n        </select>\r\n        <div class=\"current\">\r\n          <input type=\"checkbox\">\r\n          <label class=\"form-input-label\">Current :</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-input study\" placeholder=\"Field of Study\">\r\n        <select name=\"degreeSelect\" class=\"degree\" placeholder=\"Degree\">\r\n          <option>Masters</option>\r\n          <option>Under Graduate</option>\r\n          <option>High School</option>\r\n        </select>\r\n        <textarea type=\"text\" class=\"textarea-styled eduText\" maxlength=\"500\" placeholder=\"Additional info (Optional)\"></textarea>\r\n      </div>\r\n      <div class=\"button-section\">\r\n        <button>Save!</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div id=\"education-editPopup\" class=\"popup-bg\">\r\n  <div class=\"popup-grid\">\r\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit\" class=\"popup-modal form\">\r\n      <div class=\"close-modal-btn\" (click)=\"hideEduModal()\">\r\n        <i class=\"fas fa-times close-btn\"></i>\r\n      </div>\r\n      <div class=\"inputs\">\r\n        <h4 class=\"form-input-label eduLabel\">Date of Completion</h4>\r\n        <select class=\"edustartMonth\" name=\"monthEnd\">\r\n          <option value=\"\">Month</option>\r\n          <option selected>January</option>\r\n          <option>Febraury</option>\r\n          <option>March</option>\r\n          <option>April</option>\r\n          <option>May</option>\r\n          <option>June</option>\r\n          <option>July</option>\r\n          <option>August</option>\r\n          <option>September</option>\r\n          <option>October</option>\r\n          <option>November</option>\r\n          <option>December</option>\r\n        </select>\r\n        <select class=\"edustartYear\" name=\"yrEnd\">\r\n          <option>2010</option>\r\n          <option>2011</option>\r\n          <option>2012</option>\r\n          <option>2013</option>\r\n          <option>2014</option>\r\n          <option>2015</option>\r\n          <option selected>2016</option>\r\n          <option>2017</option>\r\n          <option>2018</option>\r\n          <option>2019</option>\r\n          <option>2020</option>\r\n          <option>2021</option>\r\n        </select>\r\n        <select name=\"endMonth\" class=\"endMonth\">\r\n          <option value=\"\">Month</option>\r\n          <option>January</option>\r\n          <option>Febraury</option>\r\n          <option>March</option>\r\n          <option>April</option>\r\n          <option>May</option>\r\n          <option>June</option>\r\n          <option>July</option>\r\n          <option>August</option>\r\n          <option>September</option>\r\n          <option>October</option>\r\n          <option>November</option>\r\n          <option selected>December</option>\r\n        </select>\r\n        <select name=\"endYear\" class=\"endYear\">\r\n          <option value=\"\">Year</option>\r\n          <option>2010</option>\r\n          <option>2011</option>\r\n          <option>2012</option>\r\n          <option>2013</option>\r\n          <option>2014</option>\r\n          <option>2015</option>\r\n          <option>2016</option>\r\n          <option selected>2017</option>\r\n          <option>2018</option>\r\n          <option>2019</option>\r\n          <option>2020</option>\r\n          <option>2021</option>\r\n        </select>\r\n        <input type=\"text\" class=\"form-input insName\" placeholder=\"Name of Institution\" value=\"California University - Fresno\">\r\n        <div class=\"current\">\r\n          <input type=\"checkbox\">\r\n          <label class=\"form-input-label\">Current :</label>\r\n        </div>\r\n        <input type=\"text\" class=\"form-input study\" placeholder=\"Field of Study\" value=\"Computer Science\">\r\n        <select name=\"degreeSelect\" class=\"degree\" placeholder=\"Degree\">\r\n          <option>Masters</option>\r\n          <option>Under Graduate</option>\r\n          <option>High School</option>\r\n        </select>\r\n        <textarea type=\"text\" class=\"textarea-styled eduText\" maxlength=\"500\" placeholder=\"Additional info (Optional)\"></textarea>\r\n      </div>\r\n      <div class=\"button-section\">\r\n        <button>Save!</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/education/education-popup/education-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationPopupComponent = /** @class */ (function () {
    function EducationPopupComponent() {
    }
    EducationPopupComponent.prototype.ngOnInit = function () { };
    // hideEduModal
    EducationPopupComponent.prototype.hideEduModal = function () {
        var eduPopup = document.querySelector("#education-popup");
        eduPopup.setAttribute("style", "display:none");
        var eduEditPopup = document.querySelector("#education-editPopup");
        eduEditPopup.setAttribute("style", "display:none");
    };
    EducationPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "education-popup",
            template: __webpack_require__("./src/app/components/profile/education/education-popup/education-popup.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/education/education-popup/education-popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationPopupComponent);
    return EducationPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/education/education.component.css":
/***/ (function(module, exports) {

module.exports = "/* Education Container */\r\n\r\n.header {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.eye-icon {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 40px;\r\n}\r\n\r\n.edit-icon {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 0;\r\n  -webkit-transform: scale(1.8);\r\n          transform: scale(1.8);\r\n}\r\n\r\n.edit-popup {\r\n  color: darkgoldenrod;\r\n  -webkit-transform: scale(.8);\r\n          transform: scale(.8);\r\n}\r\n\r\n.edit-popup:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.edit-icon:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(2);\r\n          transform: scale(2);\r\n  -webkit-transition: all .3s;\r\n  transition: all .3s;\r\n}\r\n\r\n.eduSection {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-areas: \"eDate econtent econtent econtent\";\r\n}\r\n\r\n.econtent {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: econtent;\r\n}\r\n\r\n.education-date {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: eDate;\r\n}\r\n\r\n.date-text {\r\n  margin-bottom: -10px;\r\n}\r\n\r\n/* Media Queries */\r\n\r\n@media screen and (max-width: 650px){\r\n\r\n  .eduSection {\r\n          grid-template-areas:\r\n      \"eDate eDate eDate .\"\r\n      \"econtent econtent econtent econtent\";\r\n  }\r\n\r\n  p.body-text {\r\n      margin:10px 10px 30px 0;\r\n  }\r\n\r\n  /* Redeclare Grid Areas for Compiling */\r\n  .econtent {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: econtent;\r\n  }\r\n\r\n  .education-date {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: eDate;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/profile/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Education Start -->\r\n\r\n<!-- Header -->\r\n<div class=\"header\">\r\n  <i class=\"fas fa-eye eye-icon \"></i>\r\n  <div class=\"edit-btn-cont\" (click)=\"showEduModal()\">\r\n      <i class=\"fas fa-plus edit-icon\"></i>\r\n    </div>\r\n  <h1 class=\"section-header-text\">Education</h1>\r\n</div>\r\n\r\n<!-- Edu Content -->\r\n<div class=\"eduSection\">\r\n  <label class=\"date-text education-date\">Jan 2016 - Dec 2017</label>\r\n  <div class=\"econtent\">\r\n    <h3 class=\"subhead-1-text\">California University - Fresno\r\n        <i class=\"fas fa-edit edit-popup \" (click)=\"showEduEditModal()\"></i> \r\n    </h3>\r\n    <h4 class=\"subhead-2-text\">Computer Science  <b> Masters </b></h4>\r\n    <p class=\"body-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, ipsum sint iusto vero temporibus unde harum at\r\n      odio in fuga, eaque commodi voluptate obcaecati dignissimos quae illo officia autem!</p>\r\n  </div>\r\n</div>\r\n<div class=\"eduSection\">\r\n  <label class=\"date-text education-date\">Jan 2014 - Dec 2015</label>\r\n  <div class=\"econtent\">\r\n    <h3 class=\"subhead-1-text\">Fresno University - Fresno\r\n        <i class=\"fas fa-edit edit-popup \"></i>\r\n    </h3>\r\n    <h4 class=\"subhead-2-text\">Diploma</h4>\r\n    <p class=\"body-text \">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, ipsum sint iusto vero temporibus unde harum at\r\n      odio in fuga, eaque commodi voluptate obcaecati dignissimos quae illo officia autem!</p>\r\n  </div>\r\n</div>\r\n<!-- Education End -->"

/***/ }),

/***/ "./src/app/components/profile/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent.prototype.showEduModal = function () {
        var eduPopup = document.querySelector('#education-popup');
        eduPopup.setAttribute('style', 'display:flex; align-items:center;');
    };
    EducationComponent.prototype.showEduEditModal = function () {
        var eduEditPopup = document.querySelector('#education-editPopup');
        eduEditPopup.setAttribute('style', 'display:flex; align-items:center;');
    };
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__("./src/app/components/profile/education/education.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/experience/experience-popup/experience-popup.component.css":
/***/ (function(module, exports) {

module.exports = "/* Experience pop up modal  */\r\n.inputs {\r\n  margin: 25px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n      grid-template-areas:\r\n    \"expStartLabel . . . .\"\r\n    \"startMonth startYear companyName companyName companyName\"\r\n    \"expEndLabel expEndLabel title title title \"\r\n    \"endMonth endYear . . .\"\r\n    \"current . addInfo addInfo addInfo\";\r\n}\r\n.expStartLabel {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: expStartLabel;\r\n}\r\n.expEndLabel {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 2;\r\n  grid-area: expEndLabel;\r\n}\r\n.startMonth {\r\n  border: none;\r\n  border-radius: 8px;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 1;\r\n  grid-area: startMonth;\r\n}\r\n.startYear {\r\n  border: none;\r\n  border-radius: 8px;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 2;\r\n  grid-area: startYear;\r\n}\r\n.endMonth {\r\n  border: none;\r\n  border-radius: 8px;\r\n  -ms-grid-row: 4;\r\n  -ms-grid-column: 1;\r\n  grid-area: endMonth;\r\n}\r\n.endYear {\r\n  border: none;\r\n  border-radius: 8px;\r\n  -ms-grid-row: 4;\r\n  -ms-grid-column: 2;\r\n  grid-area: endYear;\r\n}\r\n.companyName {\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: companyName;\r\n}\r\n.title {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: title;\r\n}\r\n.current {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 1;\r\n  grid-area: current;\r\n}\r\n.addInfo {\r\n  -ms-grid-row: 5;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: addInfo;\r\n  width: 100%;\r\n  padding: 0;\r\n  border: none;\r\n  border-radius: 8px;\r\n}\r\n.button-section {\r\n  text-align: center;\r\n  padding: 10px 0px 10px 0px;\r\n}\r\nbutton {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 13pt;\r\n  padding: 5px 15px;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  border: none;\r\n  color: #757575;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/experience/experience-popup/experience-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-grid\">\r\n  <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit\" class=\"popup-modal form\">\r\n    <div class=\"close-modal-btn\" (click)=\"hideExpModal()\">\r\n      <i class=\"fas fa-times close-btn\"></i>\r\n    </div>\r\n    <div class=\"inputs\">\r\n      <h4 class=\"form-input-label expStartLabel\">Date of start</h4>\r\n      <input type=\"text\" class=\"form-input companyName\" placeholder=\"Company Name\">\r\n      <select name=\"startMonth\" class=\"startMonth\">\r\n        <option>MM</option>\r\n        <option>Jan</option>\r\n        <option>Feb</option>\r\n        <option>March</option>\r\n      </select>\r\n      <select name=\"startYear\" class=\"startYear\">\r\n        <option>YYYY</option>\r\n        <option>2000</option>\r\n        <option>2001</option>\r\n        <option>2002</option>\r\n      </select>\r\n      <input type=\"text\" class=\"form-input title\" placeholder=\"Title\">\r\n      <h4 class=\"form-input-label expEndLabel\">Date of completion</h4>\r\n      <select name=\"endMonth\" class=\"endMonth\">\r\n        <option>MM</option>\r\n        <option>Jan</option>\r\n        <option>Feb</option>\r\n        <option>March</option>\r\n      </select>\r\n      <select name=\"endYear\" class=\"endYear\">\r\n        <option>YYYY</option>\r\n        <option>2000</option>\r\n        <option>2001</option>\r\n        <option>2002</option>\r\n      </select>\r\n      <div class=\"current\">\r\n        <input type=\"checkbox\">\r\n        <label class=\"form-input-label\">Current :</label>\r\n      </div>\r\n      <textarea type=\"text\" class=\"textarea-styled addInfo\" maxlength=\"500\" placeholder=\"Additional info (Optional)\"></textarea>\r\n    </div>\r\n    <div class=\"button-section\">\r\n      <button>Save!</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/experience/experience-popup/experience-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperiencePopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperiencePopupComponent = /** @class */ (function () {
    function ExperiencePopupComponent() {
    }
    ExperiencePopupComponent.prototype.ngOnInit = function () { };
    ExperiencePopupComponent.prototype.hideExpModal = function () {
        var experiencePopup = document.querySelector("#experience-popup");
        experiencePopup.setAttribute("style", "display:none");
    };
    ExperiencePopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "experience-popup",
            template: __webpack_require__("./src/app/components/profile/experience/experience-popup/experience-popup.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/experience/experience-popup/experience-popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperiencePopupComponent);
    return ExperiencePopupComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/experience/experience.component.css":
/***/ (function(module, exports) {

module.exports = "/* Experience Container */\r\n/* Education Container */\r\n.header {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.eye-icon {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 40px;\r\n}\r\n.edit-icon {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 0;\r\n  -webkit-transform: scale(1.8);\r\n          transform: scale(1.8);\r\n}\r\n.edit-icon:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(2);\r\n          transform: scale(2);\r\n  -webkit-transition: all .3s;\r\n  transition: all .3s;\r\n}\r\n.expSection {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-areas: \"eDate econtent econtent econtent\";\r\n}\r\n.econtent {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 3;\r\n  grid-area: econtent;\r\n}\r\n.exp-date {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  grid-area: eDate;\r\n}\r\n/* Text */\r\np {\r\n  margin: 10px 10px 10px 0;\r\n}\r\n.date-text {\r\n  margin-bottom: -10px;\r\n}\r\n/* Media Queries */\r\n@media screen and (max-width: 650px) {\r\n  .expSection {\r\n        grid-template-areas:\r\n      \"eDate eDate eDate .\"\r\n      \"econtent econtent econtent econtent\";\r\n  }\r\n\r\n  p.body-text {\r\n    margin: 10px 10px 30px 0;\r\n  }\r\n\r\n  /* Redeclare Grid Areas for Compiling */\r\n  .econtent {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: econtent;\r\n  }\r\n\r\n  .exp-date {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: eDate;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Experience Start -->\r\n\r\n<!-- Header -->\r\n<div class=\"header\">\r\n    <i class=\"fas fa-eye eye-icon\"></i>\r\n  <div class=\"edit-btn-cont\" (click)=\"showExpModal()\">\r\n    <i class=\"fas fa-edit edit-icon\"></i>\r\n  </div>\r\n  <h1 class=\"section-header-text\">Experience</h1>\r\n</div>\r\n<!-- Exp Content -->\r\n<div class=\"expSection\">\r\n  <label class=\"date-text exp-date\">Mar 2018 - Current</label>\r\n  <div class=\"econtent\">\r\n    <h3 class=\"subhead-1-text \">Shift3 - Fresno</h3>\r\n    <h4 class=\"subhead-2-text \">UI designer</h4>\r\n    <p class=\"body-text \">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, ipsum sint iusto vero temporibus unde harum at\r\n      odio in fuga, eaque commodi voluptate obcaecati dignissimos quae illo officia autem!</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"expSection\">\r\n  <label class=\"date-text exp-date\">Jan 2018 - Feb 2018</label>\r\n  <div class=\"econtent\">\r\n    <h3 class=\"subhead-1-text \">Bitwise Industries - Fresno</h3>\r\n    <h4 class=\"subhead-2-text \">Software Engineer</h4>\r\n    <p class=\"body-text \">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam, ipsum sint iusto vero temporibus unde harum at\r\n      odio in fuga, eaque commodi voluptate obcaecati dignissimos quae illo officia autem!</p>\r\n  </div>\r\n</div>\r\n<!-- Experience End -->"

/***/ }),

/***/ "./src/app/components/profile/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent.prototype.showExpModal = function () {
        var experience = document.querySelector('#experience-popup');
        experience.setAttribute('style', 'display:flex; align-items:center;');
    };
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__("./src/app/components/profile/experience/experience.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "/* Nav Container */\r\n.navStyle {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #424242;\r\n  color: #fff;\r\n  text-align: center;\r\n  height: 100vh;\r\n}\r\n/* Image */\r\n.img-container {\r\n  width: 100%;\r\n  pointer-events: none;\r\n}\r\n.img-round {\r\n  width: 200px;\r\n  border-radius: 80%;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  pointer-events: none;\r\n}\r\n/* Nav List */\r\na:hover {\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n  -webkit-text-decoration-color: rgba(255, 184, 8, 0.85);\r\n          text-decoration-color: rgba(255, 184, 8, 0.85);\r\n}\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navStyle\"><!-- Nav Start -->\r\n\r\n    <!-- Image -->\r\n    <div class=\"img-container\">\r\n        <img class=\"img-round\" src=\"../../../../assets/img/default-profile.png\" alt=\"\">\r\n    </div>\r\n\r\n    <!-- Nav -->\r\n    <ul class=\"nav-text\">\r\n        <li><a href=\"#\">About</a></li>\r\n        <li><a href=\"#\">Education</a></li>\r\n        <li><a href=\"#\">Experience</a></li>\r\n        <li><a href=\"#\">Project</a></li>\r\n        <li><a href=\"#\">Skills</a></li>\r\n        <li><a href=\"#\">Awards</a></li>\r\n        <li><a href=\"#\">Signout</a></li>\r\n    </ul>\r\n\r\n</div><!-- Nav End -->\r\n"

/***/ }),

/***/ "./src/app/components/profile/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    // Properties
    // Methods
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/profile/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "/* Profile Page Container */\r\n.profile-grid-container{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-areas:\r\n    \"nav nav co co co co co co\";\r\n}\r\n/* Nav */\r\n.img-container {\r\n    display: none;\r\n    width: 100%;\r\n}\r\n.side-nav {\r\n    position: fixed;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: nav;\r\n    width: 25%;\r\n    z-index: 9998;\r\n}\r\ni.nav-icon {\r\n    font-size: 2em;\r\n    position: fixed;\r\n    top: 10px;\r\n    left: 10px;\r\n    z-index: 9999;\r\n    cursor: pointer;\r\n    color: #424242;\r\n}\r\ni.nav-icon.fa-arrow-left {\r\n    color: #ffb808;\r\n}\r\n/* Main Content Container */\r\n.content {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 6;\r\n    grid-area: co;\r\n    margin: 50px;\r\n}\r\n/* Modal */\r\n.popup-bg {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n    z-index: 10000;\r\n    display: none;\r\n}\r\n.popup-modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform:translate(-50%,-50%);\r\n            transform:translate(-50%,-50%);\r\n    width: 900px;\r\n}\r\n.close-modal-btn {\r\n    height: 25px;\r\n    width: 25px;\r\n    cursor: pointer;\r\n    margin: 10px;\r\n}\r\n.close-modal-btn i{\r\n    font-size: 40px;\r\n}\r\n.close-btn {\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.inputs {\r\n    margin: 15px 25px;\r\n}\r\n.form-input {\r\n    padding: 0px;\r\n}\r\n.program-popup-section {\r\n    margin: 25px;\r\n}\r\n.program-popup-section i {\r\n    font-size: 50px;\r\n}\r\n.icons-section {\r\n    margin: 10px 0px;\r\n}\r\n.skills-container {\r\n    margin: 10px 0px;\r\n}\r\n.skill-bubble {\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    display: inline-block;\r\n    margin: 3px;\r\n}\r\n.skill-bubble p {\r\n    margin: 7px;\r\n    font-size: 12pt;\r\n    display: inline-block;\r\n}\r\n.close {\r\n    display: inline;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n}\r\n.icon {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n/* Media Queries */\r\n@media screen and (min-width: 1001px) {\r\n\r\n    i.nav-icon {\r\n        display: none;\r\n    }\r\n\r\n}\r\n@media screen and (max-width: 1000px) {\r\n\r\n    .profile-grid-container {\r\n            grid-template-areas:\r\n        \"co co co co co co co co\";\r\n    }\r\n\r\n    i.nav-icon {\r\n        display: block;\r\n    }\r\n\r\n    .side-nav{\r\n        position: fixed;\r\n        width: 75%;\r\n        -webkit-box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.35);\r\n                box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.35);\r\n    }\r\n\r\n    .img-container {\r\n        display: block;\r\n    }\r\n\r\n    .img-round {\r\n    width: 200px;\r\n    border-radius: 80%;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    border: 4px solid #ffb808;\r\n    margin: 0 auto;\r\n    }\r\n\r\n    /* Redeclare Grid Areas for Compiling */\r\n    .content {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n        -ms-grid-column-span: 8;\r\n        grid-area: co;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Profile Page -->\r\n\r\n<!-- Mobile nav event listener for window width -->\r\n<div (window:resize)=\"toggleNav($event)\">\r\n\r\n  <!-- Modal Start -->\r\n  <!-- About Popup -->\r\n  <div id=\"about-popup\" class=\"popup-bg\">\r\n    <about-popup></about-popup>\r\n  </div>\r\n  <!--Education popup-->\r\n  <!-- <div id=\"education-popup\" class=\"popup-bg\"> -->\r\n  <div>\r\n    <education-popup></education-popup>\r\n  </div>\r\n  <!-- Experience popup -->\r\n  <div id=\"experience-popup\" class=\"popup-bg\">\r\n    <experience-popup></experience-popup>\r\n  </div>\r\n  <!--Project popup-->\r\n  <div id=\"projects-popup\" class=\"popup-bg\">\r\n    <projects-popup></projects-popup>\r\n  </div>\r\n  <!--Skills popup -->\r\n  <div id=\"skills-popup\" class=\"popup-bg\">\r\n    <skills-popup></skills-popup>\r\n  </div>\r\n  <!-- Achievements popup -->\r\n  <div>\r\n    <achievements-popup></achievements-popup>\r\n  </div>\r\n\r\n  <!-- Modal End -->\r\n\r\n  <div class=\"profile-grid-container\">\r\n    <!-- Profile Page Start -->\r\n\r\n    <i class=\"fas fa-bars nav-icon\" (click)=\"showNav()\" *ngIf=\"!menu\"></i>\r\n    <!-- Hamburger Icon -->\r\n    <i class=\"fas fa-arrow-left nav-icon\" (click)=\"hideNav()\" *ngIf=\"menu\"></i>\r\n    <!-- Arrow Icon -->\r\n\r\n    <!-- Nav Comp. -->\r\n    <div class=\"side-nav\" *ngIf=\"menu\">\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n\r\n    <!-- Profile Content -->\r\n    <div class=\"content\">\r\n      <div class=\"img-container\">\r\n        <img class=\"img-round\" src=\"../../../../assets/img/ProfilePic.JPG\" alt=\"\">\r\n      </div>\r\n      <app-about></app-about>\r\n      <app-education></app-education>\r\n      <app-experience></app-experience>\r\n      <app-projects></app-projects>\r\n      <app-skills></app-skills>\r\n      <app-achievements></app-achievements>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Profile Page End -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    // Methods
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.menu = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            return false;
        });
        this.newSkill = { languages: '', otherSkills: '' };
        // Check window size on page load
        var screenWidth = window.innerWidth;
        // If window is larger than 1000px then show desktop menu, else show mobile menu
        screenWidth >= 1000 ? this.showNav() : this.hideNav();
    };
    // Check window width on resize. Larger than 1000px show nave, else hide nav
    ProfileComponent.prototype.toggleNav = function ($event) {
        $event.target.innerWidth >= 1000 ? this.showNav() : this.hideNav();
    };
    ProfileComponent.prototype.hideModal = function () {
        var popup = document.querySelector('.popup-bg');
        popup.setAttribute('style', 'display: none');
    };
    // Display Nav for Desktop
    ProfileComponent.prototype.showNav = function () {
        this.menu = true;
    };
    // Hide Nav in Hamburger Menu for Mobile
    ProfileComponent.prototype.hideNav = function () {
        this.menu = false;
    };
    ProfileComponent.prototype.onSubmit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/projects/projects-popup/projects-popup.component.css":
/***/ (function(module, exports) {

module.exports = ".close-btn{\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 20px;\r\n}\r\n.proj-inputs{\r\n    /* border: 1px dashed red; */\r\n    margin: 0px 25px 30px 25px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.add-img{\r\n    width: 200px; \r\n    height: 200px;\r\n    background-color: #fff;\r\n    color: #757575;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    cursor: pointer;\r\n}\r\n.add-img p{\r\n    font-size: 18pt;\r\n    margin: 10px;\r\n}\r\n.input-fields{\r\n    width: 100%;\r\n    /* border: 1px dashed blue; */\r\n    margin: 0px;\r\n}\r\n.form-textarea{\r\n    width: 100%;\r\n    font-size: 13pt;\r\n    font-weight: 300;\r\n    border-radius: 5px;\r\n    border: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    resize: none;\r\n}\r\n.form-input{\r\n    margin: 10px 0px;\r\n}\r\n.submit-btn{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 13pt;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    border: none;\r\n    color: #757575;\r\n    cursor: pointer;\r\n    margin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/projects/projects-popup/projects-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-grid\">\r\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"popup-modal form\">\r\n      <div class=\"close-modal-btn\" (click)=\"hideProjectsModal()\">\r\n        <i class=\"fas fa-times close-btn\"></i>\r\n      </div>\r\n      <div class=\"proj-inputs\">\r\n        <div class=\"add-img\" type=\"file\" placeholder=\"Add a Project Image\">\r\n            <i class=\"fas fa-plus plus-sign fa-3x\"></i>\r\n            <p>Add a Project Image</p>\r\n        </div>\r\n        <input type=\"file\" (change)=\"onFileSelected($event)\">\r\n        <div class=\"input-fields\">\r\n          <input class=\"form-input first-name\"type=\"text\" placeholder=\"Title of Project\">\r\n          <textarea class=\"form-textarea\" rows=\"5\" placeholder=\"Description of Project\"></textarea>\r\n          <input class=\"form-input first-name\"type=\"text\" placeholder=\"Project URL\">\r\n        </div>\r\n        <div class=\"btn-section\">\r\n          <button class=\"submit-btn\" type=\"submit\">Save Changes</button> \r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/projects/projects-popup/projects-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsPopupComponent = /** @class */ (function () {
    function ProjectsPopupComponent() {
        this.projectImg = null;
    }
    ProjectsPopupComponent.prototype.ngOnInit = function () {
    };
    ProjectsPopupComponent.prototype.hideProjectsModal = function () {
        var projectsPopup = document.querySelector('#projects-popup');
        projectsPopup.setAttribute("style", "display:none");
        console.log('works');
    };
    ProjectsPopupComponent.prototype.onFileSelected = function (event) {
        this.projectImg = event.target.files[0];
        console.log(this.projectImg);
        var imgBackground = document.querySelector('.add-img');
        imgBackground.setAttribute("style", "background: url(this.projectImg)");
    };
    ProjectsPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'projects-popup',
            template: __webpack_require__("./src/app/components/profile/projects/projects-popup/projects-popup.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/projects/projects-popup/projects-popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsPopupComponent);
    return ProjectsPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = "/* Project Container */\r\n.projects-comp {\r\n  width: 100%;\r\n}\r\n/* Header */\r\n.comp-header {\r\n  position: relative;\r\n}\r\n/* Main Content */\r\n.proj-content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n.project {\r\n  position: relative;\r\n  width: 230px;\r\n  height: 230px;\r\n  margin: 10px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 1px 1px 4px -1px #424242;\r\n          box-shadow: 1px 1px 4px -1px #424242;\r\n}\r\nh2, p {\r\n  width: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n}\r\nh2 {\r\n  top: 10px;\r\n}\r\nh2:hover {\r\n  cursor: pointer;\r\n}\r\np {\r\n  top: 40px;\r\n  pointer-events: none;\r\n}\r\nimg {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n}\r\n/* Hover Overlay */\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-transition: all .4s;\r\n  transition: all .4s;\r\n  opacity: 0;\r\n}\r\n.overlay:hover {\r\n  opacity: 1;\r\n}\r\n.color {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(220, 220, 220, .8);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n/* FontAwesome Icons */\r\ni {\r\n  color: #424242;\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 10px;\r\n  -webkit-transform: scale(1.8);\r\n          transform: scale(1.8);\r\n  -webkit-transform-origin: bottom right;\r\n          transform-origin: bottom right;\r\n  -webkit-transition: all .3s;\r\n  transition: all .3s;\r\n}\r\n.overlay i:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(2);\r\n          transform: scale(2);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-comp\"><!-- Project Start -->\r\n\r\n  <!-- Header -->\r\n  <div class=\"comp-header\">\r\n    <h1 class=\"section-header-text\">Projects</h1>\r\n    <!-- Will need to add an *ngIf here to detect if content is present -->\r\n    <i class=\"fas fa-eye\"></i>\r\n    <!-- <i class=\"fas fa-eye hidden\"></i> -->\r\n  </div>\r\n\r\n  <!-- Project Content -->\r\n  <div class=\"proj-content\">\r\n\r\n    <!-- Placeholder Data -->\r\n    <div class=\"project\" (mouseenter)=\"toggle()\">\r\n      <img src=\"../../../../assets/img/placeholder-2.jpg\" alt=\"project des\">\r\n      <div class=\"overlay\" *ngIf=\"show\">\r\n        <div class=\"color\"></div>\r\n        <h2>Project One</h2>\r\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo architecto commodi harum deserunt quisquam cupiditate, animi eum quasi dolore ipsam.</p>\r\n        <div class=\"edit-btn-cont\" (click)=\"showModal()\">\r\n          <i class=\"fas fa-edit\"></i>\r\n        </div>\r\n      </div>\r\n     </div>\r\n\r\n     <div class=\"project\" (mouseenter)=\"toggle()\">\r\n      <img src=\"../../../../assets/img/placeholder-3.jpg\" alt=\"project des\">\r\n      <div class=\"overlay\" *ngIf=\"show\">\r\n        <div class=\"color\"></div>\r\n        <h2>Project Two</h2>\r\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo architecto commodi harum deserunt quisquam cupiditate, animi eum quasi dolore ipsam.</p>\r\n        <div class=\"edit-btn-cont\" (click)=\"showModal()\">\r\n          <i class=\"fas fa-edit\"></i>\r\n        </div>\r\n      </div>\r\n     </div>\r\n\r\n     <div class=\"project\" (mouseenter)=\"toggle()\">\r\n      <img src=\"../../../../assets/img/placeholder-4.jpg\" alt=\"project des\">\r\n      <div class=\"overlay\" *ngIf=\"show\">\r\n        <div class=\"color\"></div>\r\n        <h2>Project Three</h2>\r\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo architecto commodi harum deserunt quisquam cupiditate, animi eum quasi dolore ipsam.</p>\r\n        <div class=\"edit-btn-cont\" (click)=\"showModal()\">\r\n          <i class=\"fas fa-edit\"></i>\r\n        </div>\r\n      </div>\r\n     </div>\r\n\r\n     <div class=\"project\" (mouseenter)=\"toggle()\">\r\n      <img src=\"../../../../assets/img/placeholder-5.jpg\" alt=\"project des\">\r\n      <div class=\"overlay\" *ngIf=\"show\">\r\n        <div class=\"color\"></div>\r\n        <h2>Project Four</h2>\r\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo architecto commodi harum deserunt quisquam cupiditate, animi eum quasi dolore ipsam.</p>\r\n        <div class=\"edit-btn-cont\" (click)=\"showModal()\">\r\n          <i class=\"fas fa-edit\"></i>\r\n        </div>\r\n      </div>\r\n     </div>\r\n\r\n     <div class=\"project\" (mouseenter)=\"toggle()\">\r\n        <img src=\"../../../../assets/img/placeholder-3.jpg\" alt=\"project des\">\r\n        <div class=\"overlay\" *ngIf=\"show\">\r\n          <div class=\"color\"></div>\r\n          <h2>Project Five</h2>\r\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo architecto commodi harum deserunt quisquam cupiditate, animi eum quasi dolore ipsam.</p>\r\n          <div class=\"edit-btn-cont\" (click)=\"showModal()\">\r\n            <i class=\"fas fa-edit\"></i>\r\n          </div> \r\n        </div>\r\n       </div>\r\n\r\n  </div>\r\n\r\n</div><!-- Project End -->\r\n\r\n\r\n\r\n  <!-- loop through projects and populate component from DB -->\r\n  <!-- <div *ngFor=\"let project of projects\" class=\"proj-content\"> -->\r\n\r\n    <!-- <div class=\"project\" (mouseenter)=\"toggle()\"> -->\r\n      <!-- base64 string of saved img in DB -->\r\n      <!-- <img src=\"{{ project.img }}\" alt=\"{{ project.title }}\"> -->\r\n      <!-- project info for overlay -->\r\n      <!-- <div class=\"overlay\" *ngIf=\"show\"> -->\r\n        <!-- white bg overlay when hovered -->\r\n        <!-- <div class=\"color\"></div> -->\r\n        <!-- project link and title  -->\r\n        <!-- <a href=\"{{ project.url }}\"><h2>{{ project.title }}</h2></a>  -->\r\n        <!-- project desc. -->\r\n        <!-- <p>{{ project.description }}</p> -->\r\n        <!-- edit button -->\r\n        <!-- <i class=\"fas fa-edit\" (click)=\"displayModal()\"></i> -->\r\n      <!-- </div> -->\r\n    <!-- </div> -->\r\n\r\n  <!-- </div> end project content -->"

/***/ }),

/***/ "./src/app/components/profile/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    // Methods
    function ProjectsComponent() {
        // Properties
        this.show = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    // Toggle Overlay
    ProjectsComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    //Function for showing the pop up modal
    ProjectsComponent.prototype.showModal = function () {
        var skillsPopup = document.querySelector('#projects-popup');
        skillsPopup.setAttribute("style", "display:flex; align-items:center;");
        console.log('works');
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/components/profile/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/skills/skills-popup/skills-popup.component.css":
/***/ (function(module, exports) {

module.exports = ".inputs{\r\n    /* width: 100%; */\r\n    margin: 15px 25px;\r\n}\r\n.form-input{\r\n    padding: 0px;\r\n}\r\n.program-popup-section{\r\n    margin: 25px;\r\n    /* font-size: 50px; */\r\n}\r\n.program-popup-section i{\r\n    font-size: 50px;\r\n}\r\n.icons-section{\r\n    margin: 10px 0px;\r\n}\r\n.skills-container{\r\n    margin: 10px 0px;\r\n}\r\n.skill-bubble{\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    display: inline-block;\r\n    margin: 3px;\r\n}\r\n.skill-bubble p{\r\n    margin: 7px;\r\n    font-size: 12pt;\r\n    display: inline-block;\r\n}\r\n.skill-bubble i{\r\n    font-size: 18px;\r\n}\r\n.close{\r\n    display: inline;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n}\r\n.icon{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.icon .close-btn-pro{\r\n    font-size: 20px;\r\n}\r\n.close-icon{\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n.close-btn{\r\n    color: #fff;\r\n    /* width: 100%;\r\n    height: 100%; */\r\n    font-size: 20px;\r\n}\r\n.btn-section{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-top: 25px;\r\n}\r\n.submit-btn{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 13pt;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    border: none;\r\n    color: #757575;\r\n    cursor: pointer;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/skills/skills-popup/skills-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-grid\">\r\n    <form #skillsForm=\"ngForm\" (ngSubmit)=\"onSubmit(skillInput.value)\" class=\"popup-modal form\">\r\n      <div class=\"close-modal-btn\" (click)=\"hideModal()\">\r\n        <i class=\"fas fa-times close-btn\"></i>\r\n      </div>\r\n      <div class=\"inputs\">\r\n        <label class=\"form-input-label\" for=\"new skill\">Add a New Skill</label>\r\n        <input #skillInput class=\"form-input first-name\"type=\"text\" placeholder=\"Type to Add a New Skill\" id=\"skill-name\" name=\"skillName\" [(ngModel)]=newSkill>\r\n      </div>\r\n      \r\n      <div class=\"program-popup-section\">\r\n        <h2 class=\"form-input-label\">Programming Skills</h2>\r\n        <div class=\"icons-section\" #iconsSection>\r\n  \r\n          <div class=\"icon\">\r\n            <i class=\"devicon-html5-plain-wordmark colored skill-icon\"></i>\r\n            <i class=\"fas fa-times close-icon close-btn-pro\"></i>\r\n          </div>\r\n          \r\n          <div class=\"icon\">\r\n            <i class=\"devicon-css3-plain-wordmark colored skill-icon\"></i>\r\n            <i class=\"fas fa-times close-icon close-btn-pro\"></i>\r\n          </div>\r\n          \r\n          <div class=\"icon\">\r\n            <i class=\"devicon-javascript-plain colored skill-icon\"></i>\r\n            <i class=\"fas fa-times close-icon close-btn-pro\"></i>\r\n          </div>\r\n  \r\n          <div class=\"icon\">\r\n            <i class=\"devicon-angularjs-plain colored skill-icon\"></i>\r\n            <i class=\"fas fa-times close-icon close-btn-pro\"></i>\r\n          </div>\r\n  \r\n          <div class=\"icon\">\r\n            <i class=\"devicon-mongodb-plain-wordmark colored skill-icon\"></i>\r\n            <i class=\"fas fa-times close-icon close-btn-pro\"></i>\r\n          </div>\r\n  \r\n          <div class=\"icon\">\r\n            <i class=\"devicon-docker-plain-wordmark colored skill-icon\"></i>\r\n            <i class=\"fas fa-times close-icon close-btn-pro\"></i>\r\n          </div>\r\n        </div>\r\n        <h2 class=\"form-input-label\">Other Skills</h2>\r\n          <div class=\"skills-container\" #skillsContainer>\r\n  \r\n              <!-- <div class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>coding</p>\r\n              </div>\r\n  \r\n              <div class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>Adobe Photoshop</p>\r\n              </div>\r\n  \r\n              <div class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>kdjflsd</p>\r\n              </div>\r\n  \r\n              <div class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>Being awesome</p>\r\n              </div>\r\n  \r\n              <div class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>Adobe Illustrator</p>\r\n              </div>\r\n  \r\n              <div class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>Adobe After Effects</p>\r\n              </div>\r\n  \r\n              <div class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>Some other skill</p>\r\n              </div>\r\n  \r\n              <div class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>Some other really useful skill</p>\r\n              </div> -->\r\n\r\n              <div  *ngFor=\"let skill of skills\" class=\"skill-bubble\">\r\n                <div class=\"close\">\r\n                  <i class=\"fas fa-times\"></i>\r\n                </div>\r\n                <p>{{ skill }}</p>\r\n              </div>\r\n              <!-- *ngIf=\"newSkillCreated\" -->\r\n  \r\n          </div>\r\n          <div class=\"btn-section\">\r\n            <button class=\"submit-btn\" type=\"submit\">Save Changes</button>\r\n          </div>\r\n      </div>\r\n    </form>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/skills/skills-popup/skills-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpClient } from '@angular/common/http'
var SkillsPopupComponent = /** @class */ (function () {
    function SkillsPopupComponent(http) {
        this.http = http;
        // newSkill = '';
        // newSkillCreated = false;
        this.skills = [];
    }
    //grabs any value inside of form
    SkillsPopupComponent.prototype.onSubmit = function (value) {
        // this.newSkill = value;
        this.skills.push(value);
        console.log(this.skills);
        var skills = new FormData();
        skills.append('skillsArray', value);
        this.http.post('mongo ds213209.mlab.com:13209/merits -u meritsadmin -p password', skills).subscribe(function (res) {
            console.log(res);
        });
    };
    SkillsPopupComponent.prototype.ngOnInit = function () {
    };
    //Function for hiding the pop up modal
    SkillsPopupComponent.prototype.hideModal = function () {
        var skillsPopup = document.querySelector('#skills-popup');
        skillsPopup.setAttribute("style", "display:none");
        console.log('works');
    };
    SkillsPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'skills-popup',
            template: __webpack_require__("./src/app/components/profile/skills/skills-popup/skills-popup.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/skills/skills-popup/skills-popup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SkillsPopupComponent);
    return SkillsPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = "/* Headers */\r\n.header {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\nh2 {\r\n    margin: 3px 0px;\r\n}\r\n/* Programming Skills */\r\n.skills-icons {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n.skill-icon {\r\n    font-size: 75px;\r\n    margin: 15px;\r\n}\r\n.eye-icon {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 40px;\r\n}\r\n.edit-icon {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 0;\r\n    -webkit-transform: scale(1.8);\r\n            transform: scale(1.8);\r\n}\r\n.edit-icon:hover {\r\n    cursor: pointer;\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    -webkit-transition: all .3s;\r\n    transition: all .3s;\r\n}\r\n/* Other Skills */\r\n.skills-container {\r\n    color: #fff;\r\n}\r\n.skill-bubble {\r\n    background-color: #424242;\r\n    border-radius: 10px;\r\n    display: inline-block;\r\n    margin: 3px;\r\n}\r\n.skill-bubble p {\r\n    margin: 7px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"visitor-view\"><!-- Skills Start -->\r\n\r\n    <!-- Header -->\r\n    <div class=\"header\">\r\n        <div class=\"edit-btn-cont\" (click)=\"showModal()\">\r\n            <i class=\"fas fa-eye eye-icon \"></i>\r\n            <i class=\"fas fa-edit edit-icon\"></i>\r\n        </div>\r\n        <h1 class=\"section-header-text\">Skills</h1>\r\n    </div>\r\n\r\n    <!-- Programming Skills -->\r\n    <div class=\"programming-section\">\r\n        <h2>Programming Skills</h2>\r\n        <div class=\"skills-icons\">\r\n            <i class=\"devicon-html5-plain-wordmark colored skill-icon\"></i>\r\n            <i class=\"devicon-css3-plain-wordmark colored skill-icon\"></i>\r\n            <i class=\"devicon-javascript-plain colored skill-icon\"></i>\r\n            <i class=\"devicon-angularjs-plain colored skill-icon\"></i>\r\n            <i class=\"devicon-mongodb-plain-wordmark colored skill-icon\"></i>\r\n            <i class=\"devicon-docker-plain-wordmark colored skill-icon\"></i>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Other Skills -->\r\n    <div class=\"other-section\">\r\n        <h2>Other Skills</h2>\r\n        <div *ngFor=\"let skill of skills\" class=\"skills-container\"> \r\n            <div class=\"skill-bubble\">\r\n                <p>{{ skill }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div><!-- Skills End -->\r\n\r\n<!-- <div class=\"popup-modal\">\r\n\r\n</div> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/components/profile/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skills_popup_skills_popup_component__ = __webpack_require__("./src/app/components/profile/skills/skills-popup/skills-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    // Properties
    // skills = SkillsPopupComponent().skills;
    // Methods
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1__skills_popup_skills_popup_component__["a" /* SkillsPopupComponent */]);
    };
    SkillsComponent.prototype.showModal = function () {
        var skillsPopup = document.querySelector('#skills-popup');
        skillsPopup.setAttribute('style', 'display:flex; align-items:center;');
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/components/profile/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search-bar/search-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".search-wrap{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 40px 1fr;\r\n        grid-template-columns: 40px 1fr;\r\n        grid-template-areas: \"button bar\";\r\n    -webkit-box-shadow: 5px 5px 12px rgba(0,0,0,0.35);\r\n            box-shadow: 5px 5px 12px rgba(0,0,0,0.35);\r\n}\r\n.search-bar{\r\n    width: 100%;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    grid-area: bar;\r\n    border-radius: 0px 5px 5px 0px;\r\n}\r\nbutton{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: button;\r\n    border: none;\r\n    border-radius: 5px 0px 0px 5px;\r\n    background-color: #ffb808;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\nbutton:focus {\r\n    outline: none;\r\n}\r\ninput:focus {\r\n    outline: none;\r\n}"

/***/ }),

/***/ "./src/app/components/search/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-wrap\">\r\n  <button type=\"submit\"><i class=\"fa fa-search\" ></i></button>\r\n  <input class=\"search-bar form-input\" type=\"text\" placeholder=\"Search for a Human\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/search/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-bar',
            template: __webpack_require__("./src/app/components/search/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search-result/search-result.component.css":
/***/ (function(module, exports) {

module.exports = "/* universals*/\r\n\r\n.container-box {\r\n    margin: 20px 80px 0px 80px;\r\n  \r\n    }\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 18pt;\r\n    color: #C6C6C6;\r\n}\r\n\r\nh2 {\r\n    padding: 15px;\r\n}\r\n\r\n.search-wrap{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 40px 1fr;\r\n        grid-template-columns: 40px 1fr;\r\n        grid-template-areas: \"button bar\";\r\n    -webkit-box-shadow: 5px 5px 12px rgba(0,0,0,0.35);\r\n            box-shadow: 5px 5px 12px rgba(0,0,0,0.35);\r\n    grid-gap: 20px;\r\n    margin: 40px 20px 20px 80px;\r\n    border-radius: 5px;\r\n   \r\n\r\n}\r\n\r\n.search-bar {\r\n    width: 100%;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    grid-area: bar;\r\n \r\n}\r\n\r\nbutton {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: button;\r\n    border: none;\r\n    border-radius: 5px 0px 0px 5px;\r\n    background-color: #ffb808;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\n.button-section{\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n\r\n.button-1{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14pt;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    border: none;\r\n    color: #757575;\r\n    cursor: pointer; \r\n    margin: 0 auto;\r\n}\r\n\r\n.button-2 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 13pt;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n    background-color: #ffd;\r\n    border: none;\r\n    color: #757575;\r\n    cursor: pointer; \r\n    margin: 0 auto;\r\n}\r\n\r\n.form {\r\n    padding: 30px;\r\n}\r\n\r\n.city-state {\r\n    width: 50%;\r\n}\r\n\r\n.input-1 {\r\n    display: inline-block; \r\n    border-radius: 5px;\r\n}\r\n\r\n.input-2 {\r\n    width: 50%;\r\n}\r\n\r\n#state {\r\n    color: black;\r\n    height: 32px;\r\n    text-indent: 5px;\r\n}\r\n\r\n.img-round {\r\n    width: 150px;\r\n    border-radius: 80%;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin: 15px;\r\n}\r\n\r\n#results {\r\n    text-indent: 60px;\r\n}\r\n\r\n.profile {\r\n    display: -ms-grid;\r\n    display: grid; \r\n    width: 100%;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n        grid-template-areas: \"img info info info\";\r\n}\r\n\r\n.profile-image {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: img;\r\n}\r\n\r\n.profile-info {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: info;\r\n}\r\n\r\n.form-input-label-heading {\r\n    font-size: 36pt;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    -webkit-margin-before: 0em;\r\n    -webkit-margin-after: 1px;\r\n    padding: 5px;\r\n}\r\n\r\n.profile-name {\r\n    font-size: 18pt;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/search/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-main\">\r\n  <button class=\"button-2\"><a href=\"/app-profile\">Back to Profile</a></button>\r\n  <div class=\"container-box\">\r\n    <div class=\"row\">\r\n      <div class=\"search-wrap\">\r\n        <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n        <input class=\"search-bar form-input\" type=\"text\" placeholder=\"Search for User\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-info\">\r\n    <div class=\"button-section\">\r\n        <button (click)=\"mySearch()\" class=\"button-1\">Advanced Search</button>\r\n    </div>\r\n    <div id=\"myContainer\" *ngIf=\"show\">\r\n      <div class=\"container-box\">\r\n        <form class=\"form\">\r\n          <div class=\"inputs font-light\">\r\n            <div class=\"city-state\">\r\n              <h2 class=\"form-input-label\">Search by Location</h2>\r\n              <input class=\"form-input input-1 input-2\" type=\"text\" placeholder=\"City\">\r\n              <select class=\"state input-1\" name=\"State\" id=\"state\" placeholder=\"State\">\r\n                <option selected=\"selected\">State</option>\r\n                <option value=\"AL\">Alabama</option>\r\n                <option value=\"AK\">Alaska</option>\r\n                <option value=\"AZ\">Arizona</option>\r\n                <option value=\"AR\">Arkansas</option>\r\n                <option value=\"CA\">California</option>\r\n                <option value=\"CO\">Colorado</option>\r\n                <option value=\"CT\">Connecticut</option>\r\n                <option value=\"DE\">Delaware</option>\r\n                <option value=\"DC\">District Of Columbia</option>\r\n                <option value=\"FL\">Florida</option>\r\n                <option value=\"GA\">Georgia</option>\r\n                <option value=\"HI\">Hawaii</option>\r\n                <option value=\"ID\">Idaho</option>\r\n                <option value=\"IL\">Illinois</option>\r\n                <option value=\"IN\">Indiana</option>\r\n                <option value=\"IA\">Iowa</option>\r\n                <option value=\"KS\">Kansas</option>\r\n                <option value=\"KY\">Kentucky</option>\r\n                <option value=\"LA\">Louisiana</option>\r\n                <option value=\"ME\">Maine</option>\r\n                <option value=\"MD\">Maryland</option>\r\n                <option value=\"MA\">Massachusetts</option>\r\n                <option value=\"MI\">Michigan</option>\r\n                <option value=\"MN\">Minnesota</option>\r\n                <option value=\"MS\">Mississippi</option>\r\n                <option value=\"MO\">Missouri</option>\r\n                <option value=\"MT\">Montana</option>\r\n                <option value=\"NE\">Nebraska</option>\r\n                <option value=\"NV\">Nevada</option>\r\n                <option value=\"NH\">New Hampshire</option>\r\n                <option value=\"NJ\">New Jersey</option>\r\n                <option value=\"NM\">New Mexico</option>\r\n                <option value=\"NY\">New York</option>\r\n                <option value=\"NC\">North Carolina</option>\r\n                <option value=\"ND\">North Dakota</option>\r\n                <option value=\"OH\">Ohio</option>\r\n                <option value=\"OK\">Oklahoma</option>\r\n                <option value=\"OR\">Oregon</option>\r\n                <option value=\"PA\">Pennsylvania</option>\r\n                <option value=\"RI\">Rhode Island</option>\r\n                <option value=\"SC\">South Carolina</option>\r\n                <option value=\"SD\">South Dakota</option>\r\n                <option value=\"TN\">Tennessee</option>\r\n                <option value=\"TX\">Texas</option>\r\n                <option value=\"UT\">Utah</option>\r\n                <option value=\"VT\">Vermont</option>\r\n                <option value=\"VA\">Virginia</option>\r\n                <option value=\"WA\">Washington</option>\r\n                <option value=\"WV\">West Virginia</option>\r\n                <option value=\"WI\">Wisconsin</option>\r\n                <option value=\"WY\">Wyoming</option>\r\n              </select>\r\n            </div>\r\n            <h2 class=\"form-input-label\">Search by Title</h2>\r\n            <input class=\"form-input\" type=\"text\" placeholder=\"Title\">\r\n            <h2 class=\"form-input-label\">Search by Company</h2>\r\n            <input class=\"form-input\" type=\"text\" placeholder=\"Company Name\">\r\n            <h2 class=\"form-input-label\">Search by Skills</h2>\r\n            <input class=\"form-input\" type=\"text\" id=\"inside\" placeholder=\"Skill Name\">\r\n            <h2 class=\"form-input-label\">Search by Language</h2>\r\n            <input class=\"form-input\" type=\"text\" id=\"inside\" placeholder=\"Language\">\r\n            <div class=\"button-section\">\r\n              <button class=\"button-1\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h1 class=\"form-input\" id=\"results\">Search Results</h1>\r\n      </div>\r\n      <div class=\"container-box\">\r\n        <div class=\"form\">\r\n          <!--Grid Starts-->\r\n          <div class=\"profile\">  \r\n            <div class=\"profile-image\">\r\n              <img class=\"img-round\" src=\"../../../../assets/img/ProfilePic.JPG\" alt=\"#\">\r\n            </div>\r\n            <div class=\"profile-info\">\r\n              <h2 class=\"form-input-label-heading\">Joe Cool</h2>\r\n              <h2 class=\"profile-name\">Software Developer - Fresno, California</h2>\r\n            </div>\r\n              <!--Grid ends-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n</div>"

/***/ }),

/***/ "./src/app/components/search/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
        this.show = false;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    SearchResultComponent.prototype.mySearch = function () {
        this.show = !this.show;
    };
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-result',
            template: __webpack_require__("./src/app/components/search/search-result/search-result.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  search works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl + 'api/app-register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl + '/api/app-login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'this.authToken');
        return this.http.post(this.apiUrl + '/api/app-profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstName === undefined || user.lasttName === undefined || user.email === undefined || user.createPassword === undefined || user.confirmPassword === undefined || user.city === undefined || user.state === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://192.168.99.100/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map