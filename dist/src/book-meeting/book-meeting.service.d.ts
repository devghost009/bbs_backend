import { CalendarService } from 'src/calendars/calendar.service';
export declare class BookMeetingService {
    private readonly calendarService;
    constructor(calendarService: CalendarService);
    createMeeting(reqData: any): Promise<string>;
    generateSignature(meetingNumber: number, role: number): {
        signature: string;
    };
}
