/// <reference types="node" />
export type leadGraphType = {
    _id: number;
    date: string;
    lead: number;
    month: string;
};
export declare const matchRoles: (roles: string[], userRoles: string[]) => boolean;
export declare const saveFile: (html: string) => Promise<Buffer>;
export declare const getImageType: (base64String: string) => string;
export declare const getBase64Images: (str: string) => RegExpMatchArray;
export declare const addBoxFlags: (box: string) => string[];
export declare const categorizeByrole: (users: any[]) => {};
export declare const isBoolean: (val: any) => boolean;
export declare const paginate: (array: any[], limit: number, skip: number) => any[];
export declare const daysRange: (startDate: any, count: number) => any[];
export declare const daysCount: (startDate: any, endDate: any) => number;
export declare const makeRoleObject: (roles?: string[]) => {};
export declare const checkMetaRoles: (obj: object, roles: string[]) => boolean;
export declare const objToArr: (obj: object) => string[];
export declare const toFixed: (value: number) => number;
export declare const imageFileFilter: (req: any, file: any, cb: any) => any;
export declare const csvFileFilter: (req: any, file: any, cb: any) => any;
export declare const ErrorHanldingFn: (err: any) => never;
export declare const includes: (macthingProp: any, arr: any[], el?: any) => boolean;
export declare const everyFn: (superSet: string[], arr: string[]) => boolean;
export declare const someFn: (superSet: string[], arr: string[]) => boolean;
export declare const groupLeads: (leads: object[], key: string) => [string, any][];
export declare const extractLeadDetails: (text: string) => {};
