import { TypographyText } from "../../../../../UI"
import stylesCommon from "../../style.module.css"
import loader from "./img/loader.svg"
import styles from "./style.module.css"
export interface IWelcomeTextProps {
  isTimerActive: boolean
  description: string
}

const WelcomeText: React.FC<IWelcomeTextProps> = props => {
  const { isTimerActive, description } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="Loader" />
        </span>
      </div>
    )
  }

  return <TypographyText>{description}</TypographyText>
}

export default WelcomeText
