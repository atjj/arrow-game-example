import { TypographyHeader, TypographyText } from "../../../UI"
import { useTranslation } from "react-i18next"
export const Description: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <TypographyHeader>{t("gameDescription.title")}</TypographyHeader>
      <TypographyText>{t("gameDescription.desc1")}</TypographyText>
      <TypographyText>{t("gameDescription.desc2")}</TypographyText>
    </div>
  )
}
