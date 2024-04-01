export declare class ThirdPartyLinksDto {
    key: string;
    link: string;
}
export declare class OperationHoursDto {
    days: string;
    hours: string;
}
export declare class RecentImprovementsDto {
    year: Number;
    features: string[];
}
export declare class PropertyInformationDto {
    title: string;
    leaseInformation: string;
    leaseRate: string;
    description: string;
}
export declare class CreateBusinessDto {
    dummyImage: string;
    images: string[];
    financialsAnalysis: string[];
    demographics: string[];
    title: string;
    refId: string;
    broker: string;
    owner: string;
    order: number;
    inventory: number;
    cashFlow: number;
    grossSales: number;
    category: string;
    industry: string;
    city: string;
    country: string;
    state: string;
    dummyDescription: string;
    description: string;
    buildingSF: string;
    monthlyRent: number;
    realEstate: number;
    partTimeEmployees: number;
    fullTimeEmployees: number;
    ownerInvolvment: string;
    reason: string;
    businessAddress: string;
    businessOpportunity: number;
    googleMapAddress: string;
    longitude: number;
    latitude: number;
    financialsDescription: string;
    businessHighlights: string[];
    thirdPartyPresence: ThirdPartyLinksDto[];
    pros: string[];
    cons: string[];
    propertyInformation: PropertyInformationDto;
    hoursOfOperation: OperationHoursDto[];
    hoursOfOperationOpportunity: string;
    recentImprovements: RecentImprovementsDto[];
    financingOptions: string[];
    companyName: string;
    autoNdaApprove: boolean;
    isFeatured: boolean;
}
