import Items from '../../../components/Items'
import styles from './OrderItems.module.scss'

const OrdersItems = ({ orders }) => {
  return orders.map(({ id, items }) => (
    <div className={styles['order-items']} key={id}>
      <h2>#{id}</h2>
      <Items items={items} isInteractive={false} isLoading={false} />
    </div>
  ))
}

export default OrdersItems
