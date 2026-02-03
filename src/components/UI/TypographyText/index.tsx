import type { TypographyProps as MaterialTypographyProps } from "@mui/material"
import { Typography as MaterialTypography } from "@mui/material"
import styles from "./style.module.css"
import cn from "classnames"
export type ITypographyTextProps = MaterialTypographyProps

export const TypographyText: React.FC<ITypographyTextProps> = props => {
  const { children, className = "" } = props

  return (
    <MaterialTypography {...props} className={cn(styles.text, className)}>
      {children}
    </MaterialTypography>
  )
}
