import { TypographyText } from "../../../../UI"
import styles from "./style.module.css"
export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = props => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          Well done! <br /> You won!!
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          You lost the game
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
