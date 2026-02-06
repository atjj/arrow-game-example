import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps, setUnsuccess } from "./slices"
import { useEffect, useState, useRef } from "react"
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "./constants"
import {
  RandommKeys,
  Controls,
  KeyPressed,
  Score,
  Description,
  Modal,
} from "./ui/"

import styles from "./style.module.css"

const Playground: React.FC = () => {
  const state = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current!)
    }

    return () => {
      clearInterval(refreshIntervalId.current!)
    }
  }, [isTimerActive, dispatch])

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT

    if (isSuccessful) {
      setIsSuccessEndGame(true)
    }

    if (isUnsuccessful) {
      setIsSuccessEndGame(false)
    }
    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandommKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>

      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  )
}

export default Playground
