import type { TypographyProps as MaterialTypographyProps } from "@mui/material"
import { Typography as MaterialTypography } from "@mui/material"
import styles from "./style.module.css"
import cn from "classnames"
export type ITypographyHeaderProps = MaterialTypographyProps

export const TypographyHeader: React.FC<ITypographyHeaderProps> = props => {
  const { children, className = "" } = props

  return (
    <MaterialTypography
      variant="h3"
      {...props}
      className={cn(styles.text, className)}
    >
      {children}
    </MaterialTypography>
  )
}
