import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { CreateEventDto } from './dto/create-event.dto';
import { CalendarService } from './calendar.service';
export declare class CalendarController {
    private readonly calendarService;
    constructor(calendarService: CalendarService);
    getAllEvents(query: pagination): Promise<import("./interfaces/calendar.interface").ICalendar[]>;
    getAllEventsAccToCalendar(user: IUser, date: string, type: string, agenda: string): Promise<{
        results: number;
        events: import("./interfaces/calendar.interface").ICalendar[];
    }>;
    getAllDayEventsAccToCalendar(user: IUser, type: string, date: string, agenda: string, offset: string): Promise<{
        results: number;
        events: import("./interfaces/calendar.interface").ICalendar[];
    }>;
    eventsCalendarForAdmin(user: IUser, date: string, type: string, agenda: string, involvedTasks: string): Promise<{
        results: number;
        events: import("./interfaces/calendar.interface").ICalendar[];
    }>;
    createEvent(createEventDto: CreateEventDto, user: IUser): Promise<import("./interfaces/calendar.interface").ICalendar>;
    updateEvent(calendarId: string, createEventDto: CreateEventDto): Promise<import("./interfaces/calendar.interface").ICalendar>;
    deleteEvent(eventId: string, user: IUser): Promise<import("./interfaces/calendar.interface").ICalendar>;
    deleteEvent2(eventId: string): Promise<import("./interfaces/calendar.interface").ICalendar>;
    getEventsByUser(userId: string, startAt: string, endAt: string): Promise<{
        results: number;
        events: import("./interfaces/calendar.interface").ICalendar[];
    }>;
}
