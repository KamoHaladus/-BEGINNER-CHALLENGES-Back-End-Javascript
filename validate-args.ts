const hash = /0[xX][A-Fa-f0-9]+/;
const number = /^[0-9]*$/;
export const isHex = (value: string): boolean => hash.test(value);

export const getBlockNumbers = (params: string[]): number[] => {
    const numbers = params
        .filter((param) => {
            const matched: RegExpExecArray | null = number.exec(param);
            if (matched && matched.length > 0) {
                const input = matched[0];
                const parsed = Number.parseInt(input);
                return !Number.isNaN(parsed) && Math.sign(parsed) > -1;
            }

            return false;
        })
        .map((param) => Number.parseInt(param));

    return [...new Set(numbers)];
};

export const getBlockHashArray = (params: string[]): string[] => {
    var hashlist = params.filter((param) => isHex(param)).map((param) => param);

    return [...new Set(hashlist)];
};
