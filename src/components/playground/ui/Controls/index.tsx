import { Button } from "../../../UI"
import { PlayArrow, Pause } from "@mui/icons-material"
import styles from "./style.module.css"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = props => {
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
        Play
      </Button>
      <Button
        disabled={!isTimerActive}
        onClick={() => {
          setIsTimerActive(false)
        }}
        endIcon={<Pause />}
        className={styles.button}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
