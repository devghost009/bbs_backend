import { Model } from 'mongoose';
import { ICms, Home, ContactUs, About, Services, Listing, Footer, SellYourBusiness } from './interfaces/cms.interface';
import { S3Storage } from 'src/utils/utils.s3';
import { ITestimonial } from 'src/testimonials/interfaces/testimonial.interface';
import { IFaqs } from 'src/faqs/interfaces/faq.interface';
import { IAppConfig } from 'src/app-configs/interfaces/appConfig.interface';
import { IService } from 'src/services/interfaces/services.interface';
import { IReview } from 'src/reviews/interfaces/review.interface';
import { ICoreValues } from 'src/core-values/interfaces/core-values.interface';
import { IOurTeam } from 'src/our-team/interfaces/our-team.interface';
export declare class CmsService {
    private readonly Cms;
    private readonly Testimonial;
    private readonly Faq;
    private readonly AppConfigs;
    private readonly Service;
    private readonly Review;
    private readonly CoreValues;
    private readonly OurTeam;
    private readonly s3Storage;
    constructor(Cms: Model<ICms>, Testimonial: Model<ITestimonial>, Faq: Model<IFaqs>, AppConfigs: Model<IAppConfig>, Service: Model<IService>, Review: Model<IReview>, CoreValues: Model<ICoreValues>, OurTeam: Model<IOurTeam>, s3Storage: S3Storage);
    getPage(page: string, testimonials: string, faqs: string): Promise<any>;
    updatePage(pageName: string, files: any, _id: string, body: any): Promise<any>;
    updateHomePage(page: Home, id: string, files: any): Promise<ICms>;
    updateFooterPage(page: Footer, id: string, files: any): Promise<ICms>;
    updateServicesPage(page: Services, id: string, files: any): Promise<ICms>;
    updateSellYourBusiness(page: SellYourBusiness, id: string, files: any): Promise<any>;
    updateListingPage(page: Listing, id: any, files: any): Promise<any>;
    updateAboutPage(page: About, id: string, files: any): Promise<any>;
    updateContactPage(page: ContactUs, id: string, files: any): Promise<any>;
    updateCareerOpportunitiesPage(page: ContactUs, id: string): Promise<any>;
    getDynamicPage(pages: string, all: string): Promise<any>;
}
