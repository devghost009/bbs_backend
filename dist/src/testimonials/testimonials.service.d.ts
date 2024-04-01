import { Model } from 'mongoose';
import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { ITestimonial } from './interfaces/testimonial.interface';
export declare class TestimonialsService {
    private readonly Testimonial;
    constructor(Testimonial: Model<ITestimonial>);
    createTestimonial(user: IUser, description: string, rating: number): Promise<ITestimonial>;
    getAllActiveTestimonials(query: pagination): Promise<ITestimonial[]>;
    adminDeactivateTestimonial(id: string, isActive: boolean): Promise<ITestimonial>;
    deleteTestimonial(id: string): Promise<ITestimonial>;
    getAllTestimonial(query: pagination): Promise<ITestimonial[]>;
}
