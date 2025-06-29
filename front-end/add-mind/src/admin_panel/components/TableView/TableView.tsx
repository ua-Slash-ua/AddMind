import styles from './tableView.module.css'
import TableHeadView from "@/admin_panel/components/TableView/TableHead/TableHeadView";
import TableBodyView from "@/admin_panel/components/TableView/TableBody/TableBodyView";
import {userType} from "@/admin_panel/config/users.config";

type TableViewProps = {
    tableKey: string; // або інший тип, який потрібен
    head: Record<string, string>;        // заміни any на конкретний тип, якщо знаєш
    data: userType[]
};

export default function TableView({ tableKey, head, data}:TableViewProps) {
    return (
        <table className={styles.table_container}>
            <TableHeadView tableKey={tableKey} head={head} />
            <TableBodyView tableKey={tableKey} head={head} data ={data}/>
        </table>
    );
}
