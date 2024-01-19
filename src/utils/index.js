export const delay = (ms, cb) => new Promise((resolve) => setTimeout(() => resolve(cb()), ms))
