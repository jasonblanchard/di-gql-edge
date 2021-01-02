export function codeToString(code: number) {
    switch(code) {
        case 0:
            return 'OK';
        case 5:
            return 'NOT_FOUND';
        default:
            return 'UNKNOWN';
    }
}