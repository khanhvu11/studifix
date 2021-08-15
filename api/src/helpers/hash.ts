const hashjs = require('hash.js');

/**
 * Hashes password with sha256 alorithm
 * @param payload password that should be hashed
 * @returns hashed password
 */
export const hash = (payload: string): string => {
    return hashjs.sha256().update(payload).digest('hex');
};
