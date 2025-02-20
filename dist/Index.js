"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sp_pnp_js_1 = require("sp-pnp-js");
require("core-js/es6/number");
require("core-js/es6/array");
require("core-js/es7/object");
require("polyfill-array-includes");
var LoggerHelper = /** @class */ (function () {
    function LoggerHelper() {
        this._appConstants = AppConstants.Instance();
    }
    LoggerHelper.prototype.Log = function (item) {
        if (AppConstants) {
            if (AppConstants.ListName) {
                if (AppConstants.ListCreated) {
                    sp_pnp_js_1.sp.web.lists
                        .getByTitle(AppConstants.ListName)
                        .items.add(item)
                        .then(function (res) { })
                        .catch(function (err) { });
                }
                else
                    AppConstants.Queue.push(item);
            }
        }
    };
    LoggerHelper.prototype.CreateListColumns = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allFields;
            var _this = this;
            return __generator(this, function (_a) {
                allFields = [];
                sp_pnp_js_1.sp.web.lists
                    .getByTitle(AppConstants.ListName)
                    .fields.addMultilineText("PageURL")
                    .then(function (a) {
                    allFields.push("PageURL");
                    ////
                    sp_pnp_js_1.sp.web.lists
                        .getByTitle(AppConstants.ListName)
                        .fields.addText("FileName")
                        .then(function (a) {
                        allFields.push("FileName");
                        ////
                        sp_pnp_js_1.sp.web.lists
                            .getByTitle(AppConstants.ListName)
                            .fields.addText("Method")
                            .then(function (a) {
                            allFields.push("Method");
                            ////
                            sp_pnp_js_1.sp.web.lists
                                .getByTitle(AppConstants.ListName)
                                .fields.addUser("User", 0)
                                .then(function (a) {
                                allFields.push("User");
                                ////
                                sp_pnp_js_1.sp.web.lists
                                    .getByTitle(AppConstants.ListName)
                                    .fields.addChoice("Extype", ["Info", "Error", "Warn"])
                                    .then(function (a) {
                                    allFields.push("Extype");
                                    ////
                                    sp_pnp_js_1.sp.web.lists
                                        .getByTitle(AppConstants.ListName)
                                        .fields.addMultilineText("ErrorMessage")
                                        .then(function (a) {
                                        allFields.push("ErrorMessage");
                                        ////
                                        sp_pnp_js_1.sp.web.lists
                                            .getByTitle(AppConstants.ListName)
                                            .fields.addMultilineText("ErrorDetails")
                                            .then(function (a) {
                                            allFields.push("ErrorDetails");
                                            ////
                                            sp_pnp_js_1.sp.web.lists
                                                .getByTitle(AppConstants.ListName)
                                                .fields.addMultilineText("JSON")
                                                .then(function (a) {
                                                allFields.push("JSON");
                                                ////
                                                sp_pnp_js_1.sp.web.lists
                                                    .getByTitle(AppConstants.ListName)
                                                    .fields.addNumber("ProgrammeID")
                                                    .then(function (a) {
                                                    allFields.push("ProgrammeID");
                                                    ////
                                                    sp_pnp_js_1.sp.web.lists
                                                        .getByTitle(AppConstants.ListName)
                                                        .fields.addNumber("StatusCode")
                                                        .then(function (a) {
                                                        allFields.push("StatusCode");
                                                        var defaultView = sp_pnp_js_1.sp.web.lists.getByTitle(AppConstants.ListName).defaultView;
                                                        _this.addFieldsToView(allFields, 0, defaultView);
                                                        AppConstants.ListCreated = true;
                                                        _this.CheckQueue();
                                                    });
                                                    //
                                                });
                                                //
                                            });
                                            //
                                        });
                                        //
                                    });
                                    //
                                });
                                //
                            });
                            //
                        });
                        //
                    });
                    //
                });
                return [2 /*return*/];
            });
        });
    };
    LoggerHelper.prototype.addFieldsToView = function (allFields, index, defView) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (index != -1) {
                    defView.fields
                        .add(allFields[index])
                        .then(function (r) {
                        if (index == allFields.length - 1)
                            index = -1;
                        else
                            index = index + 1;
                        _this.addFieldsToView(allFields, index, defView);
                    })
                        .catch(function (err) { });
                }
                return [2 /*return*/];
            });
        });
    };
    LoggerHelper.prototype.CheckQueue = function () {
        var obj;
        while (AppConstants.Queue.length) {
            obj = AppConstants.Queue.pop();
            if (obj != undefined)
                this.Log(obj);
        }
    };
    LoggerHelper.prototype.Initalize = function (listName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AppConstants.ListName = listName;
                        console.log("Initialize Called");
                        // Processing for If List Exist or Not
                        return [4 /*yield*/, sp_pnp_js_1.sp.web.lists.ensure(listName).then(function (value) {
                                if (value.created) {
                                    console.log("List Created");
                                    _this.CreateListColumns();
                                }
                                else {
                                    AppConstants.ListCreated = true;
                                    _this.CheckQueue();
                                    console.log("Going to Create a List with this Name");
                                }
                            })];
                    case 1:
                        // Processing for If List Exist or Not
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoggerHelper;
}());
exports.default = LoggerHelper;
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.Instance = function () {
        return this._instance || (this._instance = new this());
    };
    Object.defineProperty(AppConstants, "ListName", {
        get: function () {
            return this._listName;
        },
        set: function (_listName) {
            this._listName = _listName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "Queue", {
        get: function () {
            return this._queue;
        },
        set: function (q) {
            this._queue = q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "ListCreated", {
        get: function () {
            return this._listCreated;
        },
        set: function (q) {
            this._listCreated = q;
        },
        enumerable: true,
        configurable: true
    });
    AppConstants._queue = [];
    AppConstants._listCreated = false;
    return AppConstants;
}());
exports.AppConstants = AppConstants;
