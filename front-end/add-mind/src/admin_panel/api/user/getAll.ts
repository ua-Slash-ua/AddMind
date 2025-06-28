import {userLink} from "@/admin_panel/config/users.config";

export async function getAllUsers(){

    try {
        const response = await fetch(userLink, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Get user failed:", error);
        throw error;
    }
}