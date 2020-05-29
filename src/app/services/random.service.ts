export const getRandom = (to: number): number => {
    return Math.floor(Math.random() * (to - 1));
};
