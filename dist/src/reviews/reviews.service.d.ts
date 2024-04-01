import { Model } from 'mongoose';
import { pagination } from 'src/utils/utils.types';
import { IReview } from './interfaces/review.interface';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsService {
    private readonly Reviews;
    constructor(Reviews: Model<IReview>);
    create(createReviewDto: CreateReviewDto): Promise<IReview>;
    findAll(query: pagination): Promise<{
        data: IReview[];
        totalCount: number;
        results: number;
    }>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<IReview>;
    delete(id: string): Promise<IReview>;
}
