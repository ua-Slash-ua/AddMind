import {userLink} from "@/admin_panel/config/users.config";

export async function getAllUsers(){
    console.log(userLink)
    const result = await fetch(userLink)
    return result.json();
}