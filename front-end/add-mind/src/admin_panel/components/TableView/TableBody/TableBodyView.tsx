import styles from './TableBodyView.module.css'
import {userType} from "@/admin_panel/config/users.config";
import {formatValueAuto} from "@/admin_panel/assets/formatValue";
import BtnRemove from "@/admin_panel/components/layout/button/BtnRemove/BtnRemove";
import BtnEdit from "@/admin_panel/components/layout/button/BtnEdit/BtnEdit";
import {removeUser} from "@/admin_panel/api/user/remove";


interface TableHeadViewProps {
    tableKey: string,
    head: Record<string, string>,
    data: userType[]
}

export default async function TableBodyView({tableKey, head, data}: TableHeadViewProps) {


    return (
        <tbody className={styles.table_body_container}>
        {data.map((user) => (
            <tr key={user.id}>
                {Object.keys(head).map((key) => (
                    <td key={key}>
                        {formatValueAuto(user[key as keyof userType])}
                    </td>
                ))}
                <td>
                    <BtnEdit key={`btnEdit_${user.id}`} id={user.id}/>
                    <BtnRemove key="btnRemove" func={removeUser} id={user.id}/>
                </td>
            </tr>
        ))}
        </tbody>
    );
}

