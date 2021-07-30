const hashjs = require('hash.js');

export const hash = (payload: string): string => {
    return hashjs.sha256().update(payload).digest('hex');
};
