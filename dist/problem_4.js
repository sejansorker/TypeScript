"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTrafficAction(light) {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "yellow") {
        return "Slow Down";
    }
    else {
        return "Go";
    }
}
//# sourceMappingURL=problem_4.js.map