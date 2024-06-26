export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    project: 'frontend' | 'storybook' | 'jest';
    port: number;
    analyze: boolean;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    analyze: string;
}
