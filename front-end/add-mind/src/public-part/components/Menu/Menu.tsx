'use client'

import {usePathname} from "next/navigation";
import './menu.css'
import {dataMenu} from "@/public-part/components/Menu/menu.data";
import MenuItem from "@/public-part/components/Menu/MenuItem/MenuItem";


export default function Menu() {
    const pathname = usePathname()
    return (
        <nav>
            {dataMenu.map(menu=><MenuItem
                key={menu.href}
                href={menu.href}
                name={menu.name}
                isActive={pathname === menu.href}/>)}
        </nav>
    )
}
