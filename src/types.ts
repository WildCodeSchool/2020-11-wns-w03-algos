export interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSills extends Group {
    skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
    closestGroups: GroupWithSills[];
}

export interface Submission {
    name: string;
    submittedAt: string;
}

export interface MonthSubmission {
    month: string;
    submissions: Submission[];
}

export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface MessageWithUnread extends Message {
    unread: boolean;
}

export interface DayMessages {
    day: string;
    messages: Message[];
}

export interface Event {
    day: string;
    startTime: string;
    endTime: string;
    event: string;
}

export interface PlanningSlot {
    day: string;
    startTime: string;
    endTime: string;
    event?: Event;
}

export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}

export interface EventWithCategory extends EventDatetime {
    categories: string[];
}

export interface VideoWithNotes {
    videoDuration: string;
    notes: { fromTime: string, toTime: string, note: string }[]
}

export interface ViewSegment {
    fromTime: string;
    toTime: string;
    note?: string;
}