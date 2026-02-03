import stylesCommon from "../../style.module.css"
import styles from "./style.module.css"

import { useAppSelector } from "../../../../../../app/hooks"
import type { IMapArrowCodes, IPlaygroundStepsState } from "../../../../types"
import { MAP_ARROW_CODES } from "../../../../constants"
import cn from "classnames"
const RandomArrows: React.FC = () => {
  const state = useAppSelector(state => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success === true) {
      return cn(stylesCommon.icon, styles.iconSuccess)
    }

    if (element.success === false) {
      return cn(stylesCommon.icon, styles.iconUnsuccess)
    }
    return stylesCommon.icon
  }

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map(el => (
        <span key={el.step} className={getStylesRandomKeys(el)}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
