import styles from './Sidebar.module.css';

import {PencilLine} from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {

  return (

    
    <aside className={styles.sidebar}>

    <img 
    src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
    className={styles.cover}
    />

    <div className={styles.profile}>
      <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/60746590?v=4"/>
      <strong>Cássio Henrique</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="https://www.instagram.com/cassio_izidorio">
        
        <PencilLine size={20} /> 
        Editar seu Perfil
      
      </a>
    </footer>

    </aside>

  )
  
}