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
declare const ContactSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    readUserIds: string[];
    email?: string;
    firstName?: string;
    lastName?: string;
    contact?: string;
    role?: string;
}>;
declare const SSMSSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isRead: boolean;
    accountSid: string;
    status?: string;
    to?: string;
    from?: string;
    apiVersion?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    direction?: string;
    price?: string;
    priceUnit?: string;
    sid?: string;
    subresourceUris?: any;
    uri?: string;
    body?: string;
    dateSent?: Date;
    errorCode?: string;
    errorMessage?: string;
    messagingServiceSid?: string;
    numMedia?: string;
    numSegments?: string;
}>;
declare const SCallSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isRead: boolean;
    accountSid: string;
    status?: string;
    to?: string;
    from?: string;
    answeredBy?: string;
    apiVersion?: string;
    callerName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    direction?: string;
    duration?: string;
    endTime?: Date;
    forwardedFrom?: string;
    fromFormatted?: string;
    groupSid?: string;
    parentCallSid?: string;
    phoneNumberSid?: string;
    price?: string;
    priceUnit?: string;
    sid?: string;
    startTime?: Date;
    subresourceUris?: any;
    toFormatted?: string;
    trunkSid?: string;
    uri?: string;
    queueTime?: string;
}>;
export { ContactSchema, SSMSSchema, SCallSchema };
