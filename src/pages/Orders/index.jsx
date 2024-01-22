import { useState, useEffect } from 'react'
import axios from 'axios'
import OrdersItems from './OrdersItems'
import Items from '../../components/Items'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://65a7e40e94c2c5762da7d713.mockapi.io/orders')
        setOrders(data)
      } catch (e) {
        alert(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои заказы</h1>
      </div>
      {isLoading ? <Items items={[]} isInteractive={false} isLoading={true} /> : <OrdersItems orders={orders} />}
    </>
  )
}

export default Orders
