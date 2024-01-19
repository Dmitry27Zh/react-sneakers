import axios from 'axios'
import { delay } from '../../utils/index'

export const removeCartItems = async (items) => {
  for (let item of items) {
    await delay(1000, () => axios.delete(`https://65a61ad374cf4207b4ef4757.mockapi.io/cart/${item.id}`))
  }
}
