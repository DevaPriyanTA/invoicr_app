webpackJsonp([1,4],{

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(683),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_customers_customers_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_add_customer_add_customer_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_edit_customer_edit_customer_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_customer_details_customer_details_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_customer_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_customers_customers_component__["a" /* CustomersComponent */] },
    { path: 'customer/add', component: __WEBPACK_IMPORTED_MODULE_8__components_add_customer_add_customer_component__["a" /* AddCustomerComponent */] },
    { path: 'customer/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_customer_details_customer_details_component__["a" /* CustomerDetailsComponent */] },
    { path: 'customer/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_edit_customer_edit_customer_component__["a" /* EditCustomerComponent */] },
    { path: 'invoice/add/:customer_id', component: __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__["a" /* AddInvoiceComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_customers_customers_component__["a" /* CustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_add_customer_add_customer_component__["a" /* AddCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_edit_customer_edit_customer_component__["a" /* EditCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_customer_details_customer_details_component__["a" /* CustomerDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__["a" /* AddInvoiceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_customer_service__["a" /* CustomerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCustomerComponent = (function () {
    function AddCustomerComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
    };
    AddCustomerComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var customer = {
            first_name: this.first_name,
            last_name: this.last_name,
            company: this.company,
            email: this.email,
            phone: this.phone,
            address: {
                street: this.street,
                city: this.city,
                state: this.state,
                zip: this.zip
            }
        };
        this.customerService.saveCustomer(customer).subscribe(function (customer) {
            _this.router.navigate(['/']);
        });
    };
    AddCustomerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-customer',
            template: __webpack_require__(684),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddCustomerComponent);
    return AddCustomerComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/add-customer.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddInvoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddInvoiceComponent = (function () {
    function AddInvoiceComponent(customerService, router, route) {
        this.customerService = customerService;
        this.router = router;
        this.route = route;
    }
    AddInvoiceComponent.prototype.ngOnInit = function () {
    };
    AddInvoiceComponent.prototype.onAddSubmit = function () {
        var _this = this;
        this.customer = this.route.snapshot.params['customer_id'];
        var invoice = {
            customer: this.customer,
            service: this.service,
            price: this.price,
            status: this.status,
            due: this.due
        };
        this.customerService.saveInvoice(invoice).subscribe(function (invoice) {
            _this.router.navigate(['/']);
        });
    };
    AddInvoiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-invoice',
            template: __webpack_require__(685),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], AddInvoiceComponent);
    return AddInvoiceComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/add-invoice.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDetailsComponent = (function () {
    function CustomerDetailsComponent(customerService, router, route) {
        this.customerService = customerService;
        this.router = router;
        this.route = route;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.customerService.getCustomer(this.id).subscribe(function (customer) {
            _this.customer = customer;
        });
        this.customerService.getInvoices(this.id).subscribe(function (invoices) {
            _this.invoices = invoices;
        });
    };
    CustomerDetailsComponent.prototype.markPaid = function (id, invoice) {
        invoice.status = 'paid';
        this.customerService.markPaid(id, invoice).subscribe(function (invoice) {
            invoice.status = 'paid';
        });
    };
    CustomerDetailsComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.customerService.deleteInvoice(id).subscribe(function (invoice) {
            _this.router.navigate(['/customer/' + _this.id]);
        });
    };
    CustomerDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-customer-details',
            template: __webpack_require__(686),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/customer-details.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersComponent = (function () {
    function CustomersComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customers) {
            _this.customers = customers;
        });
    };
    CustomersComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.customerService.deleteCustomer(id).subscribe(function (customer) {
            _this.router.navigate(['/']);
        });
    };
    CustomersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-customers',
            template: __webpack_require__(687),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CustomersComponent);
    return CustomersComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/customers.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditCustomerComponent = (function () {
    function EditCustomerComponent(customerService, router, route) {
        this.customerService = customerService;
        this.router = router;
        this.route = route;
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.customerService.getCustomer(this.id).subscribe(function (customer) {
            _this.first_name = customer.first_name;
            _this.last_name = customer.last_name;
            _this.company = customer.company;
            _this.email = customer.email;
            _this.phone = customer.phone;
            _this.street = customer.address.street;
            _this.city = customer.address.city;
            _this.state = customer.address.state;
            _this.zip = customer.address.zip;
        });
    };
    EditCustomerComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var customer = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
            address: {
                street: this.street,
                city: this.city,
                state: this.state,
                zip: this.zip
            }
        };
        this.customerService.updateCustomer(this.id, customer).subscribe(function (customer) {
            _this.router.navigate(['/']);
        });
    };
    EditCustomerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-edit-customer',
            template: __webpack_require__(688),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditCustomerComponent);
    return EditCustomerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/edit-customer.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(689),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/navbar.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/environment.js.map

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Add Customer</h1>\n<form (submit)=\"onAddSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n          <label>First Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\n      </div>\n      <div class=\"form-group\">\n          <label>Last Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\n      </div>\n      <div class=\"form-group\">\n          <label>Company</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company\" name=\"company\" placeholder=\"Company\">\n      </div>\n      <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group\">\n          <label>Phone Number</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone Number\">\n      </div>\n\n      <div class=\"form-group\">\n          <label>Street</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"street\" name=\"street\" placeholder=\"Street Address\">\n      </div>\n      <div class=\"form-group\">\n          <label>City</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\">\n      </div>\n      <div class=\"form-group\">\n          <label>State</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\">\n      </div>\n      <div class=\"form-group\">\n          <label>Zip</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"Zipcode\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Add Invoice</h1>\n<form (submit)=\"onAddSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n          <label>Service</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"service\" name=\"service\" placeholder=\"Service\">\n      </div>\n      <div class=\"form-group\">\n          <label>Price</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"price\" name=\"price\" placeholder=\"Price\">\n      </div>\n      <div class=\"form-group\">\n          <label>Status</label>\n          <select class=\"form-control\" [(ngModel)]=\"status\" name=\"status\">\n            <option value=\"unpaid\">UnPaid</option>\n            <option value=\"paid\">Paid</option>\n          </select>\n      </div>\n      <div class=\"form-group\">\n          <label>Due Date</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"due\" name=\"due\" placeholder=\"Due Date\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"customer\">\n  <h1 class=\"page-header\">{{customer.first_name}} {{customer.last_name}}</h1>\n  <h4>Contact Info</h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><strong>Company: </strong>{{customer.company}}</li>\n    <li class=\"list-group-item\"><strong>Email: </strong>{{customer.email}}</li>\n    <li class=\"list-group-item\"><strong>Phone: </strong>{{customer.phone}}</li>\n  </ul>\n\n  <h4>Location Info</h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><strong>Street: </strong>{{customer.address.street}}</li>\n    <li class=\"list-group-item\"><strong>City: </strong>{{customer.address.city}}</li>\n    <li class=\"list-group-item\"><strong>State: </strong>{{customer.address.state}}</li>\n    <li class=\"list-group-item\"><strong>Zipcode: </strong>{{customer.address.zip}}</li>\n  </ul>\n\n\n\n\n\n  <h4 class=\"page-header\">Invoices <a routerLink=\"/invoice/add/{{customer._id}}\">Create Invoice</a></h4>\n    <div class=\"customers\">\n      <table class=\"table table-striped\">\n          <tr>\n              <th>ID</th>\n              <th>Service</th>\n              <th>Price</th>\n              <th>Status</th>\n              <th>Due</th>\n              <th></th>\n          </tr>\n          <tr *ngFor=\"let invoice of invoices\">\n            <td>{{invoice._id}}</td>\n            <td>{{invoice.service}}</td>\n            <td>{{invoice.price}}</td>\n            <td>{{invoice.status}}</td>\n            <td>{{invoice.due}}</td>\n            <td>\n              <a (click)=\"markPaid(invoice._id, invoice)\" class=\"btn btn-default\">Mark Paid</a>\n              <a href=\"\" (click)=\"onDeleteClick(invoice._id)\" class=\"btn btn-danger\">Delete</a>\n            </td>\n          </tr>\n      </table>\n    </div>\n</div>\n<!-- <div *ngIf=\"customer\">\n  <h1 class=\"page-header\">{{customer.first_name}} {{customer.last_name}}</h1>\n</div> -->\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Customers</h1>\n<div class=\"customers\">\n    <table class=\"table table-striped\">\n        <tr>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Email</th>\n            <th>Phone</th>\n            <th></th>\n        </tr>\n        <tr *ngFor=\"let customer of customers\">\n          <td>{{customer.first_name}}</td>\n          <td>{{customer.last_name}}</td>\n          <td>{{customer.email}}</td>\n          <td>{{customer.phone}}</td>\n          <td>\n            <a routerLink=\"/customer/{{customer._id}}\" class=\"btn btn-success\">Details</a>\n            <a routerLink=\"/customer/edit/{{customer._id}}\" class=\"btn btn-default\">Edit</a>\n            <a href=\"\"(click)=\"onDeleteClick(customer._id)\" class=\"btn btn-danger\">Delete</a>\n          </td>\n        </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Customer</h1>\n<form (submit)=\"onEditSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n          <label>First Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\n      </div>\n      <div class=\"form-group\">\n          <label>Last Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\n      </div>\n      <div class=\"form-group\">\n          <label>Company</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company\" name=\"company\" placeholder=\"Company\">\n      </div>\n      <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group\">\n          <label>Phone Number</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone Number\">\n      </div>\n\n      <div class=\"form-group\">\n          <label>Street</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"street\" name=\"street\" placeholder=\"Street Address\">\n      </div>\n      <div class=\"form-group\">\n          <label>City</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\">\n      </div>\n      <div class=\"form-group\">\n          <label>State</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\">\n      </div>\n      <div class=\"form-group\">\n          <label>Zip</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"Zipcode\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">Invoicr</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav navbar-left\">\r\n            <li [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Dashboard</a></li>\r\n          </ul>\r\n\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/customer/add']\">Add New Customer</a></li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      <!-- </div>\r\n    </nav> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<nav class=\" navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"container-fluid\">\r\n    <a class=\"navbar-brand\" href=\"#\">Invoicr</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"/\">Dashboard</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" href=\"/customer/add\">Add New Customer</a>\r\n        </li>\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n            Dropdown\r\n          </a>\r\n          <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n            <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n            <li><hr class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n          </ul>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\r\n        </li> -->\r\n      </ul>\r\n      <!-- <form class=\"d-flex\">\r\n        <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-success\" type=\"submit\">Search</button>\r\n      </form> -->\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get('http://localhost:3000/api/customers')
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getCustomer = function (id) {
        return this.http.get('http://localhost:3000/api/customers/' + id)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.saveCustomer = function (customer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/customers', customer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.updateCustomer = function (id, customer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/customers/' + id, customer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        return this.http.delete('http://localhost:3000/api/customers/' + id)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getInvoices = function (customer_id) {
        return this.http.get('http://localhost:3000/api/invoices/customer/' + customer_id)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.markPaid = function (id, invoice) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/invoices/' + id, invoice, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.deleteInvoice = function (id) {
        return this.http.delete('http://localhost:3000/api/invoices/' + id)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.saveInvoice = function (invoice) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/invoices', invoice, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CustomerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/Desktop/projecte/invoicr/invoicr-angular/src/customer.service.js.map

/***/ })

},[723]);
//# sourceMappingURL=main.bundle.map