import { ArticleData } from 'entities/Article';

export interface ArticlesSchema {
    articles: ArticleData[] | null;
    isLoading: boolean;
}
