import styles from  './Header.module.css';

import igniteLogo from '../../assets/logo_fundo_branco.png';

export function Header() {

  
  return (
    <header className={styles.header}>

      <img  src={igniteLogo} alt="Ignite Logo" />
      <h2>Itushub Feed</h2>

    </header>
  )
}