import mongoose from 'mongoose';
declare const AppConfigSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    KeyType: "ContactInfo";
    ContactInfo?: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        email: string;
        url: string;
        contact: string;
        designation: string;
        address: string;
    };
}>;
export { AppConfigSchema };
