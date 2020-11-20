import { VideoWithNotes } from "./answer";

export default {
    video: {
        videoDuration: "01:33:12",
        notes: [
            { fromTime: "00:05:23", toTime: "00:15:10", note: "NodeJS presentation" },
            { fromTime: "00:26:12", toTime: "00:51:02", note: "Installation" },
            { fromTime: "00:51:02", toTime: "00:53:55", note: "Execution" },
            { fromTime: "01:01:48", toTime: "01:07:29", note: "Livereloading" },
            { fromTime: "00:16:12", toTime: "00:24:39", note: "NodeJS concepts" }
        ]
    }
} as { video: VideoWithNotes };