import { DayMessages, Event, EventDatetime, EventWithCategory, Group, GroupWithSills, GroupWithSillsAndClosestGroups, Message, MessageWithUnread, MonthSubmission, PlanningSlot, Student, Submission, VideoWithNotes, ViewSegment } from "types";

export interface AnswersSheet {
    /**
     * In this challenge, you must sort events chronologically (earlier to later) based on 
     * their startDatetime. If some events have the same startDatetime, then the shorted must appear
     * first
     * 
     * @param events Unsorted list of events
     * @returns Sorted list of events
     */
    challengeB1?(events: EventDatetime[]): EventDatetime[];

    /**
     * In this challenge, you have to get all the categories from the events. The categories 
     * must be unique and sorted from A to Z.
     * 
     * @param events List of events with their categories
     * @returns All existing categories sorted alphabatically without duplicates
     */
    challengeB2?(events: EventWithCategory[]): string[];

    /**
     * In this challenge, you must find and attach to each group the group (or groups)
     * that have the most common skills. Attached groups must be sorted by their name (A to Z).
     * Also, you shouldn't change the input order
     * 
     * @param groups List of groups without closestGroups
     * @returns The same list but with a new closestGroups prop on each
     */
    challengeB3?(groups: GroupWithSills[]): GroupWithSillsAndClosestGroups[];

    /**
     * In this challenge, you have to regroup submissions by the month they got submitted
     * The result should be an array containing one object for each month. These objects
     * must be sorted chronoligically (oldest first). 
     * 
     * Example:
     * Input: [
     *      { name: "Quest NodeJS", submittedAt: "2020-11-17T11:45:01.721Z" }, 
     *      { name: "Quest GraphQL", submittedAt: "2020-03-12T13:45:01.721Z" },
     *      { name: "Quest ReactJS", submittedAt: "2020-03-10T07:45:47.721Z" },
     *      { name: "Quest Angular", submittedAt: "2020-01-21T21:25:47.721Z" },
     *      { name: "Quest MySQL", submittedAt: "2020-06-16T21:25:47.721Z" },
     * ]
     * Output: [
     *      {
     *          month: "2020-01-01T00:00:00.000Z",
     *          submissions: [
     *              { name: "Quest Angular", submittedAt: "2020-01-21T21:25:47.721Z" }
     *          ]
     *      },
     *      {
     *          month: "2020-03-01T00:00:00.000Z",
     *          submissions: [
     *              { name: "Quest GraphQL", submittedAt: "2020-03-12T13:45:01.721Z" },
     *              { name: "Quest ReactJS", submittedAt: "2020-03-10T07:45:47.721Z" },
     *          ]
     *      },
     *      {
     *          month: "2020-06-01T00:00:00.000Z",
     *          submissions: [
     *              { name: "Quest MySQL", submittedAt: "2020-06-16T21:25:47.721Z" },
     *          ]
     *      },
     *      {
     *          month: "2020-11-01T00:00:00.000Z",
     *          submissions: [
     *              { name: "Quest NodeJS", submittedAt: "2020-11-17T11:45:01.721Z" }, 
     *          ]
     *      },
     * ]
     * 
     * @param submissions A list of test submissions with their name and submission datetime
     * @returns A list of objects. Each object must contain a month and its associated submissions. The list must be sorted chronoligically
     */
    challengeB4?(submissions: Submission[]): MonthSubmission[];

    /**
     * In this challenge, you have to split up a video in several succesive segments 
     * that can be either segments with notes or without.
     * 
     * Example:
     * Input: {
     *      videoDuration: "01:33:12",
     *      notes: [
     *          { fromTime: "00:05:23", toTime: "00:15:10", note: "NodeJS presentation" },
     *          { fromTime: "00:26:12", toTime: "00:51:02", note: "Installation" },
     *          { fromTime: "00:51:02", toTime: "00:53:55", note: "Execution" },
     *          { fromTime: "01:01:48", toTime: "01:07:29", note: "Livereloading" },
     *          { fromTime: "00:16:12", toTime: "00:24:39", note: "NodeJS concepts" }
     *      ]
     * }
     * Ouput: [
     *      { fromTime: "00:00:00", toTime: "00:05:23" },
     *      { fromTime: "00:05:23", toTime: "00:15:10", note: "NodeJS presentation" },
     *      { fromTime: "00:15:10", toTime: "00:16:12" },
     *      { fromTime: "00:16:12", toTime: "00:24:39", note: "NodeJS concepts" },
     *      { fromTime: "00:24:39", toTime: "00:26:12" },
     *      { fromTime: "00:26:12", toTime: "00:51:02", note: "Installation" },
     *      { fromTime: "00:51:02", toTime: "00:53:55", note: "Execution" },
     *      { fromTime: "00:53:55", toTime: "01:01:48" },
     *      { fromTime: "01:01:48", toTime: "01:07:29", note: "Livereloading" }
     *      { fromTime: "01:07:29", toTime: "01:33:12" },
     * ]
     */
    challengeB5?(video: VideoWithNotes): ViewSegment[];

    /**
     * In this challenge, you must sort students by their age. If some of them have
     * the same age, then you should sort them alphabetically
     * 
     * @param students Unsorted list of students
     * @returns Sorted list of students
     */
    challengeA1?(students: Student[]): Student[];

    /**
     * In this challenge, you have to return the list of skills of each group (based on 
     * students skills). Duplicates skills for one group is not permitted
     */
    challengeA2?(groups: Group[]): GroupWithSills[];

    /**
     * In this challenge, you should modify all the messages by adding them an "unread" property
     * (boolean meaning that the current user did not read this message) based on the lastActivityDatetime
     * input
     */
    challengeA3?(lastActivityDatetime: string, messages: Message[]): MessageWithUnread[];

    /**
     * In this challenge, you have to regroup messages into an array of day based on their
     * sentAt property.
     * 
     * Example:
     * Input: [{ message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
     * Output: [
     *      {
     *          day: "2020-11-17T00:00:00.000Z",
     *          messages: [
     *              { message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
     *              { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
     *          ]
     *      },
     *      {
     *          day: "2020-11-18T00:00:00.000Z",
     *          messages: [
     *              { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
     *          ]
     *      },
     * ]
     */
    challengeA4?(message: Message[]): DayMessages[];

    /**
     * In this challenge, you should compute a week planning split in 15 minutes slots
     * and include existing events. To keep it simple, don't work with Dates!
     * 
     * Example:
     * Input: [{ day: "Monday", startTime: "09:00", endTime: "09:30", name: "First work day!" }]
     * Output: [
     *     { day: "Monday", startTime: "00:00", "endTime": "00:15"},
     *     { day: "Monday", startTime: "00:15", "endTime": "00:30"},
     *     ...,
     *     { day: "Monday", startTime: "09:00", "endTime": "09:15", event: "First work day!" },
     *     { day: "Monday", startTime: "09:15", "endTime": "09:30", event: "First work day!" },
     *     { day: "Monday", startTime: "09:30", "endTime": "09:45" },
     *     ...,
     *     { day: "Sunday", startTime: "23:45", "endTime": "00:00" },
     * ] 
     */
    challengeA5?(events: Event[]): PlanningSlot[];
}