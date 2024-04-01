export declare class MeetingService {
    createMeeting(meetingDetails: any, user: any): Promise<any>;
    generateSignature(meetingNumber: number, role: number): {
        signature: string;
    };
}
