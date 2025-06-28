import {UserFilter, userLink} from "@/admin_panel/config/users.config";
import {getBindingIdentifiers} from "@babel/types";

export async function getAllUsers(filter?:UserFilter){
    let fullUrl = userLink
    if (filter) {
        const queryParams = new URLSearchParams();

        for (const key in filter) {
            let value = filter[key as keyof UserFilter];
            if (value !== undefined && value !== null) {
                if (Array.isArray(value)) {
                    value = value.filter(v => v !== undefined && v !== null);
                    if (value.length > 0) {
                        queryParams.append(key, value.join(','));
                    }
                } else {
                    queryParams.append(key, String(value));
                }
            }
        }

        if (queryParams.toString()) {
            fullUrl += `?${queryParams.toString()}`;
        }
    }



    try {
        const response = await fetch(fullUrl, {
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