"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = AppConstants;
