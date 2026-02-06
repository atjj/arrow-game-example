import { Modal as MaterialModal } from "@mui/material"
import cn from "classnames"
import { resetStore } from "../../slices"
import { useAppDispatch } from "../../../../app/hooks"
import ResultMessage from "./ResultMessage"
import { Button } from "../../../UI"
import { useTranslation } from "react-i18next"
export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

import styles from "./style.module.css"
export const Modal: React.FC<IModalProps> = props => {
  const { t } = useTranslation()
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
          {t("modal.buttonText")}
        </Button>
      </div>
    </MaterialModal>
  )
}
