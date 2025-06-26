"use client";

import { usePathname } from "next/navigation";
import Header from "@/public-part/components/header/Header";

export default function ShowHeaderWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const showHeader = !pathname.startsWith("/admin-panel");

    return (
        <>
            {showHeader && <Header /> }
            {children}
        </>
    );
}
