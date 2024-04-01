import { BookMeetingService } from './book-meeting.service';
export declare class BookMeetingController {
    private readonly meetingService;
    constructor(meetingService: BookMeetingService);
    createMeeting(meetingDetails: any): Promise<string>;
    generateSignature(meetingId: number, role: number): {
        signature: string;
    };
}
