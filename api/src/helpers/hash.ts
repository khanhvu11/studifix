var hashjs = require('hash.js')

const hash = (payload: string): string => {
    return hashjs.sha256().update(payload).digest('hex')
} 

export default { hash }
