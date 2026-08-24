type QuizSummary = {
    total: number;
    average: number;
};
function getQuizSummary(scores: number[]): QuizSummary {
    const total: number = scores.reduce((sum, score) => sum + score, 0);
    const average: number = scores.length === 0 ? 0 : total / scores.length;
    return { total, average };
}