import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg'
import styles from './Info.module.scss'

const Info = ({ imgSrc, title, text, onClose }) => {
  return (
    <div className={`${styles.info} d-flex flex-column justify-center align-center`}>
      <img width={120} height={120} src={imgSrc} alt="Empty box" />
      <h2>{title}</h2>
      <p className="opacity-6">{text}</p>
      <button className="button-color" type="button" onClick={onClose}>
        <ArrowLeftIcon className="button-color__icon button-color__icon--left" width={16} height={14} />
        <span>Вернуться назад</span>
      </button>
    </div>
  )
}

export default Info
