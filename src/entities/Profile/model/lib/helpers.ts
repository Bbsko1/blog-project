export const isValidUrl = (value: string | undefined) => {
    if (!value) return false;

    try {
        const a = new URL(value);
        return true;
    } catch (err) {
        return false;
    }
};
