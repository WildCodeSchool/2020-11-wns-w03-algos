import { VideoSegment } from "./answer";

export default [
    { fromTime: "00:00:00", toTime: "00:05:23" },
    { fromTime: "00:05:23", toTime: "00:15:10", note: "NodeJS presentation" },
    { fromTime: "00:15:10", toTime: "00:16:12" },
    { fromTime: "00:16:12", toTime: "00:24:39", note: "NodeJS concepts" },
    { fromTime: "00:24:39", toTime: "00:26:12" },
    { fromTime: "00:26:12", toTime: "00:51:02", note: "Installation" },
    { fromTime: "00:51:02", toTime: "00:53:55", note: "Execution" },
    { fromTime: "00:53:55", toTime: "01:01:48" },
    { fromTime: "01:01:48", toTime: "01:07:29", note: "Livereloading" },
    { fromTime: "01:07:29", toTime: "01:33:12" },
] as VideoSegment[];