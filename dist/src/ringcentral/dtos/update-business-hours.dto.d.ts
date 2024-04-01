declare class DayDto {
    from: string;
    to: string;
}
declare class WeeklyRangesDto {
    monday: DayDto[];
    tuesday: DayDto[];
    wednesday: DayDto[];
    thursday: DayDto[];
    friday: DayDto[];
    saturday: DayDto[];
    sunday: DayDto[];
}
declare class WeeklyRanges {
    weeklyRanges: WeeklyRangesDto;
}
export declare class UpdateBusinessHoursDto {
    schedule: WeeklyRanges;
}
export {};
