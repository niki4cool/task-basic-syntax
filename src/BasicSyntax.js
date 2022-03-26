export function romanToInteger(str) {
    let result = 0;
    const convert = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 1; i < str.length; i++) {
        if (convert[str[i - 1]] >= convert[str[i]]) {
            result += convert[str[i - 1]];
        } else {
            result += convert[str[i]] - convert[str[i - 1]];
            i++;
        }

        if (i + 1 == str.length) {
            result += convert[str[i]];
        }
    }
    return result;
}
