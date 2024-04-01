import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { TestimonialsService } from './testimonials.service';
export declare class TestimonialsController {
    private readonly testimonialService;
    constructor(testimonialService: TestimonialsService);
    getAllActiveTestimonials(query: pagination): Promise<{
        results: number;
        data: import("./interfaces/testimonial.interface").ITestimonial[];
    }>;
    createTestimonial(user: IUser, description: string, rating: number): Promise<{
        data: import("./interfaces/testimonial.interface").ITestimonial;
    }>;
    adminDeactivateTestimonial(id: string, isActive: boolean): Promise<import("./interfaces/testimonial.interface").ITestimonial>;
    deleteTestimonial(id: string): Promise<import("./interfaces/testimonial.interface").ITestimonial>;
    getAllTestimonial(query: pagination): Promise<{
        results: number;
        data: import("./interfaces/testimonial.interface").ITestimonial[];
    }>;
}
