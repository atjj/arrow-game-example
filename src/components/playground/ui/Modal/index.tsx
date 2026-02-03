import { Modal as MaterialModal } from "@mui/material"
import cn from "classnames"
import { resetStore } from "../../slices"
import { useAppDispatch } from "../../../../app/hooks"
import ResultMessage from "./ResultMessage"
import { Button } from "../../../UI"
export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

import styles from "./style.module.css"
const Modal: React.FC<IModalProps> = props => {
  const { setIsShowModal, isSuccessEndGame } = props

  const dispatch = useAppDispatch()

  const handleClose = () => {
    setIsShowModal(false)
    dispatch(resetStore())
  }
  return (
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button onClick={handleClose} className={styles.button}>
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
