import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../UI"

import { RandomArrows, WelcomeText } from "./ui"
export interface IRandommKeysProps {
  isTimerActive: boolean
}

const RandommKeys: React.FC<IRandommKeysProps> = props => {
  const { isTimerActive } = props
  const state = useAppSelector(state => state.playground)

  return (
    <div>
      <TypographyHeader>Random keys</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandommKeys
