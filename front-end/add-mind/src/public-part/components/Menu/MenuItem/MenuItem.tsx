import Link from "next/link";

interface Props {
    href: string,
    name: string,
    isActive:boolean
}
export default function MenuItem({href,name,isActive}: Props){
    return(
        <Link className={isActive?'nav-active':''} href={href}>
            {name}
        </Link>
    )
}