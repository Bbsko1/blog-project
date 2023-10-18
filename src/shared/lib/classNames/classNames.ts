type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
    cls: string | undefined,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => {
    return [
        cls && cls,
        ...Object.keys(mods).filter((className) => mods[className]),
        ...additional.filter(Boolean),
    ].join(' ');
};
