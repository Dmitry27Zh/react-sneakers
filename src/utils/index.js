const currency = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
})

export const formatCurrency = (num) => currency.format(num)

export const delay = (ms, cb) => new Promise((resolve) => setTimeout(() => resolve(cb()), ms))
