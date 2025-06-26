import Link from "next/link";
import styles  from './menuItem.module.css'
interface Props {
    href: string,
    name: string,
    isActive:boolean
}
export default function MenuItem({href,name,isActive}: Props){
    return(
        <Link
            className={`${styles.link} ${isActive ? 'nav-active' : ''}`}
            href={href}
        >
            {name}
        </Link>

    )
}
