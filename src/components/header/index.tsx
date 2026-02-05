import styles from "./style.module.css"

import { LanguageSwitcher } from "./ui/LanguageSwitcher"

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <LanguageSwitcher />
    </div>
  )
}

export default Header
