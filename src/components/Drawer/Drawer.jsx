import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'

const Drawer = ({ children, isShown }) => {
  return (
    <div className="drawer" style={{ display: isShown ? null : 'none' }}>
      <div className="drawer__overlay"></div>
      <div className="drawer__content d-flex flex-column">
        <div className="drawer__title d-flex justify-between align-center mb-30">
          <h2>Корзина</h2>
          <button className="drawer__title-btn button" aria-label="Remove">
            <DeleteIcon className="button__icon" width={32} height={32} aria-hidden={true} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Drawer
