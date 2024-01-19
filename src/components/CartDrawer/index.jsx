import { useContext } from 'react'
import Cart from '../Cart'
import Drawer from '../Drawer'
import AppContext from '../../contexts/AppContext'

const CartDrawer = ({ items, onClose, onItemRemove }) => {
  const { isCartOpen } = useContext(AppContext)

  return (
    <Drawer isShown={isCartOpen} onClose={onClose}>
      <Cart items={items} onItemRemove={onItemRemove} onClose={onClose} />
    </Drawer>
  )
}

export default CartDrawer
