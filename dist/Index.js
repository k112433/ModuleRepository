"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_pnp_js_1 = require("sp-pnp-js");
var AppConstants_1 = require("../lib/AppConstants");
/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}cls
 * @Return {string}
 */
var LoggerHelper = /** @class */ (function () {
    function LoggerHelper() {
        this._appConstants = AppConstants_1.AppConstants.Instance();
    }
    LoggerHelper.prototype.Log = function (item) {
        if (AppConstants_1.AppConstants) {
            if (AppConstants_1.AppConstants.ListName) {
                sp_pnp_js_1.sp.web.lists
                    .getByTitle(AppConstants_1.AppConstants.ListName)
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
        AppConstants_1.AppConstants.ListName = listName;
        // Processing for If List Exist or Not
    };
    return LoggerHelper;
}());
exports.default = LoggerHelper;
