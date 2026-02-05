import { TypographyText } from "../../../../UI"
import styles from "./style.module.css"
import { useTranslation } from "react-i18next"
export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = props => {
  const { t } = useTranslation()
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          {t("modal.win.text1")} <br /> {t("modal.win.text2")}
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          {t("modal.lost")}
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
