import Link from "next/link";

interface Props {
    href: string,
    name: string,
    isActive:boolean
}
export default function MenuItem_AP({href,name,isActive}: Props){
    return(
        <Link className={isActive?'nav-active_ap':''} href={href}>
            {name}
        </Link>
    )
}