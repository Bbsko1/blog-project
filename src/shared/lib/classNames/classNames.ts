type Mods = Record<string, boolean | string>;

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string => {
    return [
        cls,
        ...Object.keys(mods).filter((className) => mods[className]),
        ...additional.filter(Boolean),
    ].join(' ');
};
