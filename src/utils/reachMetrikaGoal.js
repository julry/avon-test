export const reachMetrikaGoal = (goalName) => {
    window.ym && window.ym(window.ymId, 'reachGoal', goalName);
};