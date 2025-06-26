import styles from './TableBodyView.module.css'
import {getAllUsers} from "@/admin_panel/api/user/getAll";
import {userType} from "@/admin_panel/config/users.config";
import {formatValueAuto} from "@/admin_panel/assets/formatValue";


interface TableHeadViewProps {
    tableKey: string,
    head: Record<string, string>,
}

export default async function TableBodyView({ tableKey, head }: TableHeadViewProps) {
    const response = await getAllUsers();
    console.log(response.data);
    return (
        <tbody className={styles.table_body_container}>
        {response.data.map((user: userType) => (
            <tr key={user.id}>
                {Object.keys(head).map((key) => (
                    <td key={key}>
                        {formatValueAuto(user[key as keyof userType])}
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    );
}

