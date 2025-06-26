import Menu from "@/public-part/components/Menu/Menu";
import styles from './header.module.css'
export default function Header(){
    console.log('1231sad')
    return(

        <header className={styles.header}>
            <div className={styles.icon_container}>

            </div>
            <Menu />
        </header>
    )
}