/**
 * In this challenge, you should compute a week planning split in 15 minutes slots
 * and including existing events. To keep it simple, don't work with Dates!
 * Be carefull with leading 0!
 * 
 * Example:
 * Input: [{ day: "Monday", startTime: "09:00", endTime: "09:30", name: "First work day!" }]
 * Output: [
 *     { day: "Monday", startTime: "00:00", "endTime": "00:15"},
 *     { day: "Monday", startTime: "00:15", "endTime": "00:30"},
 *     ...,
 *     { day: "Monday", startTime: "09:00", "endTime": "09:15", event: [Object] },
 *     { day: "Monday", startTime: "09:15", "endTime": "09:30", event: [Object] },
 *     { day: "Monday", startTime: "09:30", "endTime": "09:45" },
 *     ...,
 *     { day: "Sunday", startTime: "23:45", "endTime": "00:00" },
 * ] 
 * 
 * @param events List of event to add on the planning
 * @returns List of planning slots, from Monday 00:00 to Sunday 00:00, 15 minutes each slot
 */

// ↓ uncomment bellow lines and add your response!
/*
export default function ({ events }: { events: Event[] }): PlanningSlot[] {
    return [];
}
*/

// used interfaces, do not touch
export interface Event {
    day: string;
    startTime: string;
    endTime: string;
    name: string;
}

export interface PlanningSlot {
    day: string;
    startTime: string;
    endTime: string;
    event?: Event;
}