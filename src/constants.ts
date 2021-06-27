const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const MILLISECONDS_IN_WEEK = MILLISECONDS_IN_DAY  * 7;

const firstDay = new Date(2017, 8, 24, 0, 0).getTime();
const lastDay = new Date(2022, 7, 1, 0, 0).getTime();

export { firstDay, lastDay, MILLISECONDS_IN_DAY, MILLISECONDS_IN_WEEK };
