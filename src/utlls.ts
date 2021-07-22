import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_WEEK } from "./constants";

export const range = (size: number, startAt = 0): Array<number> => {
	return [...Array(size).keys()].map((i) => i + startAt);
};

/**
 * @param startDate
 * @param weekNumber counting from start date
 */
export const getWeekRange = (startDate: number, weekNumber: number): string => {
	const firstDayInWeek = startDate + weekNumber * MILLISECONDS_IN_WEEK
	const lastDayInWeek = firstDayInWeek + MILLISECONDS_IN_DAY * 6
	  
	return `From ${new Date(firstDayInWeek).toDateString()} to ${new Date(lastDayInWeek).toDateString()}`

}