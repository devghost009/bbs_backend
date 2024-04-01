declare class BusinessAddressDto {
    street: string;
    city: string;
    state: string;
    zip: number;
}
declare class CallersDto {
    callerId: string;
    name: string;
}
declare class PhoneDto {
    phoneNumber: string;
}
declare class RecipientDto {
    uri: string;
    id: number;
}
declare class VoiceMailDto {
    enabled: boolean;
    recipient: RecipientDto;
}
export declare class RingCentralMessageDto {
    message: string;
    toUser: string;
    to: string[];
}
export declare class CreateExternalContactDto {
    firstName: string;
    lastName: string;
    businessPhone: string;
    businessAddress: BusinessAddressDto;
}
export declare class UpdateExternalContactDto {
    firstName: string;
    lastName: string;
    businessPhone: string;
    businessAddress: BusinessAddressDto;
}
export declare class CreateCallHandling {
    type: string;
    name: string;
    callers: CallersDto[];
    calledNumbers: PhoneDto[];
    voicemail: VoiceMailDto;
}
declare const UpdateCallHandling_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCallHandling>>;
export declare class UpdateCallHandling extends UpdateCallHandling_base {
}
export {};
