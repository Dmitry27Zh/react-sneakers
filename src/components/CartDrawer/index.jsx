import Cart from '../Cart'
import Drawer from '../Drawer'

const CartDrawer = ({ isCartOpen, onClose }) => {
  return (
    <Drawer isShown={isCartOpen} onClose={onClose}>
      <Cart />
    </Drawer>
  )
}

export default CartDrawer
