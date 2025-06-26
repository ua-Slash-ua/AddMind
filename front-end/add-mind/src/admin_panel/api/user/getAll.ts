import {userLink} from "@/admin_panel/config/users.config";

export async function getAllUsers(){
    const result = await fetch(userLink)
    return result.json();
}