'use client';

import styles from "./btnRemove.module.css";
import {useRouter} from "next/navigation";

interface BtnRemoveProps {
    func: (id: number) => Promise<any>;
    id: number;
}

export default function BtnRemove({ func, id }: BtnRemoveProps) {
    const router = useRouter();
    const handleClick = () => {
        func(id);
        router.refresh()
    };

    return (
        <button
            className={styles.table_body_btn_remove}
            onClick={handleClick}
        >
            Remove
        </button>
    );
}
