import type {Metadata} from "next";
import Header_AP from "@/admin_panel/components/Header/Header_AP";
import {AlertMessageComponent} from "@/admin_panel/components/AlertMessage/AlertMessageComponent";

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Admin control panel",
};

export default function AdminContentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AlertMessageComponent/>
            <Header_AP/>
            {children}
        </>
    );
}
