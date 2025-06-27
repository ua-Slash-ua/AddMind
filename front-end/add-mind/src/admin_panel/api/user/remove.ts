import {userLink} from "@/admin_panel/config/users.config";

export async function removeUser(id: number) {
    'use server';  // ОБОВ'ЯЗКОВО
    try {
        const response = await fetch(`${userLink}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Remove user failed:", error);
        throw error;
    }
}

