import { MeetingService } from './meeting.service';
export declare class MeetingController {
    private readonly meetingService;
    constructor(meetingService: MeetingService);
    createMeeting(meetingDetails: any, user: any): Promise<any>;
    generateSignature(meetingId: number, role: number): {
        signature: string;
    };
}
