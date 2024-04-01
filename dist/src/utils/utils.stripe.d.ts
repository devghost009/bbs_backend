import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { IUser } from 'src/users/interfaces/user.interface';
import Stripe from 'stripe';
import { EmailService } from './utils.email.service';
export declare class UtilsStripeService {
    private readonly User;
    private readonly emailService;
    private readonly configService;
    private secretKey;
    private publicKey;
    private webhookSecret;
    private stripe;
    constructor(User: Model<IUser>, emailService: EmailService, configService: ConfigService);
    getproduct: (prodId: string) => Promise<Stripe.Response<Stripe.Product>>;
    paymentMethodList(cus: string): Stripe.ApiListPromise<Stripe.PaymentMethod>;
    attachedPaymentMethod(user: IUser, pmId: string): Promise<Stripe.PaymentMethod[]>;
    getPaymentMethods(user: IUser): Promise<Stripe.PaymentMethod[]>;
    detachPaymentMethod(user: IUser, pmId: string): Promise<Stripe.PaymentMethod[]>;
    getCustomerKey(email: string, description?: string): Promise<Stripe.Response<Stripe.Customer>>;
    buyPackage(user: IUser, paymentMethodId: string, _price: number): Promise<[Error, boolean]>;
}
