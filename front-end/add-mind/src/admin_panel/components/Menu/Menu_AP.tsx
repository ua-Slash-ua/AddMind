'use client'
import {usePathname} from "next/navigation";
import styles from './menu_AP.module.css'
import MenuItem_AP from "@/admin_panel/components/Menu/MenuItem/MenuItem_AP";
import {dataMenuAP} from "@/admin_panel/components/Menu/menu.data_AP";

export default function Menu_AP(){
    const pathname = usePathname()
    return (
        <nav className={styles.navigations_ap}>
            {dataMenuAP.map(menu=><MenuItem_AP
                key={menu.href}
                href={menu.href}
                name={menu.name}
                isActive={pathname === menu.href}/>)}
        </nav>
    )
}