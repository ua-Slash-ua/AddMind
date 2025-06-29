import TableView from "@/admin_panel/components/TableView/TableView";
import { UserHead } from "@/admin_panel/config/users.config";
import {getAllUsers} from "@/admin_panel/api/user/getAll";
import {AlertMessage} from "@/admin_panel/components/AlertMessage/AlertMessage";

export default async function User_AP() {
    const response = await getAllUsers();

    return (
        <TableView tableKey="user" head={UserHead} data={response.data}/>
    );
}
