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
declare const LeadSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    broker: import("mongoose").Types.ObjectId[];
    status: "inquired" | "nda-submitted" | "nda-signed" | "nda-approved" | "under-negotiation" | "under-contract" | "sold" | "not-interested" | "not-qualified" | "closed";
    notes: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message: string;
        creator: import("mongoose").Types.ObjectId;
    }>;
    leavedUsers: import("mongoose").Types.ObjectId[];
    listingID: import("mongoose").Types.ObjectId;
    contactName: string;
    contactPhone: string;
    contactZip: string;
    ableToInvest: string;
    purchaseWithin: string;
    comments: string;
    headline: string;
    outsideLead: boolean;
    refID: string;
    leadProgress: "not-interested" | "not-qualified" | "called" | "emailed" | "ref-to-broker";
    template: string;
    ndaTemplate: string;
    memorandum: string;
    buyer?: import("mongoose").Types.ObjectId;
    nda?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        email: string;
        firstName: string;
        lastName: string;
        contact: string;
        city: string;
        zipCode: number;
        streetAddress: string;
        state: string;
        licensedBroker: boolean;
        preferredLocation: string[];
        capitalAvailable: string[];
        timeAllocatedForBusiness: "none" | "full-time" | "part-time" | "absentee";
        minAnnualIncomeNeeds: string;
        refferedBusiness: import("mongoose").Types.ObjectId;
        areYouSure: boolean;
        areYouAcknowledged: boolean;
        brokerName?: string;
        brokerCompanyName?: string;
        currentOccupation?: string;
        businessInterested?: string;
        approvedBy?: import("mongoose").Types.ObjectId;
    };
    room?: import("mongoose").Types.ObjectId;
}>;
export { LeadSchema };
