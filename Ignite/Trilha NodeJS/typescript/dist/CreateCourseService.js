"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var _b = _a.duration, duration = _b === void 0 ? 8 : _b, name = _a.name, educator = _a.educator;
        console.log(name, duration, educator);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
