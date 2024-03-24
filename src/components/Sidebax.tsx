import { Avatar } from './Avatar'
import styles from "./Sidebar.module.css"
import { PencilLine } from "@phosphor-icons/react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1577375729078-820d5283031c?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/amaroartur.png" />

        <strong>Artur Amaro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}