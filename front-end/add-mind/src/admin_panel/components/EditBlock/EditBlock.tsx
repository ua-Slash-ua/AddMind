import {getAllUsers} from "@/admin_panel/api/user/getAll";
type EditBlockProps = {
    ids: number[];
};
export default async function EditBlock({ ids}:EditBlockProps) {

    let filter ={ids: ids}
    let userData = await getAllUsers(filter)
    userData = userData.data[0]
    return (
        <div >
            Користувач ID № {userData.id} <br/>
            Login: {userData.login}<br/>
            Date Created: {userData.create_dt}<br/>
            Date last Update: {userData.update_dt?userData.update_dt:'New'}<br/>
        </div>
    )
}
