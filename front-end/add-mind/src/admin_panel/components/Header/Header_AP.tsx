import Menu_AP from "@/admin_panel/components/Menu/Menu_AP";
import styles from './header_AP.module.css';
import Link from "next/link";
import { PAGES_AP } from "@/admin_panel/config/pages.config";
import Image from "next/image";
export default function Header_AP() {
    return (
        <header className={styles.header}>
            <div className={styles.icon_container_ap}>
                <Link href={PAGES_AP.HOME}>
                    <Image
                        src="/addmind-logo.svg"
                        alt="AddMind"
                        width={120}
                        height={40}
                        className={styles.header_link_image}
                    />
                </Link>
            </div>

            <Menu_AP />
        </header>
    );
}
