//Problem-01: Battery Level Status
function getBatteryStatus(percentage: number): string {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    } else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    } else if (percentage >= 51 && percentage <= 90) {
        return "High";
    } else if (percentage >= 91 && percentage <= 100) {
        return "Full";
    }
    return "Invalid";
}

//Problem-02: Table Booking Confirmation
interface Booking {
    name: string;
    guests: number;
    time: string;
}
function formatBookingConfirmation(booking: Booking): string {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}

//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses: number[]): number {
    return expenses.reduce((total, expense) => total + expense, 0);
}

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green";

function getTrafficAction(light: Light): string {
    if (light === "red") {
        return "Stop";
    } else if (light === "yellow") {
        return "Slow Down";
    } else {
        return "Go";
    }
}

//Problem-05: Quiz Score Summary
type QuizSummary = {
    total: number;
    average: number;
};
function getQuizSummary(scores: number[]): QuizSummary {
    const total: number = scores.reduce((sum, score) => sum + score, 0);
    const average: number = scores.length === 0 ? 0 : total / scores.length;
    return { total, average };
}

