"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    else if (percentage >= 91 && percentage <= 100) {
        return "Full";
    }
    return "Invalid";
}
console.log(getBatteryStatus(10));
//# sourceMappingURL=problem_1.js.map