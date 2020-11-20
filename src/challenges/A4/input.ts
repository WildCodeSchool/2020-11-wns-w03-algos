import { Message } from "./answer";

export default {
    messages: [
        { author: 'Thibault', sentAt: '2020-11-07T11:11:32.093Z', message: "Hello there" },
        { author: 'Joseph', sentAt: '2020-11-08T10:15:32.093Z', message: "Hi!" },
        { author: 'Thibault', sentAt: '2020-11-08T21:13:43.093Z', message: "What's up?" },
        { author: 'Thibault', sentAt: '2020-11-09T11:11:22.093Z', message: "Heoh" },
        { author: 'Joseph', sentAt: '2020-11-10T14:15:32.093Z', message: "Yeah sorry" },
        { author: 'Joseph', sentAt: '2020-11-10T10:23:32.093Z', message: "Hi" },
        { author: 'Thibault', sentAt: '2020-11-05T18:12:32.093Z', message: "Welcome in the new channel" },
    ]
} as { messages: Message[] };