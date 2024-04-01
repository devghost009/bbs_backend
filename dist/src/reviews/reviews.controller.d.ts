import { pagination } from 'src/utils/utils.types';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto): Promise<import("./interfaces/review.interface").IReview>;
    findAll(query: pagination): Promise<{
        data: import("./interfaces/review.interface").IReview[];
        totalCount: number;
        results: number;
    }>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<import("./interfaces/review.interface").IReview>;
    remove(id: string): Promise<import("./interfaces/review.interface").IReview>;
}
