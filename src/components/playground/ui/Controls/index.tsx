import { Button } from "../../../UI"
import { PlayArrow, Pause } from "@mui/icons-material"
import styles from "./style.module.css"
import { useTranslation } from "react-i18next"
export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Controls: React.FC<IControlsProps> = props => {
  const { t } = useTranslation()
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        disabled={isTimerActive}
        onClick={() => {
          setIsTimerActive(true)
        }}
        endIcon={<PlayArrow />}
        className={styles.button}
      >
        {t("controlButtons.play")}
      </Button>
      <Button
        disabled={!isTimerActive}
        onClick={() => {
          setIsTimerActive(false)
        }}
        endIcon={<Pause />}
        className={styles.button}
      >
        {t("controlButtons.pause")}
      </Button>
    </div>
  )
}
