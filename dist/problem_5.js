"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQuizSummary(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = scores.length === 0 ? 0 : total / scores.length;
    return { total, average };
}
//# sourceMappingURL=problem_5.js.map