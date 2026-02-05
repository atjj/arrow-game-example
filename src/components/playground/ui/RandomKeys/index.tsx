import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../UI"
import { useTranslation } from "react-i18next"
import { RandomArrows, WelcomeText } from "./ui"
export interface IRandommKeysProps {
  isTimerActive: boolean
}

const RandommKeys: React.FC<IRandommKeysProps> = props => {
  const { isTimerActive } = props
  const state = useAppSelector(state => state.playground)
  const { t } = useTranslation()
  const headerText = t("randomKeys.title")
  const description = t("randomKeys.desc")
  return (
    <div>
      <TypographyHeader>{headerText}</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomeText description={description} isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandommKeys
