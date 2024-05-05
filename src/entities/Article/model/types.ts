export type ArticleBlockText = {
    id: string;
    type: 'TEXT';
    title: string;
    paragraphs: string[];
}

export type ArticleBlockCode = {
    id: string;
    type: 'CODE';
    code: string;
}

export type ArticleBlockImage = {
    id: string;
    type: 'IMAGE';
    src: string;
    title: string;
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage;

export type ArticleType = 'IT' | 'FINANCE';

export interface ArticleData {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export interface ArticleDetailSchema {
    article: ArticleData | null;
    isLoading: boolean;
    error: string | null;
}
