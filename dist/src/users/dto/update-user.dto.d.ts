declare class NotesDto {
    creator: string;
    message: string;
}
export declare class UpdateUserDto {
    photo: string;
    firstName: string;
    lastName: string;
    designation: string;
    description: string;
    cell: string;
    city: string;
    meetingLink: string;
    zipCode: number;
    mobilePhone: string;
    HomePhone: string;
    workPhone: string;
    notes: NotesDto[];
}
export {};
