'use client'
import styles from './TableBodyView.module.css'
import {userType} from "@/admin_panel/config/users.config";
import {formatValueAuto} from "@/admin_panel/assets/formatValue";
import {AlertMessage} from "@/admin_panel/components/AlertMessage/AlertMessage";
import {useEffect, useState} from "react";
import ChooseMany from "@/admin_panel/components/layout/CheckBox/ChooseMany";
import ChooseOne from "@/admin_panel/components/layout/CheckBox/ChooseOne";


interface TableHeadViewProps {
    tableKey: string,
    head: Record<string, string>,
    data: userType[]
}

export default function TableBodyView({tableKey, head, data}: TableHeadViewProps) {
    useEffect(() => {
        if (data.length > 0) {
            AlertMessage(`Дані <_${tableKey}_> завантажено!`,'success');

        }else {
            AlertMessage(`Помилка завантаження завантаження <_${tableKey}_> !`,'error');
        }
    }, [data]);
    const [checkedAll] = useState(true);

    return (
        <tbody className={styles.table_body_container}>
        {data.map((user) => (
            <tr key={user.id}>
                <td>
                    <ChooseOne name="user" id={user.id} checked={checkedAll} />
                </td>

                {Object.keys(head).map((key) => (
                    <td key={key}>
                        {formatValueAuto(user[key as keyof userType])}
                    </td>
                ))}
                <td>
                </td>
            </tr>
        ))}
        </tbody>
    );
}

