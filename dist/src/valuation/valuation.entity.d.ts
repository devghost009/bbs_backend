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
declare const ValuationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "rejected" | "pending" | "evaluated";
    email: string;
    firstName: string;
    lastName: string;
    contact: string;
    city: string;
    ownedBusiness: string;
    streetAddress: string;
    state: string;
    postalCode: string;
    currentBusiness: string;
    planningToRelocate: boolean;
    lookingForBusiness: string;
    planPurchasingBusiness: string;
    businessAssistance: string;
    planPayingPurchase: string;
    cashRange: string;
    creditScore: string;
    bankruptcy: boolean;
    felony: boolean;
    currentClaims: boolean;
    totalCash: string;
    accountsPayable: string;
    totalStock: string;
    payables: string;
    retirementFunds: string;
    mortgage: string;
    homeEquity: string;
    otherMortgages: string;
    totalEquity: string;
    otherLiabilities: string;
    totalLiabilities: string;
    otherAssets: string;
    netWorth: string;
    totalAssets: string;
    liabilitesNetWorth: string;
    spouseName?: string;
    streetAddress2?: string;
    businessEquity?: string;
}>;
export { ValuationSchema };
