import Cart from '../Cart'
import Drawer from '../Drawer'

const CartDrawer = ({ isCartOpen }) => {
  return (
    <Drawer isShown={isCartOpen}>
      <Cart />
    </Drawer>
  )
}

export default CartDrawer
