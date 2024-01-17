import Cart from '../Cart'
import Drawer from '../Drawer'

const CartDrawer = ({ items, isCartOpen, onClose, onItemRemove }) => {
  return (
    <Drawer isShown={isCartOpen} onClose={onClose}>
      <Cart items={items} onItemRemove={onItemRemove} onClose={onClose} />
    </Drawer>
  )
}

export default CartDrawer
