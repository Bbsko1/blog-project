type ArticleBlockText = {
    id: string;
    type: 'TEXT';
    title: string;
    paragraphs: string[];
}

type ArticleBlockCode = {
    id: string;
    type: 'CODE';
    code: string;
}

type ArticleBlockImage = {
    id: string;
    type: 'IMAGE';
    src: string;
    title: string;
}

export type ArticleBlock = ArticleBlockText | ArticleBlockCode | ArticleBlockImage;

export type ArticleType = 'IT' | 'FINANCE';

export type Article = {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export interface ArticleSchema {
    articles: Article[] | null;
    isLoading: boolean;
}
