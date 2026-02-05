import { Chip, Stack } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import styles from "./style.module.css"
import { useTranslation } from "react-i18next"

const Score: React.FC = () => {
  const { t } = useTranslation()
  const state = useAppSelector(state => state.playground)
  return (
    <>
      <TypographyHeader>{t("Score.title")}</TypographyHeader>
      <TypographyText>{t("Score.desc")}</TypographyText>
      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccess}
          variant="outlined"
          label={
            <>
              {t("Score.errors")}
              <span className={styles.counter}>{state.totalUnsuccessful}</span>
            </>
          }
        />
        <Chip
          className={styles.chipSuccess}
          variant="outlined"
          label={
            <>
              {t("Score.successful")}
              <span className={styles.counter}>{state.totalSuccessful}</span>
            </>
          }
        />
      </Stack>
    </>
  )
}

export default Score
