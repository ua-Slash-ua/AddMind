import styles from './TableHeadView.module.css'
import ChooseMany from "@/admin_panel/components/layout/CheckBox/ChooseMany";


interface TableHeadViewProps {
    tableKey: string,
    head: Record<string, string>,
}

export default function TableHeadView({tableKey, head}: TableHeadViewProps) {

    return (
        <thead className={styles.table_head_container}>
        <tr>
            <th>
                <ChooseMany/>
            </th>
            {Object.entries(head).map(([key, label]) => (
                <th key={key}>{label}</th>
            ))}
            <th>
                Керування
            </th>
        </tr>
        </thead>
    )
}