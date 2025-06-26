import styles from './tableView.module.css'
import TableHeadView from "@/admin_panel/components/TableView/TableHead/TableHeadView";
import TableBodyView from "@/admin_panel/components/TableView/TableBody/TableBodyView";

type TableViewProps = {
    tableKey: string; // або інший тип, який потрібен
    head: Record<string, string>;        // заміни any на конкретний тип, якщо знаєш
};

export default function TableView({ tableKey, head}:TableViewProps) {
    return (
        <table className={styles.table_container}>
            <TableHeadView tableKey={tableKey} head={head} />
            <TableBodyView tableKey={tableKey} head={head} />
        </table>
    );
}
