/**
 * this file is used to reduce code when logging precise information instead of only firing console logs
 * we can describe logs as info, debugs, warnings or errors
 */

// create timestamp
const timestamp = (): string => {
    return new Date().toISOString();
};

const info = (location: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${timestamp()}] [INFO] [${location}] ${message}`, object);
    } else {
        console.info(`[${timestamp()}] [INFO] [${location}] ${message}`);
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${timestamp()}] [WARN] [${namespace}] ${message}`, object);
    } else {
        console.warn(`[${timestamp()}] [WARN] [${namespace}] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${timestamp()}] [ERROR] [${namespace}] ${message}`, object);
    } else {
        console.error(`[${timestamp()}] [ERROR] [${namespace}] ${message}`);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${timestamp()}] [DEBUG] [${namespace}] ${message}`, object);
    } else {
        console.debug(`[${timestamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

export default {
    info,
    warn,
    error,
    debug
};
