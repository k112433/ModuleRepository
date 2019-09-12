"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_pnp_js_1 = require("sp-pnp-js");
/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}cls
 * @Return {string}
 */
var LoggerHelper = /** @class */ (function () {
    function LoggerHelper() {
        this._appConstants = AppConstants.Instance();
    }
    LoggerHelper.prototype.Log = function (item) {
        if (AppConstants) {
            if (AppConstants.ListName) {
                sp_pnp_js_1.sp.web.lists
                    .getByTitle(AppConstants.ListName)
                    .items.add(item)
                    .then(function (res) { })
                    .catch(function (err) {
                    console.log(err);
                    console.log("An Error Occured While Writting Log");
                });
            }
        }
    };
    LoggerHelper.prototype.Initalize = function (listName) {
        AppConstants.ListName = listName;
        // Processing for If List Exist or Not
    };
    return LoggerHelper;
}());
exports.default = LoggerHelper;
var AppConstants = /** @class */ (function () {
    function AppConstants() {
        //...
    }
    //private static foo: ProjectsCrud = new ProjectsCrud(null);
    AppConstants.Instance = function () {
        // Do you need arguments? Make it a regular static method instead.
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
    return AppConstants;
}());
exports.AppConstants = AppConstants;
