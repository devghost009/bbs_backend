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
declare const CmsSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    contact?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        description: string;
        title: string;
        hoursOfOperation: import("mongoose").Types.DocumentArray<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            days: string;
            hours: string;
        }>;
        getInTouchImage: string;
        pageName: string;
        callUs: string[];
        visitUs: string;
        haveQuestions: string;
        footer_title1: string;
        footer_description1: string;
        footer_title2: string;
        footer_description2: string;
        getInTouchTitle: string;
    };
    home?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        section2_icon1: string;
        section2_icon2: string;
        section3_image: string;
        pageName: string;
        section1_title: string;
        section3_title: string;
        section3_description: string;
        section1_description: string;
        section4_icons: {
            key: string;
            title: string;
        }[];
        section1_subTitle: string;
        section2_title1: string;
        section2_description1: string;
        section2_title2: string;
        section2_description2: string;
        section5_title1: string;
        section5_description1: string;
        section5_title2: string;
        section5_description2: string;
        section1_image?: string;
    };
    services?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        section3_image: string;
        section1_image: string;
        section2_image: string;
        pageName: string;
        section1_title: string;
        section2_title: string;
        section2_description: string;
        section3_title: string;
        section3_description: string;
        section4_description: string;
        section1_description: string;
        section4_title: string;
        main_title: string;
        section4_icons: {
            key: string;
            title: string;
        }[];
    };
    about?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        section3_image: string;
        section1_image: string;
        section4_image: string;
        section5_image: string;
        pageName: string;
        section1_title: string;
        section1_subTitle1: string;
        section1_subTitle2: string;
        section1_subTitle3: string;
        section2_title: string;
        section2_description: string;
        section3_title: string;
        section3_description: string;
        section4_description: string;
        section5_description: string;
    };
    listing?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        section1_image: string;
        pageName: string;
        section1_title: string;
        section2_title: string;
        section2_description: string;
        section1_description: string;
        section1_subTitle: string;
    };
    sellYourBusiness?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        section3_image: string;
        section1_image: string;
        section2_image: string;
        section4_image: string;
        pageName: string;
        section1_title: string;
        section2_title: string;
        section2_description: string;
        section3_title: string;
        section3_description: string;
        section4_description: string;
        section1_description: string;
        section4_title: string;
    };
    careerOpportunities?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        pageName: string;
        section1_title: string;
        section2_title: string;
        section1_description: string;
        section2_description1: string;
        section2_description2: string;
        section2_subTitle1: string;
        section2_subTitle2: string;
    };
    footer?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        email: string;
        footer_image: string;
        pageName: string;
        footer_title: string;
        footer_description: string;
        footer_icons: {
            link: string;
            icon_type: "facebook" | "linkedIn" | "twitter" | "instagram";
        }[];
        contactNo: string;
    };
}>;
export { CmsSchema };
