import { Event } from "./answer";

export default {
    events: [
        { day: "Monday", startTime: "09:00", endTime: "11:00", name: "First work day!" },
        { day: "Tuesday", startTime: "09:00", endTime: "11:00", name: "First meeting" },
        { day: "Tuesday", startTime: "11:00", endTime: "12:00", name: "Pause after meeting" },
        { day: "Friday", startTime: "18:00", endTime: "00:00", name: "Office party" },
        { day: "Saturday", startTime: "00:00", endTime: "01:00", name: "Clean up time" },
        { day: "Wednesday", startTime: "13:00", endTime: "18:00", name: "Project afternoon" },
        { day: "Wednesday", startTime: "09:00", endTime: "12:00", name: "Morning workshop" },
    ]
} as { events: Event[] };