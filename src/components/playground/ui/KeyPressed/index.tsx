import styles from "./style.module.css"

import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { setEnteredValue } from "../../slices"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import { useTranslation } from "react-i18next"
export interface IKeyPressedProps {
  isTimerActive: boolean
}

export const KeyPressed: React.FC<IKeyPressedProps> = props => {
  const { isTimerActive } = props

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const keyPressedElement = useKeyPressedElement()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        Object.prototype.hasOwnProperty.call(MAP_ARROW_CODES, e.key) &&
        isTimerActive
      ) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div>
      <TypographyHeader>{t("keyPressed.title")}</TypographyHeader>
      <div className={styles.container}>
        <TypographyText>{t("keyPressed.desc")}</TypographyText>
        <div className={styles.wrapper}>
          <span className={styles.icon}>{keyPressedElement}</span>
        </div>
      </div>
    </div>
  )
}
