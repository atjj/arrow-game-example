import type { ButtonProps as MaterialButtonProps } from "@mui/material"
import { Button as MaterialButton } from "@mui/material"
import styles from "./style.module.css"
import cn from "classnames"
export type IButtonProps = MaterialButtonProps

export const Button: React.FC<IButtonProps> = props => {
  const { children, className = "" } = props

  return (
    <MaterialButton
      size="small"
      variant="contained"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MaterialButton>
  )
}
