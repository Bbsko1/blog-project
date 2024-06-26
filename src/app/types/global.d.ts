declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare const __IS_DEV__: boolean;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
