import { Model } from 'mongoose';
import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { CreateEventDto } from './dto/create-event.dto';
import { ICalendar } from './interfaces/calendar.interface';
export declare class CalendarService {
    private readonly Calendar;
    constructor(Calendar: Model<ICalendar>);
    getAllDayEventsAccToCalendar(params: {
        user: IUser;
        type?: string | any;
        date?: string;
        agenda?: string;
        offset?: number;
    }): Promise<{
        results: number;
        events: ICalendar[];
    }>;
    getAllEventsAccToCalendar(user: IUser, date: string, type?: string | any, agenda?: string): Promise<{
        results: number;
        events: ICalendar[];
    }>;
    getAllEvents(query: pagination): Promise<ICalendar[]>;
    createEvent(createEventDto: CreateEventDto, user: IUser): Promise<ICalendar>;
    updateEvent(calendarId: string, createEventDto: CreateEventDto): Promise<ICalendar>;
    addTaskToEvent(payload: {
        creator: string;
        attendees: IUser[];
        type: string;
        task: string;
        name: string;
        color: string;
        agenda: string;
        description: string;
        date: Date;
    }, user: IUser): Promise<[Error, ICalendar]>;
    updateTaskToEvent(payload: {
        creator: string;
        attendees: IUser[];
        type: string;
        task: string;
        name: string;
        color: string;
        agenda: string;
        description: string;
        date: Date;
    }, user: IUser): Promise<[Error, ICalendar]>;
    deleteEvent(eventId: string, user: IUser): Promise<ICalendar>;
    deleteEvent2(eventId: string): Promise<ICalendar>;
    deleteTask(taskId: string, user: IUser): Promise<ICalendar>;
    deleteMultipleTasks(taskIds: string[]): Promise<void>;
    eventsCalendarForAdmin(user: IUser, date: string, type?: string | any, agenda?: string, involvedTasks?: string): Promise<{
        results: number;
        events: ICalendar[];
    }>;
    getEventsByUser(userId: string, startAt: string, endAt: string): Promise<{
        results: number;
        events: ICalendar[];
    }>;
}
