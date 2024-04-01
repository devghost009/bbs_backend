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
declare const STaskStatusSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
}>;
declare const TaskSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    active: "active" | "in-active";
    type: "template" | "task";
    creator: import("mongoose").Types.ObjectId;
    title: string;
    comments: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        text: string;
        user: import("mongoose").Types.ObjectId;
    }>;
    assignedTo: import("mongoose").Types.ObjectId[];
    noOfDays: number;
    deadlineDate: Date;
    description?: string;
    project?: import("mongoose").Types.ObjectId;
}>;
declare const STaskSchema: Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    active: "active" | "in-active";
    type: "template" | "task";
    creator: import("mongoose").Types.ObjectId;
    title: string;
    comments: import("mongoose").Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        text: string;
        user: import("mongoose").Types.ObjectId;
    }>;
    noOfDays: number;
    deadlineDate: Date;
    assignees: import("mongoose").Types.ObjectId[];
    status?: import("mongoose").Types.ObjectId;
    description?: string;
    project?: import("mongoose").Types.ObjectId;
}>;
export { TaskSchema, STaskStatusSchema, STaskSchema };
