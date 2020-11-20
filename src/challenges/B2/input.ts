import { EventWithCategory } from "./answer";

export default {
    events: [
        { categories: ['Live coding', 'Letsplay'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "NodeJS" },
        { categories: ['Quest'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "Typescript" },
        { categories: ['Quest', 'Course'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "GraphQL" },
        { categories: ['Letsplay'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "ReactJS" },
        { categories: ['Dojo'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "Algo" },
        { categories: ['Workshop', 'Course'], startDatetime: "2020-11-19 09:00:00", endDatetime: "2020-11-19 10:00:00", event: "Docker" },
    ]
} as { events: EventWithCategory[] };