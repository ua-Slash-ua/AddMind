import type {Metadata} from "next";
import Header_AP from "@/admin_panel/components/Header/Header_AP";

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Admin control panel",
};

export default function AdminContentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header_AP/>
            {children}
        </>
    );
}
