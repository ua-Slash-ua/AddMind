'use client';

import { useRouter } from 'next/navigation';
import styles from './btnEdit.module.css';
import {PAGES_AP} from "@/admin_panel/config/pages.config";

interface BtnEditProps {
    id: number;
}

export default function BtnEdit({ id }: BtnEditProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(PAGES_AP.USER_EDIT(id));
    };

    return (
        <button className={styles.table_body_btn_edit} onClick={handleClick}>
            Edit
        </button>
    );
}
