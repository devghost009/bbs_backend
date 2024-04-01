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
import { Schema } from 'mongoose';
declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    active: "active" | "system-deactivated" | "user-deactivated";
    photo: string;
    email: string;
    fcmToken: string[];
    passwordConfirm: string;
    firstName: string;
    lastName: string;
    contact: string;
    role: string[];
    description: string;
    inAppNotifications: boolean;
    pushNotifications: boolean;
    officeContact: string;
    deskContact: string;
    cell: string;
    meetingLink: string;
    designation: string;
    city: string;
    zipCode: number;
    involvedBusiness: import("mongoose").Types.ObjectId[];
    ownedBusiness: import("mongoose").Types.ObjectId[];
    vipList: import("mongoose").Types.ObjectId[];
    ndaSigned: import("mongoose").Types.ObjectId[];
    leadInterested: import("mongoose").Types.ObjectId[];
    ndaSubmitted: import("mongoose").Types.ObjectId[];
    isOnline: boolean;
    socketIds: string[];
    lastLogin: Date;
    isCampaignAllowed: boolean;
    imap: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        password: string;
        host: string;
        port: number;
        user: string;
        authTimeout: number;
        tls: boolean;
        tlsOptions: any;
    };
    notes: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message: string;
        creator: import("mongoose").Types.ObjectId;
    }>;
    hasNotification: boolean;
    mobilePhone: string;
    HomePhone: string;
    workPhone: string;
    ringCentral: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        password: string;
        clientId: string;
        clientSecret: string;
        username: string;
        extension: string;
    };
    password?: string;
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    cus?: string;
    nda?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        city: string;
        zipCode: number;
        streetAddress: string;
        state: string;
        preferredLocation: string[];
        capitalAvailable: string[];
        email?: string;
        firstName?: string;
        lastName?: string;
        contact?: string;
        licensedBroker?: boolean;
        brokerName?: string;
        brokerCompanyName?: string;
        currentOccupation?: string;
        businessInterested?: string;
        timeAllocatedForBusiness?: string;
        minAnnualIncomeNeeds?: string;
    };
    passwordChangedAt?: number;
}>;
export { UserSchema };
