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
/// <reference types="mongoose/types/inferschematype" />
import { CalendarService } from 'src/calendars/calendar.service';
import { IMeeting, IReqData, IReqDataOfCreateMeeting, IReqDataOfUpdateMeeting, IReturnValueOfGenerateMeeting } from './meeting-2.interfaces';
import { Model } from 'mongoose';
import { ICalendar } from 'src/calendars/interfaces/calendar.interface';
import { IProject } from 'src/projects/interfaces/project.interface';
export declare class Meeting2Service {
    private readonly Project;
    private readonly Meeting;
    private readonly Calendar;
    private readonly calendarService;
    constructor(Project: Model<IProject>, Meeting: Model<IMeeting>, Calendar: Model<ICalendar>, calendarService: CalendarService);
    hasOverlapOrNoGap(startAt: Date, endAt: Date): Promise<boolean>;
    generateMeetingUrls(reqData: IReqData): Promise<IReturnValueOfGenerateMeeting | string>;
    createMeeting(reqData: IReqDataOfCreateMeeting): Promise<string | (import("mongoose").Document<unknown, any, IMeeting> & Omit<IMeeting & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)>;
    getProjectName(taskId: string): Promise<any>;
    getCalendarData(userId: string, startAt: string, endAt: string): Promise<"Server occurred an unknown error." | {
        meetings: Omit<Omit<Omit<import("mongoose").Document<unknown, any, IMeeting> & Omit<IMeeting & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>, never>, never>[];
        events: import("mongoose").LeanDocument<Omit<Omit<Omit<ICalendar & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>, never>>[];
        projectName: any[];
    }>;
    updateMeeting(meetingId: string, reqData: IReqDataOfUpdateMeeting): Promise<string | (import("mongoose").Document<unknown, any, IMeeting> & Omit<IMeeting & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)>;
    deleteMeeting(meetingId: string): Promise<"Server occurred an unknown error." | {
        deletedMeeting: import("mongoose").Document<unknown, any, IMeeting> & Omit<IMeeting & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
        deletedCalendar: ICalendar;
    }>;
}
