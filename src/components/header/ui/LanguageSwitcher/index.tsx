import type { SelectChangeEvent } from "@mui/material"
import { Select, MenuItem } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LANGUAGE_CODES } from "../../constants"
import styles from "./style.module.css"

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const handleChange = (event: SelectChangeEvent) => {
    void i18n.changeLanguage(event.target.value)
  }

  return (
    <Select
      className={styles.select}
      value={i18n.resolvedLanguage}
      onChange={handleChange}
    >
      {LANGUAGE_CODES.map(item => (
        <MenuItem className={styles.item} value={item.code}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}
