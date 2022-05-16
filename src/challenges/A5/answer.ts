/**
 * In this challenge, you should compute a week planning split in 1 hour slots
 * and including existing events. To keep it simple, don't work with Dates!
 * Be carefull with leading 0!
 * 
 * Example:
 * Input: [{ day: "Monday", startTime: "09:00", endTime: "11:00", name: "First work day!" }]
 * Output: [
 *     { day: "Monday", startTime: "00:00", "endTime": "01:00"},
 *     { day: "Monday", startTime: "01:00", "endTime": "02:00"},
 *     ...,
 *     { day: "Monday", startTime: "09:00", "endTime": "10:00", event: [Object] },
 *     { day: "Monday", startTime: "10:00", "endTime": "11:00", event: [Object] },
 *     { day: "Monday", startTime: "11:00", "endTime": "12:00" },
 *     ...,
 *     { day: "Sunday", startTime: "23:00", "endTime": "00:00" },
 * ] 
 * 
 * @param events List of event to add on the planning
 * @returns List of planning slots, from Monday 00:00 to Sunday 00:00, 1 hour each slot
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: Event[] }): PlanningSlot[] {
      const slots: PlanningSlot[] = [];
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].forEach(day => {
        for (let i = 0; i < 24; i++) {
            const startTime = (i >= 10 ? '' : '0') + i + ':00';
            const end = i + 1;
            const endTime = end === 24 ? '00:00' : ((end >= 10 ? '' : '0') + end + ':00');
            const event = events.find((event) => 
                                event.day === day 
                                && (event.endTime === '00:00' ? '24:00' : event.endTime) >= (endTime === '00:00' ? '24:00' : endTime)
                                && event.startTime <= startTime);
            slots.push({ startTime, endTime, day, event });
        }
    });
    return slots;
}


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