import TableView from "@/admin_panel/components/TableView/TableView";
import { UserHead } from "@/admin_panel/config/users.config";

export default function User_AP() {
    return (
        <TableView tableKey="user" head={UserHead} />
    );
}
