/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Meeting2Service } from './meeting-2.service';
import { IReqDataOfCreateMeeting } from './meeting-2.interfaces';
export declare class Meeting2Controller {
    private readonly meetingService;
    constructor(meetingService: Meeting2Service);
    createMeeting(reqData: IReqDataOfCreateMeeting): Promise<string | (import("mongoose").Document<unknown, any, import("./meeting-2.interfaces").IMeeting> & Omit<import("./meeting-2.interfaces").IMeeting & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)>;
    getCalendarData(userId: string, startAt: string, endAt: string): Promise<"Server occurred an unknown error." | {
        meetings: Omit<Omit<Omit<import("mongoose").Document<unknown, any, import("./meeting-2.interfaces").IMeeting> & Omit<import("./meeting-2.interfaces").IMeeting & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>, never>, never>[];
        events: import("mongoose").LeanDocument<Omit<Omit<Omit<import("../calendars/interfaces/calendar.interface").ICalendar & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>, never>>[];
        projectName: any[];
    }>;
    updateMeeting(meetingId: string, reqData: any): Promise<string | (import("mongoose").Document<unknown, any, import("./meeting-2.interfaces").IMeeting> & Omit<import("./meeting-2.interfaces").IMeeting & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)>;
    deleteMeeting(meetingId: string): Promise<"Server occurred an unknown error." | {
        deletedMeeting: import("mongoose").Document<unknown, any, import("./meeting-2.interfaces").IMeeting> & Omit<import("./meeting-2.interfaces").IMeeting & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
        deletedCalendar: import("../calendars/interfaces/calendar.interface").ICalendar;
    }>;
}
