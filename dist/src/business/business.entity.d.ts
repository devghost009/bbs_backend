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
declare const BusinessSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    broker: import("mongoose").Types.ObjectId[];
    status: "under-contract" | "sold" | "active" | "pre-listing" | "off-market";
    images: string[];
    description: string;
    city: string;
    ndaSigned: import("mongoose").Types.ObjectId[];
    leadInterested: import("mongoose").Types.ObjectId[];
    ndaSubmitted: import("mongoose").Types.ObjectId[];
    notes: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message: string;
        creator: import("mongoose").Types.ObjectId;
    }>;
    state: string;
    title: string;
    leavedUsers: import("mongoose").Types.ObjectId[];
    isFeatured: boolean;
    dummyImage: string;
    inventory: number;
    cashFlow: number;
    grossSales: number;
    businessOpportunity: number;
    category: import("mongoose").Types.ObjectId;
    industry: string;
    country: string;
    dummyDescription: string;
    buildingSF: string;
    monthlyRent: number;
    realEstate: number;
    totalEmployees: number;
    partTimeEmployees: number;
    fullTimeEmployees: number;
    ownerInvolvment: string;
    reason: string;
    businessAddress: string;
    googleMapAddress: string;
    financialsDescription: string;
    financialsAnalysis: string[];
    financialsCSVImages: string[];
    businessHighlights: string[];
    thirdPartyPresence: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        link: string;
        key: string;
    }>;
    vipUsers: import("mongoose").Types.ObjectId[];
    pros: string[];
    cons: string[];
    propertyInformation: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        description: string;
        title: string;
        leaseInformation: string;
        leaseRate: string;
    };
    demographics: string[];
    hoursOfOperation: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        days?: string;
        hours?: string;
    }>;
    hoursOfOperationOpportunity: string;
    recentImprovements: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        year: number;
        features: string[];
    }>;
    financingOptions: string[];
    buyerAssignedToDataRoom: import("mongoose").Types.ObjectId[];
    companyName: string;
    autoNdaApprove: boolean;
    ownerTemplate: string;
    room?: import("mongoose").Types.ObjectId;
    order?: number;
    slug?: string;
    owner?: import("mongoose").Types.ObjectId;
    futureOwner?: import("mongoose").Types.ObjectId;
    projectFolder?: import("mongoose").Types.ObjectId;
    refId?: string;
    amountType?: "rent" | "real-estate";
    location?: {
        enum: unknown[];
        type?: string;
        default?: unknown;
    };
    financialsCSV1?: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        column1: string;
        column2: string;
        column3: string;
        column4: string;
        column5: string;
        column6: string;
    }>;
    financialsCSV2?: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        column1: string;
        column2: string;
        column3: string;
        column4: string;
        column5: string;
        column6: string;
    }>;
}>;
export { BusinessSchema };
