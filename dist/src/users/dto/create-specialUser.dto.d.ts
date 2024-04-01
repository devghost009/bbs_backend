export declare class CreateSpecialUser {
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    officeContact: string;
    deskContact: string;
    cell: string;
    designation: string;
    description: string;
    meetingLink: string;
}
declare class CreateBulkUser {
    role: string[];
    firstName: string;
    lastName: string;
    photo: string;
    active: string;
    email: string;
    contact: string;
    zipcode: string;
    state: string;
    city: string;
    streetAddress: string;
    password: string;
    passwordConfirm: string;
    isCampaignAllowed: boolean;
    mobilePhone: string;
    HomePhone: string;
    workPhone: string;
    designation: string;
}
export declare class CreateBulkUserDTO {
    users: CreateBulkUser[];
    role: string[];
    password: string;
}
export {};
