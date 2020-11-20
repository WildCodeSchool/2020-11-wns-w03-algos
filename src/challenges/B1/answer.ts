/**
 * In this challenge, you must sort events chronologically (earlier to later) based on 
 * their startDatetime. If some events have the same startDatetime, then the shorted must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!
/*
export default function ({ events }: {events: EventDatetime[] }): EventDatetime[] {
    return [];
}
*/

// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}