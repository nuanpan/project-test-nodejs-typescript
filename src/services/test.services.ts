export const FindingForX = () => {
    let x = 3;
    for (let i = 1; i <= 4; i++) {
        x = x + (2 * i);
    }
    return x;
}

export const FindingForY = () => {
    return 99 - (10 * 2) - 24;
}

export const FindingForAnotherX = () => {
    let x = "5";
    for (let i = 2; i <= 5; i++) {
        x = `${i}${x}`;
    }
    return x
}